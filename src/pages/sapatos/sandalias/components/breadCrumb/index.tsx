import { NavLink } from '@/pages/home/components/NavLink';
import { navLinks } from '../../utils/nav-links';

export function BreadCrumb() {
  return (
    <section className="w-full flex items-center h-14">
      <nav className="flex space-x-2 px-5">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </section>
  );
}
