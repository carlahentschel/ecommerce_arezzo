import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Banner } from './home/components/Banner';
import { Carousel } from './home/components/carousel';
import { PromotionalBanner } from './home/components/PromotionalBanner';
import { IProduct } from './types/product';
import { NewCollection } from './home/components/newCollection';


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
