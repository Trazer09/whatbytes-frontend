// app/data/products.ts
export type Product = {
  id: number;
  name: string;
  price: number;
  category: 'Electronics' | 'Clothing' | 'Home';
  image: string;
};

export const products: Product[] = [
  { id: 1, name: 'Running Shoes', price: 99, category: 'Clothing', image: '/images/running-shoes.png' },
  { id: 2, name: 'Wireless Headphones', price: 99, category: 'Electronics', image: '/images/headphones.png' },
  { id: 3, name: 'Backpack', price: 129, category: 'Home', image: '/images/backpack.png' },
  { id: 4, name: 'Smartwatch', price: 249, category: 'Electronics', image: '/images/smartwatch.png' },
  { id: 5, name: 'Sunglasses', price: 149, category: 'Clothing', image: '/images/sunglasses.png' },
  { id: 6, name: 'Digital Camera', price: 499, category: 'Electronics', image: '/images/camera.png' },
  { id: 7, name: 'T-shirt', price: 29, category: 'Clothing', image: '/images/tshirt.png' },
  { id: 8, name: 'Smartphone', price: 699, category: 'Electronics', image: '/images/smartphone.png' },
];