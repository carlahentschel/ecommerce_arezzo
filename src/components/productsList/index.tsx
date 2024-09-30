import { InferGetStaticPropsType } from 'next';
import { FilterIcon } from '../icons/FilterIcon';
import { getStaticProps } from '@/pages/sapatos/sandalias';
import { ProductCard } from '../productCard';

export function ProductsList({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="w-full py-5">
      <div className="flex flex-col-reverse items-start lg:flex-row lg:items-center px-6 py-3 lg:py-5 w-full">
        <button className="flex justify-center items-center gap-3 text-sm border rounded-full min-w-28 h-10 mr-9">
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
      <ProductCard products={products} />
    </section>
  );
}
