import { createContext, useEffect, useState } from 'react';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material';

export const Context = createContext();
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});


function App() {

  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem('mode');
    return storedMode || 'light'; 
  });

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
          <Context.Provider value={{mode, setMode }}>
            <Home/>
          </Context.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
