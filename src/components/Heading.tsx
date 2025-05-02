import Links from "./Links";
import Navbar from "./Navbar";

export default function Heading() {
  return (
    <div>
      <Navbar />
      <Links className="absolute flex space-x-2 top-3 right-3" />
    </div>
  );
}
