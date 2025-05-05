import { formatDate } from "../../utils";
import { motion } from "motion/react";
import Badge from "../utils/Badge";

interface WorkExperience {
  title: string;
  company: {
    name: string;
    location: string;
    logo?: string;
  };
  dates: {
    start: string;
    end?: string;
  };
  description: string[];
  toolsUsed: string[];
}

interface WorkExperienceProps {
  workExperience: WorkExperience;
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
  workExperience,
}: WorkExperienceProps) {
  return (
    <div className="bg-gray-800/[.75] hover:bg-slate-700/[.75] shadow-sm hover:shadow-xl hover:cursor-pointer rounded-lg p-3">
      <div className="relative w-full">
        <div className="absolute top-0 right-0 text-sm text-slate-400">
          {workExperience.dates.end
            ? `${formatDate(workExperience.dates.start)} - ${
                workExperience.dates.end
                  ? formatDate(workExperience.dates.end)
                  : "Present"
              }`
            : formatDate(workExperience.dates.start)}
        </div>

        <div className="justify-center items-center flex flex-col space-y-4">
          <div>
            <div className="text-xl text-slate-50 text-center">
              {workExperience.title}
            </div>

            <div>{`${workExperience.company.name}, ${workExperience.company.location}`}</div>
          </div>

          <ul className="list-disc list-inside text-slate-200">
            {workExperience.description.map((d) => {
              return (
                <li key={d} className="list-disc list-inside text-slate-200">
                  {d}
                </li>
              );
            })}
          </ul>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {workExperience.toolsUsed.map((tool) => (
              <motion.div
                key={tool}
                variants={itemVariants}
                className="inline-block mr-2 mb-2 hover:scale-105 duration-500"
              >
                <Badge key={tool} title={tool} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
