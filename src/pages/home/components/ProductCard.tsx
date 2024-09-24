import Image from 'next/image';
import { IProduct } from '@/pages/types/product';

interface IProductCardProps {
  products: IProduct[];
}

export function ProductCard({ products }: IProductCardProps) {
  return (
    <div className="flex justify-between w-full overflow-x-auto gap-3">
      {products.slice(0, 5).map((product, index) => (
        <div key={index} className="flex flex-col min-w-48 lg:min-w-72 w-full">
          <div className="relative w-full mb-2 h-64">
            <Image
              src={product.images[0].url}
              alt={product.name}
              layout="fill"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between text-xs px-3 py-3">
            <h3 className="truncate font-normal">{product.name}</h3>
            <h3 className="font-bold">{product.price.formattedValue}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
