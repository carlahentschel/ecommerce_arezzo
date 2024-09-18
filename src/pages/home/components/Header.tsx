import Image from "next/image";
import { NavigationMenuIcon } from "./icons/NavigationMenuIcon";
import { FavoriteIcon } from "./icons/FavoriteIcon";
import { UserIcon } from "./icons/UserIcon";
import { BagIcon } from "./icons/BagIcon";
import { NavLink } from "./NavLink";
import { EnableLocation } from "./EnableLocation";
import { navLinks } from "../utils/nav-links";

export function Header() {
    return (
        <header className="flex justify-between items-center w-full h-24 px-3 bg-white">
            <div className="md:hidden">
                <NavigationMenuIcon/>
            </div>
            <div className="flex items-center">
                <Image
                    src="/assets/ZZLOGO.png"
                    alt="ZZLogo Logo"
                    width={100}
                    height={24}
                    className="mr-4"
                    priority
                />
                <nav className="hidden md:flex space-x-4">
                    {navLinks.map((link, index) => (
                        <NavLink key={index} href={link.href}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                </div>
                <div className="flex justify-between">
                    <EnableLocation/>
                    <FavoriteIcon/>
                    <UserIcon/>
                    <BagIcon/>
                </div>
        </header>
    )
}