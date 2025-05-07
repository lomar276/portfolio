import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const pages = [
    { to: "/", text: t("navbar.home") },
    { to: "/experience", text: t("navbar.experience") },
    { to: "/about", text: t("navbar.about") },
  ];

  return (
    <nav>
      <ul className="absolute flex justify-center items-center w-full h-20 top-0 left-0 space-x-4">
        {pages.map(({ to, text }) => (
          <li className="text-xl relative" key={to}>
            <Link
              to={to}
              className="hover:text-secondary-hover-500 hover:mb-5 duration-300 [&.active]:underline [&.active]:underline-offset-8 [&.active]:decoration-secondary-hover-500"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
