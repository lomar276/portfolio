import Section from "../about/Section";
import WorkExperienceCard from "./WorkExperienceCard";

const workExperiences = [
  {
    title: "Full-time summer job",
    company: {
      name: "Prograin",
      location: "St-Césaire, QC",
    },
    dates: {
      start: new Date("2024-07"),
      end: new Date("2024-09"),
    },
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    toolsUsed: ["JavaScript", "TailwindCSS", "ASP.NET", "Alpine.js", "Node.js"],
  },
  {
    title: "Intern developer",
    company: {
      name: "Université Laval",
      location: "Québec, QC",
    },
    dates: {
      start: new Date("2023-06"),
      end: new Date("2023-09"),
    },
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    toolsUsed: [
      "Typescript",
      "Next.js",
      "React",
      "Patternfly",
      "Jest",
      "ASP.NET",
      "xUnit",
      "Docker",
    ],
  },
  {
    title: "Intern developer",
    company: {
      name: "KUPA Station",
      location: "Québec, QC",
    },
    dates: {
      start: new Date("2022-07"),
      end: new Date("2022-09"),
    },
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    toolsUsed: [
      "JavaScript",
      "React",
      "React Native",
      "Bootstrap",
      "TailwindCSS",
      "Node.js",
    ],
  },
];

export default function WorkExperience() {
  return (
    <Section title="Work Experience">
      <div className="flex flex-col gap-4">
        {workExperiences.map((workExperience) => (
          <WorkExperienceCard
            key={workExperience.company.name}
            workExperience={workExperience}
          />
        ))}
      </div>
    </Section>
  );
}
