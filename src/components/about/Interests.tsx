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
        {interests.map((interest) => {
          const { name, description } = interest;
          return (
            <Card
              key={name}
              title={name}
              description={description}
              logo={
                Array.isArray(interest.logo) ? (
                  <Icon
                    iconNode={interest.logo}
                    className="w-24 h-auto aspect-3/2 text-slate-50"
                  />
                ) : (
                  <interest.logo className="w-24 h-auto aspect-3/2 text-slate-50" />
                )
              }
            />
          );
        })}
      </div>
    </Section>
  );
}
