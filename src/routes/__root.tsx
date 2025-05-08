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
      <div className="max-w-screen-xl mx-auto p-8 text-center">
        <HeadContent />
        <Heading />

        <div className="m-0 flex place-items-center min-w-[320px] min-h-screen">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  ),
  notFoundComponent: () => <Navigate to="/" params />,
});
