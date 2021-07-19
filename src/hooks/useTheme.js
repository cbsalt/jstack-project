import { useEffect, useState } from 'react'

export function useTheme(key, initialValue = 'dark') {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(key);

    if (storedTheme) {
      return JSON.parse(storedTheme);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
}