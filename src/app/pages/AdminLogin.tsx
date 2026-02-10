import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock admin authentication
    if (credentials.email && credentials.password) {
      toast.success('Admin login successful');
      navigate('/admin/dashboard');
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-white mb-2"><span className="font-bold">DRAPE</span><span className="font-bold">CURVE</span></h1>
          <p className="text-gray-400">Admin Panel</p>
        </div>

        <div className="bg-white p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-center mb-6">Admin Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="admin@drapecurve.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-3 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Demo credentials: Any email and password
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}