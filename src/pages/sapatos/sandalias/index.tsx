import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { SandalsList } from './components/sandalsList';
import { IProduct } from '@/types/product';
import { BreadCrumb } from '@/components/breadCrumb';
import { CategoriesCard } from '@/components/categoriesCard';

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
      <CategoriesCard />
      <SandalsList products={products} />
    </div>
  );
}
