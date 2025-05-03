import { createRootRoute, Outlet } from "@tanstack/react-router";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import "./App.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <Heading />
      <Outlet />
      <Footer />
    </>
  ),
});
