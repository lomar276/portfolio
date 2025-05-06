import { formatDate } from "../../utils";
import ExperienceCard from "./ExperienceCard";

interface WorkExperience {
  title: string;
  company: {
    name: string;
    location: string;
    logo?: string;
  };
  dates: {
    start: Date;
    end?: Date;
  };
  description: string[];
  toolsUsed: string[];
}

interface WorkExperienceProps {
  workExperience: WorkExperience;
}

export default function WorkExperienceCard({
  workExperience,
}: WorkExperienceProps) {
  return (
    <ExperienceCard
      experience={{
        title: workExperience.title,
        subtitle: `${workExperience.company.name}, ${workExperience.company.location}`,
        info: workExperience.dates.end
          ? `${formatDate(workExperience.dates.start)} - ${formatDate(
              workExperience.dates.end
            )}`
          : formatDate(workExperience.dates.start),
        description: workExperience.description,
        badges: workExperience.toolsUsed,
      }}
    />
  );
}
