import { FilterIcon } from '../icons/FilterIcon';
import { ProductCard } from '../productCard';
import { useState } from 'react';
import { Filter } from '../filter';
import { IProduct } from '@/types/product';

interface IProductListProps {
  products: IProduct[];
}

export function ProductsList({ products }: IProductListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="w-full">
      <hr />
      <div className="flex flex-col-reverse items-start lg:flex-row lg:items-center px-6 py-3 lg:py-5 w-full">
        <button
          className="flex justify-center items-center gap-3 text-sm border rounded-full min-w-28 h-10 mr-9"
          onClick={handleOpen}
        >
          <FilterIcon />
          Filtrar
        </button>
        <div className="mb-5 lg:mb-0 w-full">
          <h1 className="uppercase text-2xl tracking-widest">Sandálias</h1>
          <h2 className="text-xs text-gray-400">
            Peça-chave do guarda-roupa, as sandálias femininas da Arezzo
            traduzem e valorizam o estilo da mulher contemporânea.
          </h2>
        </div>
      </div>
      <div className="relative">
        <ProductCard products={products} />

        {isOpen && (
          <div className="fixed flex w-full h-full lg:w-1/4 top-24 bg-white z-10">
            <Filter handleClose={handleOpen} />
          </div>
        )}
      </div>
    </section>
  );
}
