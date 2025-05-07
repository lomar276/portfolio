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
      "Create a new website (intranet) to allow users to view and interact with company information",
      "Manage user roles and permissions",
      "Summarize certain data using graphs (e.g., soya's different categories)",
      "Import data from Excel files and compare it to existing data in the web application. Export Excel files containing existing data",
      "Use Server Side Rendering (SSR) and Client Side Rendering (CSR)",
    ],
    toolsUsed: [
      "JavaScript",
      "TailwindCSS",
      "ASP.NET",
      "Razor",
      "Alpine.js",
      "Node.js",
    ],
  },
  {
    title: "Intern developer",
    company: {
      name: "Université Laval",
      location: "Quebec, QC",
    },
    dates: {
      start: new Date("2023-06"),
      end: new Date("2023-09"),
    },
    description: [
      "Deliver quality code using industry best practices and with at least 70% test coverage",
      "Use the JIRA API for form submissions",
      "Use the SCRUM methodology with daily meetings",
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
      location: "Quebec, QC",
    },
    dates: {
      start: new Date("2022-07"),
      end: new Date("2022-09"),
    },
    description: [
      "Create the company's new website (landing page)",
      "Create a portal (with authentication) so customers can control and customize their machines. This part was created from A to Z with the help of a second intern",
      "Participate in the development of the mobile application using React Native and Expo (e.g., Google Maps display map)",
      "Modify the advertising system using Node and VLC. Everything runs on the machine's Raspberry Pi.",
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
    <Section title="Work experiences">
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
