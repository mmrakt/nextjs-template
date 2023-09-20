"use client";

import { useMatchMedia } from "@/app/_hooks/useMatchMedia";
import { ReactNode, createContext } from "react";

type Theme = "light" | "dark";
type IThemeContext = {
  theme: Theme;
};

export const ThemeContext = createContext<IThemeContext>({ theme: "light" });

type IProps = {
  children: ReactNode;
};
const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const theme = useMatchMedia("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
