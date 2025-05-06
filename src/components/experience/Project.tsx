import Section from "../about/Section";
import ExperienceCard from "./ExperienceCard";

const projects = [
  {
    title: "Application Web Ingeno",
    subtitle: "Cours « Projet en génie logiciel (GLO-3002) »",
    info: "Hiver 2025",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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

export default function Project() {
  return (
    <Section title="Projects">
      <div className="space-y-4">
        {projects.map((project) => (
          <ExperienceCard experience={project} />
        ))}
      </div>
    </Section>
  );
}
