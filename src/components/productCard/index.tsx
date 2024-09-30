import { IProduct } from '@/types/product';
import Image from 'next/image';

interface IProductCardProps {
  products: IProduct[];
}

export function ProductCard({ products }: IProductCardProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-1">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col w-full">
          <div className="relative w-full aspect-square">
            <Image
              src={product.images[0].url}
              alt={product.name}
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="flex text-xs px-3 py-3 w-full">
            <h3 className="truncate font-normal flex-1">{product.name}</h3>
            <h3 className="font-bold">{product.price.formattedValue}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
