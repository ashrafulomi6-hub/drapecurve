import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Lock, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export default function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'nagad' | 'cod'>('bkash');

  const deliveryCharge = getTotalPrice() >= 2000 ? 0 : 100;
  const total = getTotalPrice() + deliveryCharge;

  // Authentication form state
  const [authForm, setAuthForm] = useState({
    email: '',
    phone: '',
    password: '',
    name: '',
  });

  // Checkout form state
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    setIsAuthenticated(true);
    setCheckoutForm({
      ...checkoutForm,
      name: authForm.name || 'Customer',
      email: authForm.email,
      phone: authForm.phone,
    });
    toast.success(authMode === 'login' ? 'Logged in successfully' : 'Account created successfully');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock order placement
    const orderId = Math.random().toString(36).substring(7).toUpperCase();
    clearCart();
    toast.success('Order placed successfully!');
    navigate(`/order-confirmation/${orderId}`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-white border border-border p-8">
            <div className="flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-center mb-2">
              {authMode === 'login' ? 'Login to Continue' : 'Create Account'}
            </h2>
            <p className="text-center text-muted-foreground text-sm mb-6">
              Authentication required to complete your purchase
            </p>

            <form onSubmit={handleAuth} className="space-y-4">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    value={authForm.name}
                    onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm mb-2">Email or Phone</label>
                <input
                  type="text"
                  value={authForm.email || authForm.phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d+$/.test(value) || value === '') {
                      setAuthForm({ ...authForm, phone: value, email: '' });
                    } else {
                      setAuthForm({ ...authForm, email: value, phone: '' });
                    }
                  }}
                  placeholder="your@email.com or 01XXXXXXXXX"
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Password</label>
                <input
                  type="password"
                  value={authForm.password}
                  onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                  required
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-3 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors"
              >
                {authMode === 'login' ? 'Login' : 'Sign Up'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                  className="text-sm text-accent hover:underline"
                >
                  {authMode === 'login'
                    ? "Don't have an account? Sign up"
                    : 'Already have an account? Login'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-black text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white">Checkout</h1>
          <p className="text-gray-300 mt-2">Complete your order</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Information */}
            <div className="bg-white border border-border p-6">
              <h3 className="text-lg font-bold mb-4">Delivery Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={checkoutForm.email}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      value={checkoutForm.phone}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Shipping Address</label>
                  <textarea
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-border p-6">
              <h3 className="text-lg font-bold mb-4">Payment Method</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border-2 border-border cursor-pointer hover:border-black transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="bkash"
                    checked={paymentMethod === 'bkash'}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-5 h-5 accent-black"
                  />
                  <Smartphone className="w-5 h-5 text-pink-600" />
                  <span className="flex-1 font-medium">bKash</span>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-border cursor-pointer hover:border-black transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="nagad"
                    checked={paymentMethod === 'nagad'}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-5 h-5 accent-black"
                  />
                  <CreditCard className="w-5 h-5 text-orange-600" />
                  <span className="flex-1 font-medium">Nagad</span>
                </label>

                <label className="flex items-center gap-3 p-4 border-2 border-border cursor-pointer hover:border-black transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-5 h-5 accent-black"
                  />
                  <Banknote className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <span className="font-medium block">Cash on Delivery</span>
                    <span className="text-xs text-muted-foreground">
                      Delivery charge: ৳{deliveryCharge === 0 ? 0 : 100}
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-border p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex-1">
                      {item.product.name} x{item.quantity}
                    </span>
                    <span className="font-medium">
                      ৳ {(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

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
              </div>

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>৳ {total.toLocaleString()} BDT</span>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
