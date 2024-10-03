import { FavoriteIcon } from '@/components/icons/FavoriteIcon';
import { IProduct } from '@/types/product';
import { sizesList } from '@/utils/sizes-list';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';

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
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <section className="w-full md:flex">
      <div className="grid grid-cols-2 gap-2 lg:gap-3 md:w-7/12 lg:w-2/3 mb-4 md:mb-1">
        {product.images.map((image, index) => (
          <div key={index}>
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
      <div className="flex flex-col w-full md:px-8 md:w-5/12 lg:w-1/3 px-4">
        <div className="flex justify-between pb-6">
          <div className="flex flex-col text-base items-start ">
            <h1 className="mb-2">{product.name}</h1>
            <span className="font-semibold">
              {product.price.formattedValue}
            </span>
          </div>
          <button className="flex">
            <FavoriteIcon />
          </button>
        </div>
        <hr className="pb-6" />
        <div className="flex flex-col pb-6">
          <h2 className="">Tamanhos</h2>
          <div className="flex">
            {sizesList.map((size, index) => (
              <button key={index} className="p-3">
                {size}
              </button>
            ))}
          </div>
        </div>
        <hr className="pb-6" />
        <button className="uppercase border rounded-full text-sm py-3 mb-6">
          Adicionar à sacola
        </button>
        <button className="uppercase rounded-full text-sm py-3 mb-6 bg-[#4F9071] text-white">
          Comprar agora
        </button>
        <hr className="pb-6" />
        <p className="mb-2">Por que apostar?</p>
        <p className="text-xs pb-6">
          Com uma pegada urbana e descolada, os sapatos tratorados são tendência
          na estação e prometem modernizar qualquer look.
        </p>
        <hr className="pb-6" />
        <p className="mb-2">Detalhes do produto</p>
        <p className="text-xs">
          <span className="font-semibold">Material: </span>
          Couro
        </p>
        <p className="text-xs">
          <span className="font-semibold">Cor: </span>
          {product.colorName}
        </p>
        <p className="text-xs mb-4">
          <span className="font-semibold">Tamanho do salto: </span>5cm
        </p>
        <p className="text-xs mb-4">
          <span className="font-semibold">Descrição: </span>
          {product.description}
        </p>
        <p className="text-xs mb-4">
          <span className="font-semibold">Referência: </span>
          {product.legacySKU}
        </p>
      </div>
    </section>
  );
}
