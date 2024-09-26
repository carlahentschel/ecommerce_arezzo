import Image from 'next/image';
import { IProduct } from '@/pages/types/product';

interface IProductCardProps {
  products: IProduct[];
}

export function ProductCard({ products }: IProductCardProps) {
  const PRODUCT_ITEMS_LIMIT = 5;
  return (
    <div className="flex justify-between w-full overflow-x-auto gap-1">
      {products.slice(0, PRODUCT_ITEMS_LIMIT).map((product, index) => (
        <div key={index} className="flex flex-col min-w-72 w-full">
          <div className="relative w-full mb-2 h-96">
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
