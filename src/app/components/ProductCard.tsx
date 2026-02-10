import { Link } from 'react-router';
import { Product } from '../types/product';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hoveredColor, setHoveredColor] = useState<'black' | 'white'>('black');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-3">
          <img
            src={product.images[hoveredColor][0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.trending && (
            <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs uppercase tracking-wider">
              Trending
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-black group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            {product.category.replace('-', ' ')}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-base font-bold">৳ {product.price.toLocaleString()}</p>
            <div className="flex gap-2">
              <button
                onMouseEnter={() => setHoveredColor('black')}
                className={`w-5 h-5 rounded-full border-2 transition-all ${
                  hoveredColor === 'black' ? 'border-black scale-110' : 'border-gray-300'
                } bg-black`}
                aria-label="Black color"
              />
              <button
                onMouseEnter={() => setHoveredColor('white')}
                className={`w-5 h-5 rounded-full border-2 transition-all ${
                  hoveredColor === 'white' ? 'border-black scale-110' : 'border-gray-300'
                } bg-white`}
                aria-label="White color"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
