import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

const Header = () => {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
     <div className="flex flex-col  pb-10  fixed top-0 w-full">
    <header className="p-4 flex justify-between items-center bg-white 
     border-[#613613]  shadow-[#613613] shadow-[-5px_5px_10px_rgba(0,0,0,0.3)] ">
      <Link to="/" className="font-bold">PostApp</Link>
      <button onClick={toggleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
 </div>
  );
};

export default Header;
