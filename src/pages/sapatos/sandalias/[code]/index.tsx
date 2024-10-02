import { IProduct } from '@/types/product';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  const { code } = context.params!;
  const res = await fetch(`http://localhost:3001/products?code=${code}`);
  const products = await res.json();
  return {
    props: {
      product: products[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3001/products');
  const products: IProduct[] = await res.json();
  const paths = products.map((product) => ({
    params: { code: product.code },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export function Pdp() {
  return <div>oi</div>;
}
