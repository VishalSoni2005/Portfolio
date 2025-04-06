
import { useState } from 'react';
import DecryptedText from '../components/custom_components/Text_Component/DecryptedText';

export default function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vishal-soni-07-/',
      color: 'blue',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-8 md:h-8"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.24V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
    },
    {
      name: 'Github',
      url: 'https://www.github.com/vishalsoni2005',
      color: 'green',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-8 md:h-8"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative h-auto min-h-[300px] bg-gradient-to-b from-gray-900 to-gray-800 font-serif text-gray-400 flex flex-col items-center justify-center overflow-hidden rounded-t-xl py-12 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>

          {/* Animated gradient orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
            style={{ animationDuration: '8s' }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-green-500/10 blur-3xl animate-pulse"
            style={{ animationDuration: '10s', animationDelay: '1s' }}
          ></div>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center space-y-8 md:space-y-12">
        <h2 className="text-2xl md:text-3xl font-light text-white/80 tracking-wider mb-2 md:mb-4">
          <span className="inline-block relative">
            CONNECT
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {socialLinks.map(link => (
            <div
              key={link.name}
              className="group relative"
              // onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <button
                className="relative flex items-center gap-3 md:gap-4 py-2 px-1 overflow-hidden group-hover:text-white transition-colors duration-300"
                onClick={() =>
                  window.open(link.url, '_blank', 'noopener,noreferrer')
                }
                aria-label={`Visit ${link.name}`}
              >
                {/* Icon with animation */}
                <span
                  className={`text-${link.color}-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0`}
                >
                  {link.icon}
                </span>

                {/* Text with DecryptedText effect */}
                <span className="text-3xl md:text-5xl lg:text-7xl uppercase font-bold tracking-wider">
                  <DecryptedText
                    text={link.name}
                    animateOn={hoveredLink === link.name ? 'hover' : 'view'}
                    revealDirection="center"
                    className={`text-gray-400 group-hover:text-${link.color}-500 transition duration-300`}
                  />
                </span>
              </button>

              {/* Enhanced underline animation */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div
                  className={`h-full bg-${link.color}-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
                ></div>
              </div>

              {/* Hover effect - subtle glow */}
              <div
                className={`absolute -inset-1 rounded-lg bg-${link.color}-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Subtle footer text */}
        <p className="text-xs text-gray-500 mt-8 md:mt-12 opacity-60">
          © {new Date().getFullYear()} Vishal Soni
        </p>
      </div>
    </div>
  );
}
