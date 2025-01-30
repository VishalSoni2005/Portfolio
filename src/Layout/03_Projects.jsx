import Preview from '../components/custom_components/Btns/LivePreview';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImgOne from '../assets/Project_Image/ChatApp.png';
import ImgTwo from '../assets/Project_Image/ERP.png';
import ImgThree from '../assets/Project_Image/Shop.png';

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const projectDetails = [
    {
      title: 'Real-Time Chat App',
      description:
        'A full-stack chat app with real-time messaging, group chats, and a responsive UI. Built with React, Node.js, Socket.io, and MongoDB.',
      image: ImgOne,
      features: [
        'Real-time messaging',
        'Group chats',
        'User authentication',
        'Typing indicators',
        'Online/offline status',
        'File sharing',
        'Responsive UI',
      ],
      techStack: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'MongoDB',
        'Socket.io',
        'JWT',
      ],
    },
    {
      title: 'ERP Management System',
      description:
        'A web-based ERP system to manage business workflows, inventory, and finance. Built with Next.js, Express, and PostgreSQL.',
      image: ImgTwo,
      features: [
        'User Roles',
        'Inventory Management',
        'Payroll System',
        'Financial Reports',
        'Secure API',
      ],
      techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A modern e-commerce platform with product listings, cart, checkout, and secure payments. Built with React, Firebase, and Stripe.',
      image: ImgThree,
      features: [
        'Product Listings',
        'Shopping Cart',
        'Secure Payments',
        'User Authentication',
      ],
      techStack: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    },
  ];

  return (
    <div className="h-screen w-screen bg-[#161719] text-white flex items-center justify-center">
      <div className="flex flex-col h-full w-full rounded-xl shadow-lg bg-[#1e1f22] overflow-hidden">
        {/* Tabs Section */}
        <div className="flex items-center justify-center w-full gap-6 px-6 py-4 bg-[#1f2125]">
          {['Chat App', 'ERP System', 'E-Commerce'].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-lg font-serif text-lg transition-all duration-300 ${
                activeTab === index
                  ? 'bg-green-500 text-gray-800 font-bold shadow-md scale-105'
                  : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row flex-1 p-6 gap-6">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold">
                  {projectDetails[activeTab].title}
                </h2>
                <p className="text-lg text-gray-300">
                  {projectDetails[activeTab].description}
                </p>

                <div className="text-md space-y-2">
                  <h3 className="text-xl font-serif">Features:</h3>
                  <ul className="list-disc pl-5 text-gray-400 font-thin text-xl">
                    {projectDetails[activeTab].features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mt-4">Tech Stack:</h3>
                  <ul className="flex flex-wrap gap-2">
                    {projectDetails[activeTab].techStack.map((tech, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 bg-gray-700 rounded-lg text-gray-300 text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col items-center justify-center gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className=" w-96 h-96 flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:border-4 hover:border-violet-800"
              >
                <img
                  src={projectDetails[activeTab].image}
                  alt="Project"
                  className="w-64 h-64 object-cover hover:scale-110 transition duration-500"
                />
              </motion.div>
            </AnimatePresence>
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}
