import { createRootRoute, Outlet } from "@tanstack/react-router";
import { motion } from "motion/react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import "./App.css";

export const Route = createRootRoute({
  component: () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading />
      <Outlet />
      <Footer />
    </motion.div>
  ),
});
