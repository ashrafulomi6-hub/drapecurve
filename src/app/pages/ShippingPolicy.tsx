import { motion } from 'motion/react';
import { Truck, MapPin, Clock, DollarSign, Package } from 'lucide-react';

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
              <Truck className="w-8 h-8" />
            </div>
            <h1 className="mb-4">Shipping Policy</h1>
            <p className="text-muted-foreground">
              Fast, Reliable Delivery Across Bangladesh
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                At <span className="font-bold text-black">DRAPE</span><span className="font-bold text-black">CURVE</span>, we are committed to delivering your order quickly and safely. We currently ship to all major cities and regions across Bangladesh. Please read our shipping policy below for detailed information.
              </p>
            </div>

            {/* Shipping Coverage */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6" />
                <h2>Shipping Coverage</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We ship to all locations within Bangladesh, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-black">Inside Dhaka:</strong> All areas within Dhaka city</li>
                  <li><strong className="text-black">Outside Dhaka:</strong> All major cities including Chittagong, Sylhet, Rajshahi, Khulna, Barisal, Rangpur, Mymensingh, and surrounding districts</li>
                </ul>
                <p className="bg-muted/30 p-4 border border-border mt-4">
                  <strong className="text-black">Note:</strong> We currently do not offer international shipping. All deliveries are domestic within Bangladesh only.
                </p>
              </div>
            </div>

            {/* Shipping Costs */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6" />
                <h2>Shipping Costs</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-black text-white p-6">
                  <h3 className="text-xl font-bold mb-4">Shipping Rates</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-300 mb-2">Inside Dhaka</p>
                      <p className="text-3xl font-bold">৳60</p>
                      <p className="text-sm text-gray-400 mt-1">Flat rate for all orders</p>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">Outside Dhaka</p>
                      <p className="text-3xl font-bold">৳120</p>
                      <p className="text-sm text-gray-400 mt-1">Flat rate for all orders</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Shipping charges are calculated automatically at checkout based on your delivery location. The total shipping cost will be clearly displayed before you complete your order.
                </p>
                <div className="bg-muted/30 p-6 border border-border">
                  <h3 className="font-bold text-black mb-3">Free Shipping Offers</h3>
                  <p className="text-muted-foreground">
                    We occasionally run promotions offering free shipping on orders above a certain amount. Stay tuned to our social media and website for special offers!
                  </p>
                </div>
              </div>
            </div>

            {/* Processing Time */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6" />
                <h2>Order Processing Time</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Once your order is confirmed and payment is received, we process orders within:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-black">1-2 Business Days:</strong> Standard processing time for in-stock items</li>
                  <li><strong className="text-black">3-5 Business Days:</strong> For pre-order or out-of-stock items (if applicable)</li>
                </ul>
                <p>
                  Business days are Saturday through Thursday, excluding public holidays and Fridays.
                </p>
                <p className="bg-muted/30 p-4 border border-border mt-4">
                  <strong className="text-black">Note:</strong> Orders placed on Friday or public holidays will be processed on the next business day.
                </p>
              </div>
            </div>

            {/* Delivery Time */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h2>Estimated Delivery Time</h2>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 border border-border">
                    <h3 className="font-bold text-black mb-3">Inside Dhaka</h3>
                    <p className="text-2xl font-bold text-black mb-2">2-4 Days</p>
                    <p className="text-sm text-muted-foreground">
                      After order processing, delivery typically takes 2-4 business days
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 border border-border">
                    <h3 className="font-bold text-black mb-3">Outside Dhaka</h3>
                    <p className="text-2xl font-bold text-black mb-2">4-7 Days</p>
                    <p className="text-sm text-muted-foreground">
                      After order processing, delivery typically takes 4-7 business days
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Please note that these are estimated delivery times. Actual delivery may vary depending on your location, courier availability, and external factors such as weather conditions or public holidays.
                </p>
              </div>
            </div>

            {/* Order Tracking */}
            <div>
              <h2 className="mb-4">Order Tracking</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Once your order is shipped, you will receive:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A shipment confirmation email with tracking information</li>
                  <li>SMS notification with courier details and tracking number</li>
                  <li>Updates on delivery status via SMS or phone call from the courier</li>
                </ul>
                <p>
                  You can also check your order status by logging into your account on our website.
                </p>
              </div>
            </div>

            {/* Delivery Process */}
            <div>
              <h2 className="mb-4">Delivery Process</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Our courier partner will attempt to deliver your order to the address provided during checkout. Please ensure:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your shipping address is accurate and complete</li>
                  <li>Someone is available to receive the package</li>
                  <li>Your contact number is reachable</li>
                </ul>
                <p>
                  If the courier is unable to deliver your order (e.g., incorrect address, no one available), they will contact you to arrange redelivery. Additional delivery charges may apply for redelivery attempts.
                </p>
              </div>
            </div>

            {/* Cash on Delivery */}
            <div>
              <h2 className="mb-4">Cash on Delivery (COD)</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We offer Cash on Delivery for orders within Dhaka city. Please have the exact amount ready when the courier arrives, as they may not always carry change.
                </p>
                <p className="bg-muted/30 p-4 border border-border mt-4">
                  <strong className="text-black">COD Terms:</strong> Cash on Delivery is available only within Dhaka. For outside Dhaka orders, payment must be made via bKash or Nagad before shipping.
                </p>
              </div>
            </div>

            {/* Damaged or Lost Packages */}
            <div>
              <h2 className="mb-4">Damaged or Lost Packages</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We package all orders carefully to prevent damage during transit. However, if you receive a damaged package:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Do not accept the delivery if the package appears severely damaged</li>
                  <li>Take photos of the damaged package and contents</li>
                  <li>Contact us immediately at <strong className="text-black">support@drapecurve.com</strong> or <strong className="text-black">+880 1XXX-XXXXXX</strong></li>
                </ul>
                <p>
                  If your package is lost during transit, please contact us within 7 days of the expected delivery date. We will investigate with the courier and arrange a replacement or refund.
                </p>
              </div>
            </div>

            {/* Shipping Delays */}
            <div>
              <h2 className="mb-4">Shipping Delays</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  While we strive to deliver on time, delays may occur due to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>High demand during peak seasons (Eid, New Year, etc.)</li>
                  <li>Courier service disruptions</li>
                  <li>Weather conditions or natural disasters</li>
                  <li>Political unrest or public holidays</li>
                  <li>Remote or hard-to-reach locations</li>
                </ul>
                <p>
                  We will notify you immediately if there are any unexpected delays with your order.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-black text-white p-8 mt-12">
              <h2 className="mb-4">Questions About Shipping?</h2>
              <p className="mb-4">
                If you have any questions about our shipping policy or need assistance with your order, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: support@drapecurve.com</p>
                <p>Phone: +880 1XXX-XXXXXX</p>
                <p>WhatsApp: +880 1XXX-XXXXXX</p>
                <p>Business Hours: Sat-Thu (10 AM - 8 PM), Fri (2 PM - 8 PM)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
