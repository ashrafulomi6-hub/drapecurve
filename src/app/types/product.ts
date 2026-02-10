export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'oversized-tees' | 'jerseys' | 'polos';
  colors: ('black' | 'white')[];
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  images: {
    black: string[];
    white: string[];
  };
  description: string;
  fabric: string;
  featured?: boolean;
  trending?: boolean;
}

export interface CartItem {
  product: Product;
  color: 'black' | 'white';
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  paymentMethod: 'bkash' | 'nagad' | 'cod';
  deliveryCharge: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
}
