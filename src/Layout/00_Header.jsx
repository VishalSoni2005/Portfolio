import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import github from '../assets/github.png';
import Github from '../components/custom_components/Btns/GithubBtn';

import PropTypes from 'prop-types';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative text-3xl'>
      <header
        className={`p-4 fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
          isScrolled ? 'bg-white/900' : 'bg-transparent'
        }`}
      >
        <div className="container font-thin flex justify-between items-center h-6 mx-auto md:justify-evenly md:space-x-24">
          <ul className="items-center hidden space-x-2 md:flex">
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/"
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/about"
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                About
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to='/blog'
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                Blog
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/contact"
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                Contact
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/dashboard"
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>

          {/* GitHub Button with animation */}
          {/* <button
            title="GitHub"
            type="button"
            className="relative flex items-center justify-center p-2 rounded-full border-2 border-gray-300 hover:border-purple-500 transition-all duration-500 ease-in-out transform hover:scale-110 shadow-md hover:shadow-xl"
          >
            <img
              src={github}
              alt="GitHub"
              className="h-10 w-10 transition-all duration-500 ease-in-out hover:rotate-12"
            />
          </button> */}
          <Github className="h-10 w-10" />
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};
