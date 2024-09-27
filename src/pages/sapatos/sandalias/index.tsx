import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { BreadCrumb } from './components/breadCrumb';
import { SandalsList } from './components/sandalsList';
import { TypesSandalsCards } from './components/typesSandalsCards';
import { IProduct } from '@/pages/types/product';

export const getStaticProps = (async () => {
  const res = await fetch('http://localhost:3001/products');
  const products = await res.json();
  return { props: { products } };
}) satisfies GetStaticProps<{
  products: IProduct;
}>;

export default function SandalsPDC({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <BreadCrumb />
      <TypesSandalsCards />
      <SandalsList products={products} />
    </div>
  );
}
