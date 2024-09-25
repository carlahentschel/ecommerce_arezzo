import Link from 'next/link';

interface INavLinkProps {
  href?: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: INavLinkProps) {
  const content = (
    <ul>
      <li className="text-xs uppercase">{children}</li>
    </ul>
  );

  if (!href) {
    return <>{content}</>;
  }

  return <Link href={href}>{content}</Link>;
}
