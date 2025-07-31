import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);


  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ darkMode: dark, toggleTheme: () => setDark(!dark) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;







