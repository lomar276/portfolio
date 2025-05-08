import Links from "./Links";
import { constants } from "../constants";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full h-20 bg-zinc-950 px-4">
      <div className="flex items-center space-x-2">
        <p className="text-sm">{`© ${new Date().getFullYear()} ${constants.NAME}. All rights reserved.`}</p>
      </div>
      <div className="flex items-center space-x-4">
        <Links className="flex space-x-4" />
      </div>
    </footer>
  );
}
