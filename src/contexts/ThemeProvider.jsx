import React, { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../styles/themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setThemeName(prev => (prev === "light" ? "dark" : "light"));
  };

  // Atualiza o tema quando o themeName muda
  useEffect(() => {
    setTheme(themeName === "light" ? lightTheme : darkTheme);
  }, [themeName]);

  // Atualiza as variáveis CSS
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--bg-color", theme.background);
    root.style.setProperty("--bg-alt-color", theme.backgroundAlt);
    root.style.setProperty("--text-color", theme.text);
    root.style.setProperty("--card-color", theme.card);
    root.style.setProperty("--border-color", theme.border);

    root.style.setProperty("--primary-color", theme.primary.main);
    root.style.setProperty("--primary-hover", theme.primary.hover);
    root.style.setProperty("--secondary-color", theme.secondary.main);
    root.style.setProperty("--secondary-hover", theme.secondary.hover);
    root.style.setProperty("--success-color", theme.success.main);
    root.style.setProperty("--success-hover", theme.success.hover);
    root.style.setProperty("--danger-color", theme.danger.main);
    root.style.setProperty("--danger-hover", theme.danger.hover);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
