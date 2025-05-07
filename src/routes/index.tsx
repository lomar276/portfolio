import { createFileRoute } from "@tanstack/react-router";
import { constants } from "../constants";
import profile from "../assets/images/profile.jpg";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [{ title: "Portfolio - Home" }],
  }),
});

function Index() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-center items-center space-x-32 mt-5">
        <img
          className="rounded-full shadow-lg"
          draggable={false}
          src={profile}
          alt="Profile picture"
        />

        <div>
          <motion.div
            className="text-4xl"
            initial={{ x: 0 }}
            animate={{ x: -50 }}
            transition={{ duration: 1.25, ease: "easeInOut", delay: 0.5 }}
          >
            {t("home.title")}
          </motion.div>

          <motion.div
            className="text-6xl text-secondary-hover-500"
            initial={{ x: 0 }}
            animate={{ x: 50 }}
            transition={{ duration: 1.25, ease: "easeInOut", delay: 0.5 }}
          >
            {constants.NAME}
          </motion.div>
        </div>
      </div>

      <p className="mt-5">{t("home.description", { name: constants.NAME })}</p>
    </div>
  );
}
