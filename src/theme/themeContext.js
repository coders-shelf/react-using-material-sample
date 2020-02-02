import React, { useState } from "react";
import darkTheme from "./darkTheme";
import defaultTheme from "./defaultTheme";
import navyTheme from "./navyTheme";

export const ThemeContext = React.createContext({
  // このように設定するとIDEの補完が機能する
  theme: null,
  handleThemeChange: () => {}
});

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeChange = themeName => {
    localStorage.setItem("theme", themeName);
    switch (themeName) {
      case "DEFAULT":
        setTheme(defaultTheme);
        break;
      case "DARK":
        setTheme(darkTheme);
        break;
      case "NAVY":
        setTheme(navyTheme);
        break;
      default:
        setTheme(defaultTheme);
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{ handleThemeChange: handleThemeChange, theme: theme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
