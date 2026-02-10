import { Outlet, useLocation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Root() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && <Header />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
