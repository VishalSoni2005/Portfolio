import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHub, ExternalLink, ArrowRight, Award, Layers } from 'react-feather';

import vishalWritesImage from '../assets/image.png';
import togetherImage from '../assets/together.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projectDetails = [
    {
      title: 'VishalWrites Blog Website',
      description:
        'A modern blog platform with content management system, user authentication, and responsive design for optimal reading experience with AI feature.',
      image: vishalWritesImage,
      features: [
        'Content Management',
        'AI-Powered Content Generation',
        'Markdown Support',
        'User Authentication',
        'Comment System',
        'Search Functionality',
        'Responsive Design',
      ],
      techStack: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'React',
        'Cryptography',
        'JWT Authentication',
        'Tailwind CSS',
      ],
      github: 'https://github.com/VishalSoni2005/AI-Powered-Blog-Website.git',
      demo: '#',
    },
    {
      title: 'Together Chat App',
      description:
        'A full-stack chat app with real-time messaging , end-to-end encryption and a responsive UI. Built with React, Node.js, Socket.io, and MongoDB.',
      image: togetherImage,
      features: [
        'Real-time messaging',
        'End-to-end encryption',
        'User authentication',
        'Typing indicators',
        'Online/offline status',
        'costumizable themes',
        'User profile',
        'Reset password',
        'Group chat',
        'Data security',
        'File sharing',
        'Responsive UI',
      ],
      techStack: [
        'React',
        'Cryptography',
        'Express.js',
        'Tailwind CSS',
        'Node.js',
        'MongoDB',
        "AES-256-CBC Encryption",
        'Socket.io',
        'JWT',
      ],
      github: 'https://github.com/VishalSoni2005/Chat-Application.git',
      demo: '#',
    },

    {
      title: 'Portfolio Website',
      description:
        'A portfolio website to showcase my work and skills. Built with React and Tailwind CSS.',
      image: '',
      features: [
        'Responsive Design',
        'Interactive Components',
        'SEO Optimization',
      ],
      techStack: [
        'React',
        'Tailwind CSS',
        'Framer Motion',
        'Responsive Design',
      ],
      github: 'https://github.com/VishalSoni2005/Portfolio.git',
      demo: '#',
    },
  ];

  return (
    // Override default large text by setting text-base on the component container
    <div className="min-h-screen bg-[#FFFFF0] py-20 px-4 sm:px-6 lg:px-8 text-gray-800 text-base">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Explore my latest work showcasing my skills in web development,
            UI/UX design, and problem-solving.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Project Navigation */}
        <div className="relative mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {projectDetails.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg shadow-blue-200'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {project.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="hidden sm:block w-full h-1 bg-gray-200 rounded-full max-w-md mx-auto">
            <div
              className="h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-500"
              style={{
                width: `${(activeTab + 1) * (100 / projectDetails.length)}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Project Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row"
            >
              {/* Project Image */}
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-teal-50 p-8 lg:p-12 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="relative group w-full h-72 sm:h-96 md:h-[32rem] overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={
                        projectDetails[activeTab].image
                      }

                      alt={projectDetails[activeTab].title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="flex gap-4">
                        <a
                          href={projectDetails[activeTab].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-lg"
                        >
                          <GitHub size={20} />
                        </a>
                        <a
                          href={projectDetails[activeTab].demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 shadow-lg"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md text-xs font-medium text-blue-600 flex items-center">
                      <Award size={14} className="mr-1" />
                      Featured
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {activeTab === 0
                        ? 'Web App'
                        : activeTab === 1
                        ? 'Enterprise'
                        : activeTab === 2
                        ? 'Portfolio'
                        : 'Blog'}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {projectDetails[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-base leading-relaxed">
                    {projectDetails[activeTab].description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
                      <Layers size={18} className="mr-2 text-blue-500" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectDetails[activeTab].features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-teal-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails[activeTab].techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={projectDetails[activeTab].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 shadow-md"
                    >
                      <GitHub size={18} className="mr-2" />
                      View Source Code
                    </a>
                    <a
                      href={projectDetails[activeTab].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-white text-blue-600 font-medium rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 border border-blue-200 shadow-sm"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={() =>
              setActiveTab(
                activeTab === 0 ? projectDetails.length - 1 : activeTab - 1
              )
            }
            className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-sm"
            aria-label="Previous project"
          >
            <ArrowRight size={20} className="transform rotate-180" />
          </button>
          <button
            onClick={() =>
              setActiveTab((activeTab + 1) % projectDetails.length)
            }
            className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-sm"
            aria-label="Next project"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Project Count */}
        <div className="text-center mt-6 text-gray-500 text-base">
          Project {activeTab + 1} of {projectDetails.length}
        </div>
      </div>
    </div>
  );
};

export default Projects;

// ! two
// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { GitHub, ExternalLink, Code } from 'react-feather';

// // Assuming these images are imported correctly in your project
// // If you need to use different images, update these imports
// const ImgOne = '../assets/Project_Image/ChatApp.png';
// const ImgTwo = '../assets/Project_Image/ERP.png';

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const projectDetails = [
//     {
//       title: 'Real-Time Chat App',
//       description:
//         'A full-stack chat app with real-time messaging, group chats, and a responsive UI. Built with React, Node.js, Socket.io, and MongoDB.',
//       image: ImgOne,
//       features: [
//         'Real-time messaging',
//         'Group chats',
//         'User authentication',
//         'Typing indicators',
//         'Online/offline status',
//         'File sharing',
//         'Responsive UI',
//       ],
//       techStack: [
//         'React',
//         'TypeScript',
//         'Tailwind CSS',
//         'Node.js',
//         'MongoDB',
//         'Socket.io',
//         'JWT',
//       ],
//       github: 'https://github.com/VishalSoni2005/Chat-Application.git',
//       demo: '#',
//     },
//     {
//       title: 'ERP Management System',
//       description:
//         'A web-based ERP system to manage business workflows, inventory, and finance. Built with Next.js, Express, and PostgreSQL.',
//       image: ImgTwo,
//       features: [
//         'User Roles',
//         'Inventory Management',
//         'Payroll System',
//         'Financial Reports',
//         'Secure API',
//       ],
//       techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
//       github: 'https://github.com/VishalSoni2005/ERP_101.git',
//       demo: '#',
//     },
//     {
//       title: 'Portfolio Website',
//       description:
//         'A portfolio website to showcase my work and skills. Built with React and Tailwind CSS.',
//       image: ImgOne,
//       features: [
//         'Responsive Design',
//         'Interactive Components',
//         'SEO Optimization',
//       ],
//       techStack: [
//         'React',
//         'Tailwind CSS',
//         'Framer Motion',
//         'Responsive Design',
//       ],
//       github: 'https://github.com/VishalSoni2005/Portfolio.git',
//       demo: '#',
//     },
//     {
//       title: 'Blog Website',
//       description:
//         'A modern blog platform with content management system, user authentication, and responsive design for optimal reading experience.',
//       image: ImgTwo,
//       features: [
//         'Content Management',
//         'User Authentication',
//         'Comment System',
//         'Search Functionality',
//         'Responsive Design',
//       ],
//       techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
//       github: 'https://github.com/VishalSoni2005/AI-Powered-Blog-Website.git',
//       demo: '#',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-6 sm:px-8 lg:px-12">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-teal-400">
//             My Projects
//           </h2>
//           <div className="w-28 h-1 bg-teal-500 mx-auto"></div>
//           <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Explore some of my recent projects showcasing my skills in
//             full-stack web development.
//           </p>
//         </div>

//         {/* Buttons - Project Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
//           {projectDetails.map((project, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveTab(index)}
//               className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
//                 activeTab === index
//                   ? 'bg-teal-500 text-gray-900 shadow-lg shadow-teal-500/20'
//                   : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//               }`}
//             >
//               {project.title.split(' ')[0]}
//             </button>
//           ))}
//         </div>

//         {/* Project Content */}
//         <div className="bg-gray-900 bg-opacity-50 rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="flex flex-col lg:flex-row"
//             >
//               {/* Project Image */}
//               <div className="lg:w-1/2 p-6 lg:p-12">
//                 <motion.img
//                   src={projectDetails[activeTab].image || '/placeholder.svg'}
//                   alt={projectDetails[activeTab].title}
//                   className="w-full h-full object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
//                 />
//               </div>

//               {/* Project Details */}
//               <div className="lg:w-1/2 p-8 lg:p-12">
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <h3 className="text-3xl sm:text-4xl font-bold mb-5 text-teal-400">
//                     {projectDetails[activeTab].title}
//                   </h3>
//                   <p className="text-lg text-gray-400 leading-relaxed mb-6">
//                     {projectDetails[activeTab].description}
//                   </p>

//                   {/* Key Features */}
//                   <div className="mb-6">
//                     <h4 className="text-2xl font-semibold mb-4 text-teal-400 flex items-center">
//                       <Code size={22} className="mr-3" />
//                       Key Features
//                     </h4>
//                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {projectDetails[activeTab].features.map((feature, i) => (
//                         <li key={i} className="flex items-start text-lg">
//                           <span className="text-teal-400 mr-2">•</span>
//                           <span className="text-gray-300">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Tech Stack */}
//                   <div>
//                     <h4 className="text-2xl font-semibold mb-4 text-teal-400">
//                       Tech Stack
//                     </h4>
//                     <div className="flex flex-wrap gap-3">
//                       {projectDetails[activeTab].techStack.map((tech, i) => (
//                         <span
//                           key={i}
//                           className="px-4 py-2 bg-gray-700 text-lg rounded-full text-gray-300 hover:bg-teal-500 hover:text-white transition-colors duration-300"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Buttons */}
//                   <div className="mt-8 flex gap-5">
//                     <a
//                       href={projectDetails[activeTab].github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-6 py-3 bg-teal-500 text-gray-900 font-medium rounded-full flex items-center hover:bg-teal-400 transition-colors duration-300 text-lg"
//                     >
//                       <GitHub size={22} className="mr-3" />
//                       View Code
//                     </a>
//                     <a
//                       href={projectDetails[activeTab].demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-6 py-3 bg-gray-700 text-white font-medium rounded-full flex items-center hover:bg-gray-600 transition-colors duration-300 text-lg"
//                     >
//                       <ExternalLink size={22} className="mr-3" />
//                       Live Demo
//                     </a>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

//! original
// import Preview from '../components/custom_components/Btns/LivePreview';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import ImgOne from '../assets/Project_Image/ChatApp.png';
// import ImgTwo from '../assets/Project_Image/ERP.png';
// // import ImgThree from '../assets/Project_Image/Shop.png';

// export default function Projects() {
//   const [activeTab, setActiveTab] = useState(0);
//   const projectDetails = [
//     {
//       title: 'Real-Time Chat App',
//       description:
//         'A full-stack chat app with real-time messaging, group chats, and a responsive UI. Built with React, Node.js, Socket.io, and MongoDB.',
//       image: ImgOne,
//       features: [
//         'Real-time messaging',
//         'Group chats',
//         'User authentication',
//         'Typing indicators',
//         'Online/offline status',
//         'File sharing',
//         'Responsive UI',
//       ],
//       techStack: [
//         'React',
//         'TypeScript',
//         'Tailwind CSS',
//         'Node.js',
//         'MongoDB',
//         'Socket.io',
//         'JWT',
//       ],
//       github: 'https://github.com/VishalSoni2005/Chat-Application.git',
//     },
//     {
//       title: 'ERP Management System',
//       description:
//         'A web-based ERP system to manage business workflows, inventory, and finance. Built with Next.js, Express, and PostgreSQL.',
//       image: ImgTwo,
//       features: [
//         'User Roles',
//         'Inventory Management',
//         'Payroll System',
//         'Financial Reports',
//         'Secure API',
//       ],
//       techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
//       github: 'https://github.com/VishalSoni2005/ERP_101.git',
//     },
//     {
//       title: 'Portfolio Website',
//       description:
//         'A portfolio website to showcase my work and skills. Built with React and Tailwind CSS.',
//       image: ImgOne,
//       features: [
//         'Responsive Design',
//         'Interactive Components',
//         'SEO Optimization',
//       ],
//       techStack: [
//         'React',
//         'Tailwind CSS',
//         'Responsive Design',
//         'Interactive Components',
//         'SEO Optimization',
//       ],
//       github: 'https://github.com/VishalSoni2005/Portfolio.git',
//     },
//     {
//       title: 'Blog Website',
//       description:
//         'Blog Website Title Description Blog Website Title Description Blog Website Title Description',
//       image: ImgTwo,
//       features: [
//         'User Roles',
//         'Inventory Management',
//         'Payroll System',
//         'Financial Reports',
//         'Secure API',
//       ],
//       techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
//       github: 'https://github.com/VishalSoni2005/AI-Powered-Blog-Website.git',
//     },
//   ];

//   const handlePreviewClick = () => {
//     // Navigate to the GitHub repository of the active project
//     window.location.href = projectDetails[activeTab].github;
//   };

//   return (
//     <div className="h-screen w-screen bg-[#161719] text-white flex items-center justify-center">
//       <div className="flex flex-col h-full w-full rounded-xl shadow-lg bg-[#1e1f22] overflow-hidden">
//         {/* Tabs Section */}

//         <div className="flex  sm:flex-row items-center justify-center w-full gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4 bg-[#1f2125]">
//           {['Chat App', 'ERP System', 'Portfolio Website', 'Blog Website'].map(
//             (tab, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveTab(index)}
//                 className={`px-2 md:px-4 sm:px-6 md:py-2 rounded-lg font-serif text-base  sm:text-lg transition-all duration-300 ${
//                   activeTab === index
//                     ? 'bg-green-500 text-gray-800 font-bold shadow-md scale-105'
//                     : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
//                 }`}
//               >
//                 {tab}
//               </button>
//             )
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="flex flex-col md:flex-row flex-1 p-6 gap-6">
//           {/* Left Section */}
//           <div className="h-[90%] md:w-1/2 md:space-y-4">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 30 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h2 className="text-2xl md:text-3xl font-bold">
//                   {projectDetails[activeTab].title}
//                 </h2>
//                 <p className="text-xl md:text-lg text-gray-300">
//                   {projectDetails[activeTab].description}
//                 </p>

//                 <div className="text-md md:text-lg mt-4 md:space-y-2">
//                   <h3 className="text-xl font-serif">Features:</h3>
//                   <ul className="list-disc pl-5 text-gray-400 font-thin text-xl md:text-xl">
//                     {projectDetails[activeTab].features.map((feature, i) => (
//                       <li key={i}>{feature}</li>
//                     ))}
//                   </ul>

//                   <h3 className="hidden sm:block text-xl font-semibold mt-4">
//                     Tech Stack:
//                   </h3>
//                   <ul className="hidden sm:flex flex-wrap gap-2 mt-2 cursor-pointer ">
//                     {projectDetails[activeTab].techStack.map((tech, i) => (
//                       <li
//                         key={i}
//                         className="px-3 py-1 bg-gray-700 rounded-lg text-gray-300 text-sm hover:scale-105 transition-all duration-300 hover:bg-gray-600"
//                       >
//                         {tech}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//           {/* Right Section */}
//           {/* <div className="md:w-1/2 flex md:hidden flex-col items-center justify-center gap-4 "> */}
//           <div className="hidden w-1/2 md:flex flex-col items-center justify-center gap-4">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, scale: 1 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.5 }}
//                 className=" w-96 h-96 flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:border-4 hover:border-violet-800"
//               >
//                 <img
//                   src={projectDetails[activeTab].image}
//                   alt="Project"
//                   className="w-64 h-64 object-cover hover:scale-110 transition duration-500 "
//                 />
//               </motion.div>
//             </AnimatePresence>
//             <Preview onClick={handlePreviewClick} />
//           </div>
//           <div className="flex items-center justify-center mb-8 md:hidden ">
//             <Preview onClick={handlePreviewClick} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
