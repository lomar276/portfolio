import { Link } from "@tanstack/react-router";

const pages = [
  { to: "/", text: "Home" },
  { to: "/experiences", text: "Experiences" },
  { to: "/about", text: "About" },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex max-sm:flex-col justify-center items-center w-full sm:space-x-4">
        {pages.map(({ to, text }) => (
          <li className="text-xl" key={to}>
            <Link
              to={to}
              className="group hover:text-secondary-hover-500 duration-300"
            >
              {text}
              <div className="origin-center scale-x-0 group-[.active]:scale-x-100 transition-transform duration-500 h-0.5 bg-secondary-hover-500" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
