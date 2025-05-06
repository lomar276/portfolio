import {
  createRootRoute,
  HeadContent,
  Navigate,
  Outlet,
} from "@tanstack/react-router";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import "./App.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Heading />
      <Outlet />
      <Footer />
    </>
  ),
  notFoundComponent: () => <Navigate to="/" params />,
});
