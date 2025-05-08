import {
  createRootRoute,
  HeadContent,
  Navigate,
  Outlet,
} from "@tanstack/react-router";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex min-h-screen max-w-screen flex-col overflow-x-hidden p-8 text-center">
        <HeadContent />
        <Heading />
        <Outlet />
      </div>

      <Footer />
    </>
  ),
  notFoundComponent: () => <Navigate to="/" params />,
});
