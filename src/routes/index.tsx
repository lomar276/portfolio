import { createFileRoute } from "@tanstack/react-router";
import { constants } from "../constants";
import profile from "../assets/images/profile.jpg";
import { motion } from "motion/react";
import Section from "../components/about/Section";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [{ title: "Portfolio - Home" }],
  }),
});

function Index() {
  return (
    <Section>
      <div className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:space-y-8 items-center justify-items-center">
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-3/4 h-3/4 rounded-full shadow-lg"
              draggable={false}
              src={profile}
              alt={`${constants.NAME} profile picture`}
            />

            <h2 className="text-3xl underline decoration-secondary-hover-500 underline-offset-8">
              Junior software engineer
            </h2>
          </div>

          <div>
            <motion.div
              className="text-2xl sm:text-4xl"
              initial={{ x: 0 }}
              animate={{ x: -50 }}
              transition={{ duration: 1.25, ease: "easeInOut", delay: 0.5 }}
            >
              Hello, my name is
            </motion.div>

            <motion.div
              className="text-3xl sm:text-6xl text-secondary-hover-500"
              initial={{ x: 0 }}
              animate={{ x: 50 }}
              transition={{ duration: 1.25, ease: "easeInOut", delay: 0.5 }}
            >
              {constants.NAME}
            </motion.div>
          </div>
        </div>

        <p className="text-xl">
          Let me introduce myself, {constants.NAME}. I'm currently in my final
          year of software engineering at Université Laval. My academic
          background has allowed me to develop a deep passion for web and mobile
          development, with a strong interest in front-end development. This
          aspect of software development allows me to express my creativity
          while engaging in innovative projects. At the same time, I also have a
          keen interest in cybersecurity, aware of its growing importance in
          today's technological landscape.
        </p>
      </div>
    </Section>
  );
}
