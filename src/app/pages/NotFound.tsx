import { Link } from 'react-router';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
          >
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
