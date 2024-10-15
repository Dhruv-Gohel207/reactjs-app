// src/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" bg-gray-600 text-white p-4 sticky top-0 z-50   hover:border-y-[3px] border-sky-300 rounded-xl">
      
      <nav className=" container mx-auto flex justify-end items-center ">
        
        <ul className="    flex space-x-5 ">
          <li >
            <Link to="/" className="border-none hover:text-cyan-400    ">Home</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-cyan-400">Gallery</Link>
          </li>
          <li>
            <Link to="/about_us" className="hover:text-cyan-400">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
