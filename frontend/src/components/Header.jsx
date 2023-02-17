import { NavLink } from "react-router-dom";

export default function Header() {
  const underlineOnHoverClass = 'group transition duration-300';
  const underlineOnHoverSpan = <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>;
  const linkBaseClass = 'p-4 text-lg';


  return (
    <header className="bg-indigo-50 flex justify-center">
      <nav className="w-2/5 flex justify-around">

        <NavLink to='/' className={(navData) => (navData.isActive ?
          `${linkBaseClass} active` :
          `${linkBaseClass} ${underlineOnHoverClass}`)}>
          Home
          {underlineOnHoverSpan}
        </NavLink>


        <NavLink to='/products' className={(navData) => (navData.isActive ?
          `${linkBaseClass} active` :
          `${linkBaseClass} ${underlineOnHoverClass}`)}>
          Products
          {underlineOnHoverSpan}
        </NavLink>

        <NavLink to='/create' className={(navData) => (navData.isActive ?
          `${linkBaseClass} active` :
          `${linkBaseClass} ${underlineOnHoverClass}`)}>
          Create
          {underlineOnHoverSpan}
        </NavLink>

      </nav>
    </header >
  )
}