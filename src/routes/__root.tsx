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
      <HeadContent />

      <div className="flex flex-col min-h-screen text-center">
        <Heading className="mt-2" />

        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </>
  ),
  notFoundComponent: () => <Navigate to="/" params />,
});
