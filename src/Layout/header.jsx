import { useState, useEffect } from 'react';
// import github from '../assets/github.png';
import Github from '../components/custom_components/GithubBtn'

import PropTypes from 'prop-types';

export default function Header({ className }) {
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
    <div className={`${className}`}>
      <header
        className={`p-4 fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
          isScrolled ? 'bg-white/900' : 'bg-transparent'
        }`}
      >
        <div className="container font-thin flex justify-between items-center h-6 mx-auto md:justify-evenly md:space-x-24">
          <ul className="items-center hidden space-x-2 md:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                Blog
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                Contact
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-2 text-gray-700 dark:text-gray-800 hover:text-purple-600 transition-all duration-300"
              >
                Dashboard
              </a>
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
          <Github className='h-10 w-10'/>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};
