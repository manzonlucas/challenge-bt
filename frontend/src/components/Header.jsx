import { Link } from "react-router-dom";

export default function Header() {
  const underlineOnHoverClass = 'group transition duration-300';
  const underlineOnHoverSpan = <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>;
  const linkClass = `p-4 text-lg ${underlineOnHoverClass}`;


  return (
    <header className="bg-indigo-50 flex justify-center">
      <nav className="w-2/5 flex justify-around">
        <Link className={linkClass} to={'/'}>
          Home
          {underlineOnHoverSpan}
        </Link>
        <Link className={linkClass} to={'/products'}>
          Products
          {underlineOnHoverSpan}
        </Link>
        <Link className={linkClass} to={'/create'}>
          Create
          {underlineOnHoverSpan}
        </Link>
      </nav>
    </header>
  )
}