import { createFileRoute } from "@tanstack/react-router";
import WorkExperience from "../components/experience/WorkExperience";
import Project from "../components/experience/Project";

export const Route = createFileRoute("/experience")({
  component: Experience,
  head: () => ({
    meta: [{ title: "Portfolio - Experience" }],
  }),
});

function Experience() {
  return (
    <div>
      <WorkExperience />
      <Project />
    </div>
  );
}
