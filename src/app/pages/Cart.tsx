import { Link, useNavigate } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const deliveryCharge = getTotalPrice() >= 2000 ? 0 : 100;
  const total = getTotalPrice() + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some products to get started</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors"
          >
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-black text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white">Shopping Cart</h1>
          <p className="text-gray-300 mt-2">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={`${item.product.id}-${item.color}-${item.size}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-border p-4 md:p-6 flex gap-4"
              >
                {/* Product Image */}
                <div className="w-24 h-32 md:w-32 md:h-40 bg-muted flex-shrink-0 overflow-hidden">
                  <img
                    src={item.product.images[item.color][0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="text-lg font-medium hover:text-accent transition-colors mb-1 block"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.color.toUpperCase()} / {item.size}
                    </p>
                    <p className="text-lg font-bold">
                      ৳ {(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-8 h-8 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-8 h-8 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-destructive hover:text-destructive/80 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-border p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">৳ {getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Charge</span>
                  <span className="font-medium">
                    {deliveryCharge === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `৳ ${deliveryCharge}`
                    )}
                  </span>
                </div>
                {deliveryCharge > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Free delivery on orders over ৳2,000
                  </p>
                )}
              </div>

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>৳ {total.toLocaleString()} BDT</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-black text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors mb-3"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="block text-center text-sm uppercase tracking-wider text-muted-foreground hover:text-black transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
