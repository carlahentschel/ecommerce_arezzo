import Link from 'next/link';

interface IBreadCrumbPdp {
  product: string;
}

const BREADCRUMB_LIST = [
  { label: 'home', href: '/' },
  { label: 'sapatos', href: '/sapatos' },
  { label: 'sandálias', href: '/sapatos/sandalias' },
];

export function BreadCrumbPdp({ product }: IBreadCrumbPdp) {
  return (
    <section className="w-full truncate px-5 md:w-7/12 lg:w-2/3 flex items-center h-12">
      <ul className="flex text-[10px] md:text-xs tracking-wide">
        {BREADCRUMB_LIST.map((item, index) => (
          <li key={index} className="uppercase text-gray-500">
            <Link href={item.href}>{item.label}</Link>
            {index < BREADCRUMB_LIST.length + 1 && (
              <span className="px-3">|</span>
            )}
          </li>
        ))}
        <li className="uppercase font-normal">{product}</li>
      </ul>
    </section>
  );
}
