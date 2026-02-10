import { motion } from 'motion/react';
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="mb-4">Privacy Policy</h1>
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
                At <span className="font-bold text-black">DRAPE</span><span className="font-bold text-black">CURVE</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6" />
                <h2>Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Personal Information</h3>
                  <p className="mb-2">When you make a purchase or create an account, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Shipping address</li>
                    <li>Payment information (processed securely through bKash/Nagad)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>IP address</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6" />
                <h2>How We Use Your Information</h2>
              </div>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and customer experience</li>
                  <li>Send promotional emails (with your consent)</li>
                  <li>Prevent fraudulent transactions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6" />
                <h2>Information Sharing and Disclosure</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-black">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, processing payments (bKash, Nagad), and delivering products.</li>
                  <li><strong className="text-black">Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
                  <li><strong className="text-black">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6" />
                <h2>Data Security</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p>
                  Payment information is processed securely through bKash and Nagad's encrypted payment gateways. We do not store your complete payment card details on our servers.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6" />
                <h2>Your Rights</h2>
              </div>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing (where applicable)</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at <strong className="text-black">support@drapecurve.com</strong> or call <strong className="text-black">+880 1XXX-XXXXXX</strong>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="mb-4">Cookies and Tracking Technologies</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookies through your browser settings, but disabling cookies may affect website functionality.
                </p>
              </div>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="mb-4">Third-Party Links</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="mb-4">Children's Privacy</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="mb-4">Changes to This Privacy Policy</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-black text-white p-8 mt-12">
              <h2 className="mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us:
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
