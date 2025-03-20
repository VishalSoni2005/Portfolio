import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Github from '../components/custom_components/Btns/GithubBtn';
import PropTypes from 'prop-types';
import DropDown from '../components/custom_components/Btns/DropDown';

export default function Header() {
  const [NavigationButton, setNavigationButton] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNavigationButton(false);
      }
    };

    if (NavigationButton) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [NavigationButton]);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onNavigationClick = () => setNavigationButton(!NavigationButton);

  return (
    // <header
    //   className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    //     isScrolled ? 'shadow-md bg-white/900' : 'bg-transparent'
    //   }`}
    // >
    <header
      className={`fixed top-0 left-0 w-full z-50 h-16 md:h-20 lg:h-16  transition-all duration-500 backdrop-blur-md ${
        isScrolled ? 'bg-white/900' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {['', 'about', 'blog', 'contact', 'dashboard'].map((path, index) => (
            <li key={index}>
              <NavLink
                to={`/${path}`}
                className="capitalize text-lg font-medium text-gray-700 hover:text-purple-600 transition-all"
              >
                {path || 'Home'}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* GitHub Button */}
        <Github className="h-10 w-10 hidden md:block" />

        {/* Mobile Dropdown Trigger */}
        <div className="block md:hidden">
          <DropDown onClick={onNavigationClick} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {NavigationButton && (
        <ul
          ref={dropdownRef}
          className="absolute top-full right-4 w-[90%] md:w-[50%] bg-white shadow-lg rounded-lg flex flex-col p-3 space-y-1 transition-all duration-300"
        >
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/blog', label: 'Blog' },
            { to: '/contact', label: 'Contact' },
            { to: '/dashboard', label: 'Dashboard' },
          ].map(({ to, label }, index) => (
            <li key={index} className="w-full">
              <NavLink
                to={to}
                className="block py-3 px-5 text-gray-800 text-lg font-medium rounded-lg transition-all duration-200 hover:bg-purple-100 hover:text-purple-700"
                onClick={onNavigationClick}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

// import { useState, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import Github from '../components/custom_components/Btns/GithubBtn';
// import PropTypes from 'prop-types';
// import DropDown from '../components/custom_components/Btns/DropDown';

// export default function Header() {
//   const [NavigationButton, setNavigationButton] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const dropdownRef = useRef(null);

//   const onNavigationClick = () => {
//     setNavigationButton(!NavigationButton);
//   };

//   useEffect ( () => {
//     const handleClickOutside = event => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setNavigationButton(false);
//       }
//     };

//     if (NavigationButton) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [NavigationButton]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="relative text-3xl">
//       <header
//         className={`p-4 fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
//           isScrolled ? 'bg-white/900' : 'bg-transparent'
//         }`}
//       >
//         <div className="container font-thin flex justify-between items-center h-6 mx-auto md:space-x-24">
//           {/* Desktop Navigation */}

//           <ul className="items-center hidden space-x-2 md:flex">
//             {['', 'about', 'blog', 'contact', 'dashboard'].map(
//               (path, index) => (
//                 <li key={index} className="flex">
//                   <NavLink
//                     to={`/${path}`}
//                     className="capitalize px-4 py-2 text-gray-700 hover:text-purple-600 transition-all duration-300"
//                   >
//                     {path}
//                   </NavLink>
//                 </li>
//               )
//             )}
//           </ul>

//           <Github className="h-10 w-10" />
//           {/* Mobile Dropdown */}
//           <div className="block md:hidden">
//             <DropDown onClick={onNavigationClick} />
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {NavigationButton ? (
//           <ul
//             ref={dropdownRef}
//              className="absolute top-full right-0 w-3/4 md:w-1/2 bg-white shadow-lg rounded-lg flex flex-col p-3 space-y-1 md:hidden z-50 transition-all duration-300 ease-in-out"
//           >
//             {[
//               { to: '/', label: 'Home' },
//               { to: '/about', label: 'About' },
//               { to: '/blog', label: 'Blog' },
//               { to: '/contact', label: 'Contact' },
//               { to: '/dashboard', label: 'Dashboard' },
//             ].map(({ to, label }, index) => (
//               <li key={index} className="w-full">
//                 <NavLink
//                   to={to}
//                   className="block py-3 px-5 text-gray-800 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-purple-100 hover:text-purple-700"
//                   onClick={onNavigationClick}
//                 >
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         ) : null}
//       </header>
//     </div>
//   );
// }

// Header.propTypes = {
//   className: PropTypes.string,
// };
