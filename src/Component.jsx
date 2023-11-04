import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";

const Component = () => {
  // subscribing to context
  // destructured since context value is an object in provider
  const { theme, changeMode } = useContext(ThemeContext);

  const { lang, changeLanguage } = useContext(LanguageContext);

  return (
    <div className={`App ${theme === "dark" ? "bgDark" : ""}`}>
      <button onClick={changeMode}>
        Go to {theme === "light" ? "dark" : "light"} mode
      </button>
      <button onClick={changeLanguage}>
        Go to {lang === "tamil" ? "English" : "Tamil"} mode
      </button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen! Language Selected {lang}</h2>
    </div>
  );
};

export default Component;
