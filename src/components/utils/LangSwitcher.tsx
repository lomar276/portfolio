import { useState } from "react";
import i18n from "../../i18n";

export default function LangSwitcher({ className }: { className?: string }) {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const otherLanguage = currentLanguage === "en" ? "fr" : "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(otherLanguage);
    setCurrentLanguage(otherLanguage);
  };

  return (
    <div
      className={`${className ?? ""} flex justify-center items-center space-x-2`}
    >
      <button onClick={toggleLanguage}>{otherLanguage.toUpperCase()}</button>
    </div>
  );
}
