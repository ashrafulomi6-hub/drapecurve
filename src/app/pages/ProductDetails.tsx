import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { ChevronLeft, Check, Truck, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = useState<'black' | 'white'>('black');
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>('M');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Product not found</h2>
          <Link to="/shop" className="text-accent underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
    toast.success('Added to cart!', {
      description: `${product.name} - ${selectedColor.toUpperCase()} / ${selectedSize}`,
    });
  };

  const handleBuyNow = () => {
    addToCart(product, selectedColor, selectedSize);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Product Images */}
          <div>
            <motion.div
              key={selectedColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="aspect-[3/4] bg-muted mb-4 overflow-hidden"
            >
              <img
                src={product.images[selectedColor][currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {product.category.replace('-', ' ')}
              </p>
              <h1 className="text-3xl md:text-4xl mb-4">{product.name}</h1>
              <p className="text-2xl font-bold">৳ {product.price.toLocaleString()} BDT</p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                Color: <span className="font-normal">{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-black scale-110 ring-2 ring-black ring-offset-2'
                        : 'border-gray-300 hover:border-gray-400'
                    } ${color === 'black' ? 'bg-black' : 'bg-white'}`}
                    aria-label={`${color} color`}
                  >
                    {selectedColor === color && (
                      <Check
                        className={`w-6 h-6 mx-auto ${color === 'black' ? 'text-white' : 'text-black'}`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                Size: <span className="font-normal">{selectedSize}</span>
              </label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 text-sm font-medium uppercase tracking-wider transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full bg-white text-black border-2 border-black px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                Buy Now
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t border-border pt-6 space-y-4">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Description</h4>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Fabric</h4>
                <p className="text-muted-foreground">{product.fabric}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Free Delivery</p>
                    <p className="text-xs text-muted-foreground">On orders over ৳2,000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">7-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
