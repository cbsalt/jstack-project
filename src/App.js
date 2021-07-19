import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';
import { useTheme } from './hooks/useTheme';

function App() {
  const [theme, setTheme] = useTheme('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToogleTheme() {
    setTheme(prevState => prevState === 'dark' 
      ? 'light' 
      : 'dark'
    );
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout 
        onToogleTheme={handleToogleTheme}
        selectedTheme={theme}
     />
    </ThemeProvider>
  );
};

export default App;
