import { Link, useParams } from 'react-router';
import { CheckCircle, Package, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export default function OrderConfirmation() {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white border border-border p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>

          <h1 className="mb-4">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your order. We've received your purchase and will process it shortly.
          </p>

          <div className="bg-muted p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-2">Order Number</p>
            <p className="text-2xl font-bold tracking-wider">#{orderId}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <div className="flex gap-4">
              <Package className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold mb-1">Order Processing</h4>
                <p className="text-sm text-muted-foreground">
                  Your order is being prepared for shipment
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Truck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold mb-1">Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Expected delivery in 3-5 business days
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to="/shop"
              className="block w-full bg-black text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="block w-full border-2 border-black text-black px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
