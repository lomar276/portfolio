import { useTranslation } from "react-i18next";
import Section from "../about/Section";
import ExperienceCard from "./ExperienceCard";

export default function Project() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Application Web Ingeno",
      subtitle: "Cours « Projet en génie logiciel (GLO-3002) »",
      info: "Hiver 2025",
      description: t("experience.ingenoProject.description", {
        returnObjects: true,
      }) as string[],
      badges: [
        "TypeScript",
        "NestJS",
        "Next.js",
        "Chakra UI",
        "PostgreSQL",
        "AWS",
        "AWS Bedrock",
      ],
    },
    {
      title: "Application Web Instagram",
      subtitle: "Cours « Développement avancé d'applications Web (GLO-3112) »",
      info: "Hiver 2025",
      description: [
        "Concevoir une application où les utilisateurs peuvent publier des images comme sur l'application Instagram. Le tout a été réalisé avec Typescript",
        "Gestion de l'authentification des utilisateurs",
        "Choisir les technologies du projet. Utilisation entre autres de NX pour avoir un monorepo, React, Zod, Axios, MUI, TailwindCSS, NestJS, AWS, MongoDB, Github actions, Jest (tests unitaires pour le backend), Swagger, ViteJS, Prettier, ESLint, Husky (pre-commit)",
        "Rencontre à chaque mercredi et utilisation de Trello pour répartir les tâches",
      ],
      badges: [
        "Typescript",
        "NX",
        "NestJS",
        "Tailwind CSS",
        "MUI",
        "Jest",
        "Vite",
        "Zod",
        "MongoDB",
        "AWS",
        "Swagger",
      ],
    },
  ];

  return (
    <Section title={t("experience.projects")}>
      <div className="space-y-4">
        {projects.map((project) => (
          <ExperienceCard key={project.title} experience={project} />
        ))}
      </div>
    </Section>
  );
}
