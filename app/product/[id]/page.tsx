import { products } from '@/app/data/products';
import { notFound } from 'next/navigation';
import ProductDetails from './ProductDetails';

// Define a clear type for the props object.
type Props = {
  params: { id: string };
};

// This is a Server Component. It MUST be async.
// It accepts one argument, 'props', which we destructure to get 'params'.
export default async function ProductDetailPage({ params }: Props) {

  // Logic to find the product on the server.
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  // If no product, show a 404 page.
  if (!product) {
    notFound();
  }

  // Render the interactive client component, passing the fetched product as a prop.
  return (
    <div className="container mx-auto px-4 py-12">
      <ProductDetails product={product} />
    </div>
  );
}