import { useEffect, useState } from "react";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export function useTheme() {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  function toggleTheme() {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return { toggleTheme, theme };
}
