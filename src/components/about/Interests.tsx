import { Sigma, Code, Clapperboard, Dice6, Icon } from "lucide-react";
import { batBall } from "@lucide/lab";
import Section from "./Section";
import Card from "../Card";
import { useTranslation } from "react-i18next";

export default function Interests() {
  const { t } = useTranslation();
  const interests = [
    {
      name: t("interests.math.title"),
      logo: Sigma,
    },
    {
      name: t("interests.programming.title"),
      logo: Code,
      description: t("interests.programming.description"),
    },
    {
      name: t("interests.cinema.title"),
      logo: Clapperboard,
      description: t("interests.cinema.description"),
    },
    {
      name: t("interests.sports.title"),
      logo: batBall,
    },
    {
      name: t("interests.boardGames.title"),
      logo: Dice6,
    },
  ];

  return (
    <Section title={t("interests.title")}>
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
