import Links from "./Links";
import Navbar from "./Navbar";

export default function Heading({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Navbar />
      <Links className="md:absolute md:top-3 md:right-3 flex flex-wrap justify-center items-center content-center gap-x-2 gap-y-1 max-md:mt-2" />
    </div>
  );
}
