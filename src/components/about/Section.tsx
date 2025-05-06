import { motion } from "motion/react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <h2 className="text-6xl font-bold">{title}</h2>
      <div className="mt-5">{children}</div>
    </motion.div>
  );
}
