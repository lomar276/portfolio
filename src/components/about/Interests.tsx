import { Sigma, Code, Clapperboard, Dice6, Icon } from "lucide-react";
import { batBall } from "@lucide/lab";
import Section from "./Section";
import Card from "../Card";

const interests = [
  {
    name: "Mathématiques",
    logo: Sigma,
    description: "Je me passionne pour les maths",
  },
  {
    name: "Programmation",
    logo: Code,
    description: "Je me passionne pour la programmation, notamment fullstack",
  },
  {
    name: "Cinéma (montage vidéo)",
    logo: Clapperboard,
    description: "Je me passionne pour le cinéma et le montage vidéo",
  },
  {
    name: "Tennis, Ping-pong et Vélo",
    logo: batBall,
    description: "!",
  },
  {
    name: "Jeux de société",
    logo: Dice6,
    description: "!",
  },
];

export default function Interests() {
  return (
    <Section title="Mes intérêts">
      <div className="grid grid-cols-3 gap-4">
        {interests.map(({ name, description, logo: Logo }) => (
          <Card
            key={name}
            title={name}
            description={description}
            logo={
              Array.isArray(Logo) ? (
                <Icon
                  iconNode={Logo}
                  className="w-16 h-16 mx-auto text-slate-50"
                />
              ) : (
                <Logo className="w-16 h-16 mx-auto text-slate-50" />
              )
            }
          />
        ))}
      </div>
    </Section>
  );
}
