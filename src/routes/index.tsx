import { createFileRoute } from "@tanstack/react-router";
import { constants } from "../constants";
import profile from "../assets/images/profile.jpg";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [{ title: "Portfolio - Home" }],
  }),
});

function Index() {
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
            Bonjour, je me présente
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

      <p className="mt-5">
        Je me présente, {constants.NAME}. Je suis actuellement étudiant à ma
        dernière année de génie logiciel à l'Université Laval. Mon parcours
        académique m'a permis de nourrir une passion profonde pour le
        développement web et mobile, avec un intérêt marqué pour le frontend.
        Cette facette du développement logiciel me permet d'exprimer ma
        créativité tout en m'engageant dans des projets innovants.
        Parallèlement, je nourris également un vif intérêt pour la
        cybersécurité, conscient de son importance croissante dans le paysage
        technologique actuel.
      </p>
    </div>
  );
}
