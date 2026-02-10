import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or need assistance? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+880 1XXX-XXXXXX</p>
                    <p className="text-muted-foreground">+880 1XXX-XXXXXX</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">support@drapecurve.com</p>
                    <p className="text-muted-foreground">info@drapecurve.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      House #XX, Road #XX<br />
                      Dhanmondi, Dhaka-1209<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Saturday - Thursday: 10:00 AM - 8:00 PM<br />
                      Friday: 2:00 PM - 8:00 PM
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">+880 1XXX-XXXXXX</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Quick support via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="mt-12 p-6 bg-muted/30 border border-border">
                <h3 className="font-bold mb-4">Payment Methods</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• bKash - 01XXX-XXXXXX (Personal)</p>
                  <p>• Nagad - 01XXX-XXXXXX (Personal)</p>
                  <p>• Cash on Delivery (Available in Dhaka)</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-muted/30 p-8 md:p-10 border border-border">
                <h2 className="mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-black text-white p-6 text-center">
                    <p className="text-lg font-bold mb-2">Thank You!</p>
                    <p>We've received your message and will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border bg-white focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border bg-white focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border bg-white focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-border bg-white focus:outline-none focus:ring-2 focus:ring-black resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
