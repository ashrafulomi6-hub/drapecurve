import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types/product';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    color: 'all',
    size: 'all',
    priceRange: 'all',
  });

  useEffect(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.color !== 'all') {
      result = result.filter((p) => p.colors.includes(filters.color as 'black' | 'white'));
    }

    if (filters.size !== 'all') {
      result = result.filter((p) => p.sizes.includes(filters.size as any));
    }

    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }

    setFilteredProducts(result);
  }, [filters]);

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    if (key === 'category' && value !== 'all') {
      searchParams.set('category', value);
      setSearchParams(searchParams);
    } else if (key === 'category') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    }
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      color: 'all',
      size: 'all',
      priceRange: 'all',
    });
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.color !== 'all' ||
    filters.size !== 'all' ||
    filters.priceRange !== 'all';

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-black text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-4 text-white">Shop All</h1>
          <p className="text-gray-300 text-lg">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold uppercase tracking-wider">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-black transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <FilterSection
                title="Category"
                options={[
                  { value: 'all', label: 'All Products' },
                  { value: 'oversized-tees', label: 'Oversized Tees' },
                  { value: 'jerseys', label: 'Jerseys' },
                  { value: 'polos', label: 'Polos' },
                ]}
                selected={filters.category}
                onChange={(value) => updateFilter('category', value)}
              />

              <FilterSection
                title="Color"
                options={[
                  { value: 'all', label: 'All Colors' },
                  { value: 'black', label: 'Black' },
                  { value: 'white', label: 'White' },
                ]}
                selected={filters.color}
                onChange={(value) => updateFilter('color', value)}
              />

              <FilterSection
                title="Size"
                options={[
                  { value: 'all', label: 'All Sizes' },
                  { value: 'S', label: 'S' },
                  { value: 'M', label: 'M' },
                  { value: 'L', label: 'L' },
                  { value: 'XL', label: 'XL' },
                  { value: 'XXL', label: 'XXL' },
                ]}
                selected={filters.size}
                onChange={(value) => updateFilter('size', value)}
              />

              <FilterSection
                title="Price Range"
                options={[
                  { value: 'all', label: 'All Prices' },
                  { value: '0-1500', label: 'Under ৳1,500' },
                  { value: '1500-2000', label: '৳1,500 - ৳2,000' },
                  { value: '2000-0', label: 'Above ৳2,000' },
                ]}
                selected={filters.priceRange}
                onChange={(value) => updateFilter('priceRange', value)}
              />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="md:hidden">
            <button
              onClick={() => setShowFilters(true)}
              className="w-full bg-black text-white px-6 py-3 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              <Filter className="w-4 h-4" />
              Filters {hasActiveFilters && '(Active)'}
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products found matching your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-sm uppercase tracking-wider underline hover:no-underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold uppercase tracking-wider">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="w-full mb-6 text-sm text-center py-2 border border-black hover:bg-black hover:text-white transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}

                <FilterSection
                  title="Category"
                  options={[
                    { value: 'all', label: 'All Products' },
                    { value: 'oversized-tees', label: 'Oversized Tees' },
                    { value: 'jerseys', label: 'Jerseys' },
                    { value: 'polos', label: 'Polos' },
                  ]}
                  selected={filters.category}
                  onChange={(value) => updateFilter('category', value)}
                />

                <FilterSection
                  title="Color"
                  options={[
                    { value: 'all', label: 'All Colors' },
                    { value: 'black', label: 'Black' },
                    { value: 'white', label: 'White' },
                  ]}
                  selected={filters.color}
                  onChange={(value) => updateFilter('color', value)}
                />

                <FilterSection
                  title="Size"
                  options={[
                    { value: 'all', label: 'All Sizes' },
                    { value: 'S', label: 'S' },
                    { value: 'M', label: 'M' },
                    { value: 'L', label: 'L' },
                    { value: 'XL', label: 'XL' },
                    { value: 'XXL', label: 'XXL' },
                  ]}
                  selected={filters.size}
                  onChange={(value) => updateFilter('size', value)}
                />

                <FilterSection
                  title="Price Range"
                  options={[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-1500', label: 'Under ৳1,500' },
                    { value: '1500-2000', label: '৳1,500 - ৳2,000' },
                    { value: '2000-0', label: 'Above ৳2,000' },
                  ]}
                  selected={filters.priceRange}
                  onChange={(value) => updateFilter('priceRange', value)}
                />

                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full mt-6 bg-black text-white px-6 py-3 text-sm uppercase tracking-wider"
                >
                  View {filteredProducts.length} Products
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FilterSectionProps {
  title: string;
  options: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}

function FilterSection({ title, options, selected, onChange }: FilterSectionProps) {
  return (
    <div className="mb-8">
      <h4 className="text-sm font-bold uppercase tracking-wider mb-4">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 cursor-pointer group text-sm"
          >
            <input
              type="radio"
              name={title}
              value={option.value}
              checked={selected === option.value}
              onChange={() => onChange(option.value)}
              className="w-4 h-4 accent-black cursor-pointer"
            />
            <span className="group-hover:text-black transition-colors">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
