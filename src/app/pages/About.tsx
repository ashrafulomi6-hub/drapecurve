import { motion } from 'motion/react';
import { Target, Users, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1635650804494-41f0ecefec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzcwNjQ3MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            About <span className="font-bold">DRAPE</span><span className="font-bold">CURVE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200"
          >
            Redefining Men's Oversized Streetwear
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-bold text-black">DRAPE</span><span className="font-bold text-black">CURVE</span> was born from a passion for oversized fashion and a vision to create premium streetwear that speaks to the bold, confident men of Bangladesh. We understand that fashion is more than just clothing—it's a statement, an attitude, and a way of life.
              </p>
              <p>
                Founded in 2026, we set out to fill a gap in the market for high-quality, oversized athletic and Western streetwear designed specifically for the modern Bangladeshi youth. Our collection focuses exclusively on men's fashion, offering a curated selection of oversized tees, jerseys, and polos that combine comfort with cutting-edge style.
              </p>
              <p>
                Every piece in our collection is thoughtfully designed to drape perfectly, creating that signature oversized silhouette that's both relaxed and refined. We believe in simplicity and versatility, which is why all our products are available in timeless black and white—colors that never go out of style and can be styled infinitely.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values drive everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Quality First',
                description: 'Premium fabrics and construction in every piece we create',
              },
              {
                icon: Users,
                title: 'For The Youth',
                description: 'Designed specifically for men aged 18-30 who dare to stand out',
              },
              {
                icon: Award,
                title: 'Authentic Style',
                description: 'True to streetwear culture with a Bangladeshi touch',
              },
              {
                icon: Heart,
                title: 'Customer First',
                description: 'Your satisfaction is our priority, always',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Why Choose <span className="font-bold">DRAPE</span><span className="font-bold">CURVE</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another clothing brand—we're a movement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Premium Oversized Fit',
                description:
                  'Our signature oversized silhouette is carefully crafted to drape perfectly on your body, providing maximum comfort without compromising style.',
              },
              {
                title: 'Bangladesh-Focused Service',
                description:
                  'We understand the local market. From BDT pricing to payment methods like bKash, Nagad, and Cash on Delivery—we make shopping easy for you.',
              },
              {
                title: 'Timeless Colors',
                description:
                  'Black and white never go out of style. Our monochrome palette ensures versatility and effortless styling for any occasion.',
              },
              {
                title: 'Athletic Meets Streetwear',
                description:
                  'We blend the comfort of athletic wear with the boldness of Western streetwear, creating a unique style that is perfect for the modern man.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted/30 p-8 border border-border"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              To empower the youth of Bangladesh with premium oversized clothing that reflects their bold personality and confident lifestyle. We're here to redefine men's fashion, one oversized piece at a time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}