import Links from "./Links";
import { constants } from "../constants";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row sm:h-20 justify-between items-center gap-y-4 bg-zinc-950 px-4 py-6 sm:py-0 text-zinc-200">
      <div className="text-sm text-center">
        © {new Date().getFullYear()} {constants.NAME}. All rights reserved.
      </div>

      <Links className="flex flex-wrap justify-center sm:justify-end gap-x-2" />
    </footer>
  );
}
