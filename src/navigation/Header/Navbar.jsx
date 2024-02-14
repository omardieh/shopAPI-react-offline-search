import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Navbar() {
  return (
    <nav>
      {navLinks.map(({ id, path, title }) => (
        <NavLink key={id} to={path}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
}

const navLinks = [
  { id: uuid(), path: "/", title: "Home" },
  { id: uuid(), path: "/products", title: "Products" },
];
