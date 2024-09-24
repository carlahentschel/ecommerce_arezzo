import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Banner } from './home/components/Banner';
import { Carousel } from './home/components/carousel';
import { Header } from './home/components/Header';
import { PromotionalBanner } from './home/components/PromotionalBanner';
import { IProduct } from './types/product';

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
      <main>
        <Header />
        <Banner />
        <PromotionalBanner />
        <Carousel products={products} />
      </main>
      <footer className="w-full bg-slate-400"></footer>
    </div>
  );
}
