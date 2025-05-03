import {
  faCode,
  faFilm,
  faTableTennisPaddleBall,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import sigma from "../../assets/svgs/interests/sigma.svg";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./Section";

const interests = [
  {
    name: "Mathématiques",
    logo: sigma,
    description: "Je me passionne pour les maths",
  },
  {
    name: "Programmation",
    logo: faCode,
    description: "Je me passionne pour la programmation, notamment fullstack",
  },
  {
    name: "Cinéma (montage vidéo)",
    logo: faFilm,
    description: "Je me passionne pour le cinéma et le montage vidéo",
  },
  {
    name: "Tennis, Ping-pong et Vélo",
    logo: faTableTennisPaddleBall,
    description: "!",
  },
  {
    name: "Jeux de société",
    logo: faDiceSix,
    description: "!",
  },
];

export default function Interests() {
  return (
    <Section title="Mes intérêts">
      <div className="grid grid-cols-3 gap-4">
        {interests.map(({ name, description, logo }) => (
          <Card
            key={name}
            title={name}
            description={description}
            logo={
              typeof logo === "string" ? undefined : ( // TODO
                <FontAwesomeIcon
                  icon={logo}
                  size="2x"
                  className="w-16 h-16 mx-auto text-slate-50"
                />
              )
            }
          />
        ))}
      </div>
    </Section>
  );
}
