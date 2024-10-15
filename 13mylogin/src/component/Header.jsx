// src/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-gray-400">Gallery</Link>
          </li>
          <li>
            <Link to="/about_us" className="hover:text-gray-400">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
