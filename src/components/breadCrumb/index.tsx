import { NavLink } from '../navLink';

const BREADCRUMB_LIST = [
  { label: 'home', href: '/' },
  { label: '|', href: '' },
  { label: 'sapatos', href: '/sapatos' },
  { label: '|', href: '' },
  { label: 'sandálias', href: '/sapatos/sandalias' },
];

export function BreadCrumb() {
  return (
    <section className="w-full flex items-center h-12">
      <nav className="flex space-x-2 px-5">
        {BREADCRUMB_LIST.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </section>
  );
}
