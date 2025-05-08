import { createFileRoute } from "@tanstack/react-router";
import WorkExperience from "../components/experience/WorkExperience";
import Project from "../components/experience/Project";

export const Route = createFileRoute("/experiences")({
  component: Experiences,
  head: () => ({
    meta: [{ title: "Portfolio - Experiences" }],
  }),
});

function Experiences() {
  return (
    <div>
      <WorkExperience />
      <Project />
    </div>
  );
}
