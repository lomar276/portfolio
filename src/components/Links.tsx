import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { links } from "../constants";

interface LinksProps {
  className?: string;
}

const linkItems = [
  {
    icon: faGithub,
    link: links.GITHUB,
  },
  {
    icon: faLinkedin,
    link: links.LINKEDIN,
  },
];

export default function Links({ className }: LinksProps) {
  return (
    <div className={className}>
      {linkItems.map(({ icon, link }) => (
        <a href={link} target="_blank">
          <FontAwesomeIcon
            icon={icon}
            size="2x"
            className="hover:text-secondary-hover-500 duration-300"
          />
        </a>
      ))}
    </div>
  );
}
