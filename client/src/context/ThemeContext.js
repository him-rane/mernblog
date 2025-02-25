import { Children, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const getFromLocalStorage = () => {
  const value = localStorage.getItem("theme");
  return value || "dark";
};
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
