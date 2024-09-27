import { IProduct } from '@/pages/types/product';
import Image from 'next/image';

interface ISandalCardProps {
  products: IProduct[];
}

export function SandalCard({ products }: ISandalCardProps) {
  return (
    <div className="grid grid-cols-4 w-full gap-1">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col w-full">
          <div className="relative w-full bg-slate-400 h-96">
            <Image
              src={product.images[0].url}
              alt={product.name}
              layout="fill"
              className="w-full h-full object-cover"
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
