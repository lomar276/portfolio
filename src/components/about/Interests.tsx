import { Sigma, Code, Clapperboard, Dice6, Icon } from "lucide-react";
import { batBall } from "@lucide/lab";
import Section from "./Section";
import Card from "../Card";

const interests = [
  {
    name: "Mathematics",
    logo: Sigma,
  },
  {
    name: "Programming",
    logo: Code,
    description:
      "I am passionate about programming, especially web development.",
  },
  {
    name: "Cinema (video editing)",
    logo: Clapperboard,
    description: "I am passionate about cinema and video editing",
  },
  {
    name: "Tennis, Ping-pong and Cycling",
    logo: batBall,
  },
  {
    name: "Board games",
    logo: Dice6,
  },
];

export default function Interests() {
  return (
    <Section title="My interests">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
