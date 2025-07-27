import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const Header = () => {
     const useTheme = () => useContext(ThemeContext)
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="p-4 shadow flex justify-between">
      <Link to="/" className="font-bold">PostApp</Link>
      <button onClick={toggleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
