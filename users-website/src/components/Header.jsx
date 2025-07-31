import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const Header = () => {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="p-4 flex justify-between items-center 
     border-[#613613] border-[1.2px] rounded-md mx-2 mt-2 shadow-[#613613] shadow-[-5px_5px_10px_rgba(0,0,0,0.3)] ">
      <Link to="/" className="font-bold">PostApp</Link>
      <button onClick={toggleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
