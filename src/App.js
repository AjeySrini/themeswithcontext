import { useState } from "react";
import "./styles.css";
import ThemeContext from "./ThemeContext";

import Component from "./Component";
import LanguageContext from "./LanguageContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("tamil");
  const changeMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const changeLanguage = () => {
    if (lang === "tamil") {
      setLang("english");
    } else {
      setLang("tamil");
    }
  };

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, changeMode }}>
      <LanguageContext.Provider value={{ lang, changeLanguage }}>
        <Component />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
