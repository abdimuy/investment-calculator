"use client";
import { useState, useContext, createContext, useEffect } from "react";
import { Theme } from "@radix-ui/themes";
import { type } from "os";

interface DefaultContext {
  theme: Themes;
  setTheme: (theme: Themes) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

enum Themes {
  INDIGO = "indigo",
  BLUE = "blue",
  VIOLET = "violet",
  GREEN = "green",
}

const ThemeContext = createContext<DefaultContext>({
  darkMode: false,
  theme:
    typeof window !== "undefined"
      ? (localStorage.getItem("theme") as Themes)
      : Themes.INDIGO,
  setTheme: () => {},
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const CustomTheme = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(() => {
    let storedMode = "false";
    if (typeof window !== "undefined") {
      storedMode = localStorage.getItem("darkMode")
        ? (localStorage.getItem("darkMode") as Themes)
        : "false";
    }
    return storedMode === "true" ? true : false;
  });

  const [theme, setTheme] = useState<Themes>(() => {
    let storedTheme: Themes | null = null;
    if (typeof window !== "undefined") {
      storedTheme = localStorage.getItem("theme")
        ? (localStorage.getItem("theme") as Themes)
        : null;
    }
    return storedTheme || Themes.INDIGO;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
    localStorage.setItem("theme", theme);
  }, [darkMode, theme]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const changeTheme = (newTheme: Themes) => setTheme(newTheme);

  return (
    <Theme
      accentColor={theme}
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="medium"
      appearance={darkMode ? "dark" : "light"}
    >
      <ThemeContext.Provider
        value={{ darkMode, theme, setTheme: changeTheme, toggleDarkMode }}
      >
        {children}
      </ThemeContext.Provider>
    </Theme>
  );
};

export default CustomTheme;
