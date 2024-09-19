import Link from "next/link";

interface INavLinkProps {
    href?: string;
    children: React.ReactNode;
}

export function NavLink({href, children}: INavLinkProps) {
    const content = <h3 className="text-xs uppercase">{children}</h3>

    if (!href) {  
        return <>{content}</>;  
    }  

    return (  
        <Link href={href}>  
            {content}  
        </Link>  
    );  
   
}