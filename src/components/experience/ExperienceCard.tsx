import { motion } from "motion/react";
import Badge from "../utils/Badge";

interface Experience {
  title: string;
  subtitle?: string;
  info?: string;
  description: string[];
  badges: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function WorkExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <div className="bg-gray-800/[.75] hover:bg-slate-700/[.75] shadow-sm hover:shadow-xl hover:cursor-pointer rounded-lg p-3 duration-500">
      <div className="relative w-full">
        <div className="justify-center items-center flex flex-col space-y-4">
          <div>
            <div className="text-xl text-slate-50 text-center">
              {experience.title}
            </div>

            <div>{experience.subtitle}</div>

            <div className="md:absolute md:top-0 md:right-0 text-sm text-slate-400">
              {experience.info}
            </div>
          </div>

          <ul className="list-disc text-slate-200 text-left ml-8">
            {experience.description.map((d) => {
              return <li key={d}>{d}</li>;
            })}
          </ul>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experience.badges.map((badge) => (
              <motion.div
                key={badge}
                variants={itemVariants}
                className="inline-block mr-2 mb-2 hover:scale-105 duration-500"
              >
                <Badge key={badge} title={badge} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
