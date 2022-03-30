import React, { createContext, useContext } from "react";

interface IThemeProvider {
  children: React.ReactNode;
}

interface IThemeContext {
  modeTheme: "light" | "dark";
  setModeTheme: (themeRequest: "light" | "dark") => void;
}

export const ThemeContext = createContext<IThemeContext>({
  modeTheme: "light",
  setModeTheme: () => {},
});

export const ThemeProvider = ({ children }: IThemeProvider) => {
  return <ThemeContext.Provider value={useThemeProvider()}>{children}</ThemeContext.Provider>;
};

const useThemeProvider = () => {
  const [mode, setMode] = React.useState<"light" | "dark">(
    localStorage.getItem("mode") === "light"
      ? "light"
      : localStorage.getItem("mode") === "dark"
      ? "dark"
      : "light"
  );

  const setModeTheme = (themeRequest: "dark" | "light") => {
    setMode(themeRequest);
  };

  return {
    modeTheme: mode,
    setModeTheme,
  };
};

export const useTheme = () => {
  // using this function to import
  return useContext(ThemeContext);
};
