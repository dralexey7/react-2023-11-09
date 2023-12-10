import { useCallback, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const selectTheme = useCallback(
    () =>
      setTheme((current) => {
        switch (current) {
          case "light":
            return "dark";
          case "dark":
            return "light";
          default:
            return "light";
        }
      }),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
