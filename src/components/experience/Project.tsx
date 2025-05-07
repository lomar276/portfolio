import Section from "../about/Section";
import ExperienceCard from "./ExperienceCard";

const projects = [
  {
    title: "Ingeno Web Application",
    subtitle: "Course “Software Engineering Project (GLO-3002)”",
    info: "Winter 2025",
    description: [
      "Design a web application using AWS Bedrock (AI assistant) to summarize and link various documents, all with a modern interface.",
      "Use AWS Bedrock for the AI assistant (knowledge base, data vectorization, text streaming)",
      "Manage user authentication.",
      "Ensure test coverage above 80%.",
      "Adopt the SCRUM methodology with 2-week sprints managed on the JIRA platform. For each sprint, define the user stories the team was committed to working on and completing.",
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
    title: "Instagram Web App",
    subtitle: "Course “Advanced Web Application Development (GLO-3112)”",
    info: "Winter 2025",
    description: [
      "Design an application where users can post images, just like on Instagram. Everything was done with Typescript.",
      "Managed user authentication.",
      "The team selected the project technologies. Used NX to create a monorepo, React, Zod, Axios, MUI, TailwindCSS, NestJS, AWS, MongoDB, Github actions, Jest (unit tests for the backend), Swagger, ViteJS, Prettier, ESLint, and Husky (pre-commit)",
      "Meet every Wednesday and use Trello to distribute tasks.",
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
          <ExperienceCard key={project.title} experience={project} />
        ))}
      </div>
    </Section>
  );
}
