import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import { HiOutlineSun } from 'react-icons/hi';

const Header = () => {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
     <div className="flex flex-col  pb-10  fixed top-0 w-full">
    <header className="p-4 flex justify-between items-center bg-slate-950
     border-[#613613]  shadow-[#613613] shadow-[-2px_2px_10px_rgba(0,0,0,0.3)] ">
      <Link to="/" className="font-bold text-white">PostApp</Link>
      <button className =" dark:text-black"onClick={toggleTheme}>
        <HiOutlineSun size={30} color={"white"}/>
      </button>
    </header>
 </div>
  );
};

export default Header;
