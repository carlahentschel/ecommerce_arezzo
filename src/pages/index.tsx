import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Banner } from '../components/banner';
import { Carousel } from '../components/carousel';
import { PromotionalBanner } from '../components/promotionalBanner';
import { IProduct } from '../types/product';
import { NewCollection } from '../components/newCollection';

export const getStaticProps = (async () => {
  const res = await fetch('http://localhost:3001/products');
  const products = await res.json();
  return { props: { products } };
}) satisfies GetStaticProps<{
  products: IProduct;
}>;

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Banner />
      <PromotionalBanner />
      <NewCollection />
      <Carousel products={products} />
    </div>
  );
}
