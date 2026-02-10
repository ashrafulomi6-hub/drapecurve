import { motion } from 'motion/react';
import { RotateCcw, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

export default function ReturnPolicy() {
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
              <RotateCcw className="w-8 h-8" />
            </div>
            <h1 className="mb-4">Return & Exchange Policy</h1>
            <p className="text-muted-foreground">
              Your Satisfaction is Our Priority
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
                At <span className="font-bold text-black">DRAPE</span><span className="font-bold text-black">CURVE</span>, we want you to love your purchase. If you're not completely satisfied with your order, we offer returns and exchanges under the conditions outlined below. Please read this policy carefully before initiating a return or exchange.
              </p>
            </div>

            {/* Return Window */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h2>Return & Exchange Window</h2>
              </div>
              <div className="bg-black text-white p-6">
                <p className="text-2xl font-bold mb-2">7 Days</p>
                <p className="text-gray-300">
                  You have 7 days from the date of delivery to request a return or exchange. Returns or exchanges requested after this period will not be accepted.
                </p>
              </div>
            </div>

            {/* Eligible Returns */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6" />
                <h2>What Can Be Returned or Exchanged</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We accept returns and exchanges for the following reasons:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-muted/30 p-4 border border-border">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-black mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">Defective or Damaged Items</p>
                      <p className="text-sm text-muted-foreground">
                        Items with manufacturing defects, holes, tears, or damage caused during shipping
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/30 p-4 border border-border">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-black mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">Wrong Item Received</p>
                      <p className="text-sm text-muted-foreground">
                        If you received a different product than what you ordered
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/30 p-4 border border-border">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-black mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">Incorrect Size or Color</p>
                      <p className="text-sm text-muted-foreground">
                        If the size or color you received does not match your order
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/30 p-4 border border-border">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-black mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">Sizing Issues</p>
                      <p className="text-sm text-muted-foreground">
                        If the item doesn't fit, you can exchange it for a different size (subject to availability)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Eligible Returns */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6" />
                <h2>What Cannot Be Returned or Exchanged</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We cannot accept returns or exchanges in the following cases:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-muted/30 p-4 border border-border">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">Worn or Washed Items</p>
                      <p className="text-sm text-muted-foreground">
                        Items that have been worn, washed, or altered in any way
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/30 p-4 border border-border">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">Missing Tags or Packaging</p>
                      <p className="text-sm text-muted-foreground">
                        Items without original tags, labels, or packaging
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/30 p-4 border border-border">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">Customer Damage</p>
                      <p className="text-sm text-muted-foreground">
                        Items damaged due to misuse, improper care, or customer negligence
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/30 p-4 border border-border">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">Sale or Clearance Items</p>
                      <p className="text-sm text-muted-foreground">
                        Items purchased during clearance or final sale promotions (unless defective)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-muted/30 p-4 border border-border">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-1" />
                    <div>
                      <p className="font-bold text-black mb-1">Late Requests</p>
                      <p className="text-sm text-muted-foreground">
                        Return or exchange requests made after 7 days from delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Return */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6" />
                <h2>How to Initiate a Return or Exchange</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Follow these simple steps to return or exchange your item:</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Contact Us</h3>
                      <p>
                        Email us at <strong className="text-black">support@drapecurve.com</strong> or call/WhatsApp <strong className="text-black">+880 1XXX-XXXXXX</strong> within 7 days of receiving your order.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Provide Details</h3>
                      <p>
                        Share your order number, reason for return/exchange, and photos of the item (if defective or damaged).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Get Approval</h3>
                      <p>
                        Our team will review your request and approve the return/exchange within 1-2 business days.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Send the Item Back</h3>
                      <p>
                        Pack the item securely with all original tags and packaging. Ship it back to the address provided by our team. We recommend using a trackable courier service.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Receive Refund or Exchange</h3>
                      <p>
                        Once we receive and inspect the returned item, we will process your refund or send out the exchanged item within 3-5 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Shipping */}
            <div>
              <h2 className="mb-4">Return Shipping Costs</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-black">Defective or Wrong Items:</strong> We will cover the return shipping cost. Please contact us before shipping, and we'll arrange pickup or provide a prepaid shipping label.
                  </li>
                  <li>
                    <strong className="text-black">Change of Mind or Sizing Issues:</strong> Customers are responsible for return shipping costs.
                  </li>
                </ul>
              </div>
            </div>

            {/* Refund Process */}
            <div>
              <h2 className="mb-4">Refund Process</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Once your return is received and inspected, we will process your refund within 3-5 business days. Refunds will be issued to your original payment method:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-black">bKash/Nagad:</strong> Refund will be sent to the same number used for payment</li>
                  <li><strong className="text-black">Cash on Delivery:</strong> Refund will be sent via bKash or Nagad (please provide your preferred number)</li>
                </ul>
                <p className="bg-muted/30 p-4 border border-border mt-4">
                  <strong className="text-black">Note:</strong> Shipping charges are non-refundable unless the return is due to our error or a defective product.
                </p>
              </div>
            </div>

            {/* Exchange Process */}
            <div>
              <h2 className="mb-4">Exchange Process</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  If you wish to exchange your item for a different size or color, we will ship the new item once we receive your returned product. Exchanges are subject to product availability.
                </p>
                <p>
                  If the desired size or color is out of stock, we will offer a full refund or store credit for a future purchase.
                </p>
              </div>
            </div>

            {/* Inspection Policy */}
            <div>
              <h2 className="mb-4">Item Inspection at Delivery</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  We strongly encourage you to inspect your order immediately upon delivery. Check for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Correct item and size</li>
                  <li>Any visible defects or damage</li>
                  <li>Proper packaging and tags</li>
                </ul>
                <p>
                  If you notice any issues during delivery, you can refuse to accept the package or note the damage with the courier. Contact us immediately for assistance.
                </p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-black text-white p-8">
              <h2 className="mb-4">Important Notes</h2>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li>• All returns must be authorized by DRAPECURVE before shipping back</li>
                <li>• Items must be in their original, unworn, and unwashed condition</li>
                <li>• Original tags, labels, and packaging must be intact</li>
                <li>• We reserve the right to reject returns that do not meet our policy requirements</li>
                <li>• Please allow 3-5 business days for refund processing after we receive your return</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-muted/30 p-8 border border-border">
              <h2 className="mb-4">Need Help with a Return or Exchange?</h2>
              <p className="text-muted-foreground mb-4">
                Our customer support team is here to assist you with any questions or concerns about returns and exchanges.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: <strong className="text-black">support@drapecurve.com</strong></p>
                <p>Phone: <strong className="text-black">+880 1XXX-XXXXXX</strong></p>
                <p>WhatsApp: <strong className="text-black">+880 1XXX-XXXXXX</strong></p>
                <p>Business Hours: Sat-Thu (10 AM - 8 PM), Fri (2 PM - 8 PM)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
