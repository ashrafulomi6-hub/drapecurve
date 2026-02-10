import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Essential Oversized Tee',
    price: 1499,
    category: 'oversized-tees',
    colors: ['black', 'white'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      black: [
        'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG92ZXJzaXplZCUyMHRzaGlydCUyMG1hbGUlMjBtb2RlbHxlbnwxfHx8fDE3NzA3MzMyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      white: [
        'https://images.unsplash.com/photo-1581655353564-df123a1eb820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG92ZXJzaXplZCUyMHRzaGlydCUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzcwNjI2NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    description: 'Premium heavyweight cotton oversized tee. Perfect drop shoulder fit with a relaxed silhouette. Designed for all-day comfort and street-ready style.',
    fabric: '100% Premium Cotton, 240 GSM',
    featured: true,
    trending: true,
  },
  {
    id: '2',
    name: 'Sport Pro Jersey',
    price: 2299,
    category: 'jerseys',
    colors: ['black', 'white'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      black: [
        'https://images.unsplash.com/photo-1770155590940-8bb074be521a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGplcnNleSUyMHNwb3J0c3dlYXIlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzA3MzMyODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      white: [
        'https://images.unsplash.com/photo-1769876457918-1871f21d63bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0c3dlYXIlMjBydW5uaW5nfGVufDF8fHx8MTc3MDczMzI4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    description: 'Athletic performance jersey with moisture-wicking technology. Engineered for movement with breathable mesh panels.',
    fabric: 'Polyester Blend, Moisture-Wicking',
    featured: true,
    trending: false,
  },
  {
    id: '3',
    name: 'Classic Polo',
    price: 1899,
    category: 'polos',
    colors: ['black', 'white'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      black: [
        'https://images.unsplash.com/photo-1635650804494-41f0ecefec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzcwNjQ3MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      white: [
        'https://images.unsplash.com/photo-1706381087091-5b4f5a259da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBvbG8lMjBzaGlydCUyMG1lbnxlbnwxfHx8fDE3NzA3MzMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    description: 'Timeless polo design with modern premium fit. Ribbed collar and cuffs for refined detailing. Versatile piece for casual and smart-casual wear.',
    fabric: 'Pique Cotton, 200 GSM',
    featured: false,
    trending: true,
  },
  {
    id: '4',
    name: 'Curved Hem Oversized Tee',
    price: 1599,
    category: 'oversized-tees',
    colors: ['black', 'white'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      black: [
        'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG92ZXJzaXplZCUyMHRzaGlydCUyMG1hbGUlMjBtb2RlbHxlbnwxfHx8fDE3NzA3MzMyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      white: [
        'https://images.unsplash.com/photo-1581655353564-df123a1eb820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG92ZXJzaXplZCUyMHRzaGlydCUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzcwNjI2NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    description: 'Elevated oversized tee with curved hem detail. Longer back drop for layered looks. Superior comfort with premium cotton construction.',
    fabric: '100% Premium Cotton, 260 GSM',
    featured: false,
    trending: false,
  },
  {
    id: '5',
    name: 'Performance Jersey Pro',
    price: 2499,
    category: 'jerseys',
    colors: ['black', 'white'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      black: [
        'https://images.unsplash.com/photo-1770155590940-8bb074be521a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGplcnNleSUyMHNwb3J0c3dlYXIlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzA3MzMyODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      white: [
        'https://images.unsplash.com/photo-1769876457918-1871f21d63bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0c3dlYXIlMjBydW5uaW5nfGVufDF8fHx8MTc3MDczMzI4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    description: 'Elite athletic jersey engineered for peak performance. Advanced ventilation system with seamless construction for zero chafing.',
    fabric: 'Tech Polyester, Quick-Dry',
    featured: false,
    trending: true,
  },
  {
    id: '6',
    name: 'Premium Pique Polo',
    price: 2099,
    category: 'polos',
    colors: ['black', 'white'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: {
      black: [
        'https://images.unsplash.com/photo-1635650804494-41f0ecefec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbiUyMG1vZGVsJTIwdXJiYW58ZW58MXx8fHwxNzcwNjQ3MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      white: [
        'https://images.unsplash.com/photo-1706381087091-5b4f5a259da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBvbG8lMjBzaGlydCUyMG1lbnxlbnwxfHx8fDE3NzA3MzMyODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    description: 'Luxurious pique polo with refined silhouette. Perfect for the modern gentleman who values comfort and style.',
    fabric: 'Premium Pique Cotton, 220 GSM',
    featured: true,
    trending: false,
  },
];
