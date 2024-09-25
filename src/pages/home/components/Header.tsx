import Image from 'next/image';
import ZZLOGO from '../../../../public/assets/ZZLOGO.svg';
import { NavigationMenuIcon } from './icons/NavigationMenuIcon';
import { FavoriteIcon } from './icons/FavoriteIcon';
import { UserIcon } from './icons/UserIcon';
import { BagIcon } from './icons/BagIcon';
import { NavLink } from './NavLink';
import { EnableLocation } from './EnableLocation';
import { navLinks } from '../utils/nav-links';

export function Header() {
  return (
    <header className="fixed flex justify-between items-center w-full h-24 px-4 bg-white z-10">
      <div className="lg:hidden w-1/3 lg:w-auto">
        <NavigationMenuIcon />
      </div>
      <div className="flex items-center justify-center w-1/3 lg:w-auto">
        <Image
          src={ZZLOGO}
          alt="ZZLogo Logo"
          width={100}
          height={24}
          className="lg:mr-4"
        />
        <nav className="hidden lg:flex space-x-4">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex justify-end lg:justify-between w-1/3 lg:w-auto space-x-2 lg:space-x-3">
        <EnableLocation />
        <FavoriteIcon />
        <UserIcon />
        <BagIcon />
      </div>
    </header>
  );
}
