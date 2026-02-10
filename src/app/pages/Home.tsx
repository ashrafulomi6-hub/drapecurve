import { Link } from 'react-router';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);
  const trendingProducts = products.filter((p) => p.trending);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] md:h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://unsplash.com/photos/man-holding-his-leather-jacket-P0W27GRvyww)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">OWN THE CURVE</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Premium oversized men's clothing designed for those who dare to stand out. Bold, confident, and unapologetically you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-white text-black px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/shop"
                className="bg-transparent border-2 border-white text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Featured Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our premium oversized essentials, crafted for comfort and style
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Oversized Tees',
                category: 'oversized-tees',
                image: 'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG92ZXJzaXplZCUyMHRzaGlydCUyMG1hbGUlMjBtb2RlbHxlbnwxfHx8fDE3NzA3MzMyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                title: 'Jerseys',
                category: 'jerseys',
                image: 'https://images.unsplash.com/photo-1770155590940-8bb074be521a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGplcnNleSUyMHNwb3J0c3dlYXIlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzA3MzMyODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                title: 'Polos',
                category: 'polos',
                image: 'https://images.unsplash.com/photo-1706381087091-5b4f5a259da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBvbG8lMjBzaGlydCUyMG1lbnxlbnwxfHx8fDE3NzA3MzMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
              },
            ].map((collection, index) => (
              <motion.div
                key={collection.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/shop?category=${collection.category}`}
                  className="group relative block aspect-[3/4] overflow-hidden bg-muted"
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                    <span className="text-sm uppercase tracking-wider inline-flex items-center gap-2">
                      Shop Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="mb-2 flex items-center gap-3">
                <TrendingUp className="w-8 h-8" />
                Trending Now
              </h2>
              <p className="text-muted-foreground">What everyone's wearing this season</p>
            </div>
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link
            to="/shop"
            className="md:hidden mt-8 w-full bg-black text-white px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 text-accent mb-4">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="mb-6">Where Style Meets Comfort</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                DRAPECURVE was born from a simple vision: to create premium oversized clothing that
                empowers you to express your unique style. We blend athletic aesthetics with Western
                streetwear, crafting pieces that are bold, confident, and unapologetically premium.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every piece is designed with meticulous attention to detail, using the finest fabrics
                and construction techniques. Because you deserve clothing that moves with you, looks
                incredible, and feels even better.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square bg-muted overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1635650804494-41f0ecefec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzcwNjQ3MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Brand story"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
