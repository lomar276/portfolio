import { motion } from "motion/react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import Heading from "./components/Heading";
import Footer from "./components/Footer";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading />

      <h1>
        Hello world! <FontAwesomeIcon icon={faHand} />
      </h1>

      <Footer />
    </motion.div>
  );
}
