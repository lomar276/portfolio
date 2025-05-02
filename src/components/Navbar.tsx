const pages = [
  { href: "/", text: "Accueil" },
  { href: "/about", text: "À propos" },
];
const currentPath = window.location.pathname;

export default function Navbar() {
  return (
    <ul className="absolute flex justify-center items-center w-full h-20 top-0 left-0 space-x-4">
      {pages.map(({ href, text }) => (
        <li className="text-xl relative" key={href}>
          <a
            className={`hover:text-secondary-hover-500 hover:mb-5 duration-300 ${
              currentPath === href
                ? "underline-offset-8 decoration-secondary-hover-500"
                : "no-underline"
            }`}
            href={href}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
}
