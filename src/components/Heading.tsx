import Links from "./Links";
import Navbar from "./Navbar";
import LangSwitcher from "./utils/LangSwitcher";

export default function Heading() {
  return (
    <div>
      <Navbar />
      <LangSwitcher className="absolute flex space-x-2 top-3 left-3" />
      <Links className="absolute flex space-x-2 top-3 right-3" />
    </div>
  );
}
