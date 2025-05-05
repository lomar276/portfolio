import { createFileRoute } from "@tanstack/react-router";
import WorkExperience from "../components/experience/WorkExperience";

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
    </div>
  );
}
