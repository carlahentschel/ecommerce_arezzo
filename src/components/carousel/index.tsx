import { InferGetStaticPropsType } from 'next';
import { BetsCard } from '@/components/betsCard';
import { getStaticProps } from '@/pages';

export function Carousel({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="w-full flex flex-col py-14">
      <div className="flex flex-col items-center px-6 mb-3 md:flex-row md:justify-between uppercase w-full">
        <h2 className="text-2xl font-light mb-2 tracking-widest">
          Apostas da semana
        </h2>
        <a href="/c/novidades" className="text-xs font-normal underline">
          Ver todos os produtos
        </a>
      </div>
      <div>
        <BetsCard products={products} />
      </div>
    </section>
  );
}
