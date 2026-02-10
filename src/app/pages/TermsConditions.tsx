import { motion } from 'motion/react';
import { FileText, CheckCircle, XCircle } from 'lucide-react';

export default function TermsConditions() {
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
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">
              Last Updated: February 10, 2026
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
                Welcome to <span className="font-bold text-black">DRAPE</span><span className="font-bold text-black">CURVE</span>. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before making any purchase or using our services.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div>
              <h2 className="mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  By accessing our website (drapecurve.com) and placing an order, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
                </p>
              </div>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="mb-4">2. Use of Website</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others. You must not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the website in any way that violates local, national, or international law</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Transmit any harmful or malicious code</li>
                  <li>Collect or harvest any information from the website</li>
                  <li>Use the website for fraudulent purposes</li>
                </ul>
              </div>
            </div>

            {/* Account Registration */}
            <div>
              <h2 className="mb-4">3. Account Registration & Checkout</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  While browsing our products does not require registration, you must create an account or log in when proceeding to checkout. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate accounts that violate these terms.
                </p>
              </div>
            </div>

            {/* Product Information */}
            <div>
              <h2 className="mb-4">4. Product Information & Availability</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We strive to provide accurate product descriptions, images, and pricing. However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Colors may vary slightly due to screen settings</li>
                  <li>All products are available exclusively in Black and White</li>
                  <li>Prices are displayed in Bangladeshi Taka (৳ BDT)</li>
                  <li>We reserve the right to limit quantities or discontinue products</li>
                  <li>Product availability is subject to change without notice</li>
                </ul>
              </div>
            </div>

            {/* Pricing & Payment */}
            <div>
              <h2 className="mb-4">5. Pricing & Payment</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  All prices are listed in Bangladeshi Taka (৳ BDT) and include applicable taxes unless otherwise stated. We accept the following payment methods:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-black">bKash:</strong> Personal account - 01XXX-XXXXXX</li>
                  <li><strong className="text-black">Nagad:</strong> Personal account - 01XXX-XXXXXX</li>
                  <li><strong className="text-black">Cash on Delivery:</strong> Available within Dhaka city</li>
                </ul>
                <p>
                  We reserve the right to change prices at any time. However, orders already placed will be honored at the price shown at checkout.
                </p>
              </div>
            </div>

            {/* Order Processing */}
            <div>
              <h2 className="mb-4">6. Order Processing & Confirmation</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  When you place an order, you will receive an order confirmation email. This confirmation does not constitute acceptance of your order—it is simply an acknowledgment that we have received it.
                </p>
                <p>
                  We reserve the right to accept or decline any order for any reason, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Product unavailability</li>
                  <li>Pricing errors</li>
                  <li>Suspected fraudulent activity</li>
                  <li>Failure to meet payment requirements</li>
                </ul>
              </div>
            </div>

            {/* Shipping & Delivery */}
            <div>
              <h2 className="mb-4">7. Shipping & Delivery</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We currently ship within Bangladesh only. Delivery times and costs vary based on your location. Please refer to our <strong className="text-black">Shipping Policy</strong> page for detailed information.
                </p>
                <p>
                  While we strive to deliver within the estimated timeframe, delays may occur due to unforeseen circumstances. DRAPECURVE is not liable for delays caused by third-party courier services or events beyond our control.
                </p>
              </div>
            </div>

            {/* Returns & Refunds */}
            <div>
              <h2 className="mb-4">8. Returns & Refunds</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We want you to love your purchase. If you're not satisfied, please review our <strong className="text-black">Return Policy</strong> for detailed instructions on how to return or exchange items.
                </p>
                <div className="flex items-start gap-3 mt-4 bg-muted/30 p-4 border border-border">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-black mt-1" />
                  <div>
                    <p className="font-bold text-black mb-1">Returns Accepted:</p>
                    <p>Defective items, wrong size/color, damaged during shipping</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-4 bg-muted/30 p-4 border border-border">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-black mt-1" />
                  <div>
                    <p className="font-bold text-black mb-1">Returns Not Accepted:</p>
                    <p>Items worn, washed, or damaged by customer; items without original tags</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="mb-4">9. Intellectual Property</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of DRAPECURVE and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="mb-4">10. Limitation of Liability</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  To the fullest extent permitted by law, DRAPECURVE shall not be liable for any indirect, incidental, special, or consequential damages arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use or inability to use our website</li>
                  <li>Unauthorized access to your account</li>
                  <li>Errors or omissions in product information</li>
                  <li>Delays or interruptions in service</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="mb-4">11. Governing Law</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  These Terms and Conditions are governed by the laws of Bangladesh. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Dhaka, Bangladesh.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="mb-4">12. Changes to Terms</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-black text-white p-8 mt-12">
              <h2 className="mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: support@drapecurve.com</p>
                <p>Phone: +880 1XXX-XXXXXX</p>
                <p>Address: House #XX, Road #XX, Dhanmondi, Dhaka-1209, Bangladesh</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
