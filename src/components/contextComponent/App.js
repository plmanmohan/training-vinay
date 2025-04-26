import { useState } from 'react';
import ThemeContext from './components/contextComponent/context';
import Home from './components/contextComponent/Home';
function App() {
 const [theme, setTheme] = useState('light');
 const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={theme}>
        <Home />
        <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeContext.Provider >
  );
}

export default App;
