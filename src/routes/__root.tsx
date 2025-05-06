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
      <div className="pb-20">
        <Outlet />
      </div>
      <Footer />
    </>
  ),
  notFoundComponent: () => <Navigate to="/" params />,
});
