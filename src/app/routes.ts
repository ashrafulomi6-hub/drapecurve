import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'shop', Component: Shop },
      { path: 'product/:id', Component: ProductDetails },
      { path: 'cart', Component: Cart },
      { path: 'checkout', Component: Checkout },
      { path: 'order-confirmation/:orderId', Component: OrderConfirmation },
      { path: 'admin/login', Component: AdminLogin },
      { path: 'admin/dashboard', Component: AdminDashboard },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'privacy-policy', Component: PrivacyPolicy },
      { path: 'terms-conditions', Component: TermsConditions },
      { path: 'shipping-policy', Component: ShippingPolicy },
      { path: 'return-policy', Component: ReturnPolicy },
      { path: '*', Component: NotFound },
    ],
  },
]);