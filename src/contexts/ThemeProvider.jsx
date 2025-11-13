import React, { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../styles/themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setTheme(themeName === "light" ? lightTheme : darkTheme);
  }, [themeName]);

  useEffect(() => {
    document.documentElement.style.setProperty("--bg-color", theme.background);
    document.documentElement.style.setProperty("--text-color", theme.text);
    document.documentElement.style.setProperty("--card-color", theme.card);
    document.documentElement.style.setProperty("--border-color", theme.border);

    document.documentElement.style.setProperty("--primary-color", theme.primary.main);
    document.documentElement.style.setProperty("--primary-hover", theme.primary.hover);
    document.documentElement.style.setProperty("--secondary-color", theme.secondary.main);
    document.documentElement.style.setProperty("--secondary-hover", theme.secondary.hover);
    document.documentElement.style.setProperty("--success-color", theme.success.main);
    document.documentElement.style.setProperty("--success-hover", theme.success.hover);
    document.documentElement.style.setProperty("--danger-color", theme.danger.main);
    document.documentElement.style.setProperty("--danger-hover", theme.danger.hover);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
