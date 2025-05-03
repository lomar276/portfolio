import { createFileRoute } from "@tanstack/react-router";
import Coding from "../components/about/Coding";
import Interests from "../components/about/Interests";
import Science from "../components/about/Science";
import Astrophysic from "../components/about/Astrophysic";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <Coding />
      <Interests />
      <Science />
      <Astrophysic />
    </div>
  );
}
