import { Link, useLocation } from 'react-router';
import { ShoppingBag, Menu, X, MoreVertical } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
  ];

  const moreMenuLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/shipping-policy', label: 'Shipment Cost' },
    { path: '/contact', label: 'Contact Number' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl tracking-tight text-black">
            <span className="font-bold">DRAPE</span>
            <span className="font-bold">CURVE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  isActive(link.path) ? 'text-black' : 'text-muted-foreground hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* More Menu - Desktop */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className="text-black hover:bg-muted/50 p-2 rounded-full transition-colors"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {moreMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setMoreMenuOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-2 w-56 bg-white border border-border shadow-lg z-50"
                    >
                      <div className="py-2">
                        {moreMenuLinks.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setMoreMenuOpen(false)}
                            className="block px-4 py-3 text-sm hover:bg-muted/50 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <Link to="/cart" className="relative">
              <ShoppingBag className="w-6 h-6 text-black" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-black"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm uppercase tracking-wider ${
                    isActive(link.path) ? 'text-black' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">More</p>
                {moreMenuLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm py-2 text-muted-foreground hover:text-black"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}