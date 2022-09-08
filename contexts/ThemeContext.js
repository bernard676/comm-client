import React, { useState,createContext } from 'react';

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
}
export const useThemeUpdateContext = () => {
  return useContext(ThemeUpdateContext);
}
export const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(true);
  
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}