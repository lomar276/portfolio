import Links from "./Links";
import Navbar from "./Navbar";

export default function Heading({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Navbar />
      <Links className="md:absolute md:top-3 md:right-3 md:flex max-md:mt-2 space-x-2" />
    </div>
  );
}
