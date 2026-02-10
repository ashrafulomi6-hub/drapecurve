import { useState } from 'react';
import { Link } from 'react-router';
import {
  Package,
  ShoppingCart,
  Plus,
  Edit,
  Trash2,
  LogOut,
  X,
  Upload,
  DollarSign,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products as initialProducts } from '../data/products';
import { Product } from '../types/product';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');

  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    price: 0,
    category: 'oversized-tees',
    colors: ['black', 'white'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: '',
    fabric: '',
    featured: false,
    trending: false,
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name!,
      price: newProduct.price!,
      category: newProduct.category!,
      colors: newProduct.colors!,
      sizes: newProduct.sizes!,
      images: {
        black: ['https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG92ZXJzaXplZCUyMHRzaGlydCUyMGBhbGUlMjBtb2RlbHxlbnwxfHx8fDE3NzA3MzMyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'],
        white: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG92ZXJzaXplZCUyMHRzaGlydCUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzcwNjI2NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080'],
      },
      description: newProduct.description!,
      fabric: newProduct.fabric!,
      featured: newProduct.featured,
      trending: newProduct.trending,
    };

    setProducts([...products, product]);
    toast.success('Product added successfully');
    setShowAddModal(false);
    resetForm();
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id));
      toast.success('Product deleted successfully');
    }
  };

  const resetForm = () => {
    setNewProduct({
      name: '',
      price: 0,
      category: 'oversized-tees',
      colors: ['black', 'white'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      description: '',
      fabric: '',
      featured: false,
      trending: false,
    });
  };

  // Mock orders data
  const mockOrders = [
    {
      id: 'ORD001',
      customer: 'John Doe',
      total: 3599,
      items: 2,
      payment: 'bKash',
      status: 'Processing',
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      total: 1499,
      items: 1,
      payment: 'COD',
      status: 'Pending',
    },
    {
      id: 'ORD003',
      customer: 'Mike Johnson',
      total: 5298,
      items: 3,
      payment: 'Nagad',
      status: 'Shipped',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-black text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl text-white"><span className="font-bold">DRAPE</span><span className="font-bold">CURVE</span> Admin</h1>
            <p className="text-sm text-gray-400">Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm uppercase tracking-wider hover:text-accent transition-colors"
            >
              View Store
            </Link>
            <Link
              to="/admin/login"
              className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-accent transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Total Products
              </h3>
              <Package className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">{products.length}</p>
          </div>

          <div className="bg-white border border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Total Orders
              </h3>
              <ShoppingCart className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">{mockOrders.length}</p>
          </div>

          <div className="bg-white border border-border p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Revenue
              </h3>
              <DollarSign className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">
              ৳ {mockOrders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-3 text-sm uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'products'
                ? 'border-black text-black'
                : 'border-transparent text-muted-foreground hover:text-black'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-3 text-sm uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'orders'
                ? 'border-black text-black'
                : 'border-transparent text-muted-foreground hover:text-black'
            }`}
          >
            Orders
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2>Manage Products</h2>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors inline-flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Product
              </button>
            </div>

            <div className="bg-white border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-16 bg-muted flex-shrink-0">
                              <img
                                src={product.images.black[0]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{product.name}</p>
                              {product.featured && (
                                <span className="text-xs text-accent">Featured</span>
                              )}
                              {product.trending && (
                                <span className="text-xs text-accent ml-2">Trending</span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground capitalize">
                          {product.category.replace('-', ' ')}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          ৳ {product.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {product.sizes.length} sizes
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setEditingProduct(product)}
                              className="p-2 hover:bg-muted transition-colors"
                              aria-label="Edit product"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="p-2 hover:bg-muted transition-colors text-destructive"
                              aria-label="Delete product"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="mb-6">Recent Orders</h2>

            <div className="bg-white border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Items
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Payment
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium">#{order.id}</td>
                        <td className="px-6 py-4 text-sm">{order.customer}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {order.items} items
                        </td>
                        <td className="px-6 py-4 text-sm">{order.payment}</td>
                        <td className="px-6 py-4 text-sm font-medium">
                          ৳ {order.total.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                              order.status === 'Processing'
                                ? 'bg-blue-100 text-blue-800'
                                : order.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-50 overflow-y-auto"
            >
              <div className="bg-white p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Add New Product</h3>
                  <button onClick={() => setShowAddModal(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Product Name</label>
                    <input
                      type="text"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Price (৳)</label>
                      <input
                        type="number"
                        value={newProduct.price}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, price: Number(e.target.value) })
                        }
                        className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2">Category</label>
                      <select
                        value={newProduct.category}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, category: e.target.value as any })
                        }
                        className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="oversized-tees">Oversized Tees</option>
                        <option value="jerseys">Jerseys</option>
                        <option value="polos">Polos</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Description</label>
                    <textarea
                      value={newProduct.description}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, description: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black resize-none"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Fabric Details</label>
                    <input
                      type="text"
                      value={newProduct.fabric}
                      onChange={(e) => setNewProduct({ ...newProduct, fabric: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newProduct.featured}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, featured: e.target.checked })
                        }
                        className="w-4 h-4 accent-black"
                      />
                      <span className="text-sm">Featured Product</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newProduct.trending}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, trending: e.target.checked })
                        }
                        className="w-4 h-4 accent-black"
                      />
                      <span className="text-sm">Trending Product</span>
                    </label>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-black text-white px-8 py-3 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors"
                    >
                      Add Product
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="flex-1 border-2 border-black text-black px-8 py-3 text-base font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}