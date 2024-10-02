import { IProduct } from '@/types/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

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

interface IPdpProps {
  product: IProduct;
}

export default function SandalPdp({ product }: IPdpProps) {
  return (
    <section className="w-full flex">
      <div className="flex w-2/3">
        {product.images.map((image, index) => (
          <div key={index} className="w-full flex flex-wrap">
            <Image
              src={image.url}
              alt={`Foto do produto ${product.name}`}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center sm:w-1/3">
        <h1>{product.name}</h1>
        <span>{product.price.formattedValue}</span>
      </div>
    </section>
  );
}
