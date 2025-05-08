import Links from "./Links";
import Navbar from "./Navbar";

export default function Heading() {
  return (
    <div>
      <Navbar />
      <Links className="md:absolute md:top-3 md:right-3 md:flex max-[48rem]:mt-3 space-x-2" />
    </div>
  );
}
