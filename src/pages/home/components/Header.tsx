import Image from "next/image";
import { NavigationMenuIcon } from "./icons/NavigationMenuIcon";
import { FavoriteIcon } from "./icons/FavoriteIcon";
import { UserIcon } from "./icons/UserIcon";
import { BagIcon } from "./icons/BagIcon";
import { NavLink } from "./NavLink";

const navLinks = [
    { label: "novidades", href: "/novidades" },
    { label: "sapatos", href: "/sapatos/sandalias" },
    { label: "botas", href: "/botas" },
    { label: "bolsas", href: "/bolsas" },
    { label: "acessórios", href: "/acessorios" },
    { label: "promoções", href: "/promocoes" },
    { label: "|", href: "" },
    { label: "brizza", href: "/brizza" }
];

export function Header() {
    return (
        <header className="flex justify-between items-center w-full h-24 px-3 bg-white">
            <div className="md:hidden">
                <NavigationMenuIcon/>
            </div>
            
            <Image
                src="/assets/ZZLOGO.png"
                alt="ZZLogo Logo"
                width={100}
                height={24}
                priority
            />
            <div className="flex w-full justify-between items-center ml-4">
                <nav className="hidden md:flex space-x-5">
                    {navLinks.map((link, index) => (
                        <NavLink key={index} href={link.href}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                <div className="flex space-x-5">
                    <FavoriteIcon/>
                    <UserIcon/>
                    <BagIcon/>
                </div>

            </div>
            
            
        </header>
    )
}