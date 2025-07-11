/* eslint-disable no-unused-vars */
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from 'framer-motion';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCode,
  FaRobot,
  FaLock,
  FaVideo,
  FaServer,
  FaGlobe,
  FaArrowRight,
  FaEye,
  FaStar,
  FaSatelliteDish,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiSocketdotio,
  SiOpenai,
  SiMysql,
  SiGooglegemini,
} from 'react-icons/si';

import vishalWritesImage from '../assets/MscPreviewBlog.png';
import togetherImage from '../assets/togetherPreview.png';
import portfolioPreview from '../assets/portfolioPreview.png';
import { Link } from 'react-router-dom';


// Custom hook for tracking active section
const useActiveSection = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find the section that is currently in view
      const currentSection = sectionIds.find(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return false;

        const sectionTop = section.offsetTop - offset;
        const sectionBottom = sectionTop + section.offsetHeight;

        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

// Custom hook for mobile detection
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      // Initial check
      checkMobile();

      // Add event listener for window resize
      window.addEventListener('resize', checkMobile, { passive: true });

      // Cleanup
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }

    return undefined;
  }, [breakpoint]);

  return isMobile;
};

const Dashboard = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

  // Section refs for animations
  const overviewRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const activityRef = useRef(null);

  // Track active section
  const sectionIds = ['overview', 'skills',  'activity'];
  const activeSection = useActiveSection(sectionIds);

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax values for different elements
  const headerParallax = useTransform(smoothScrollProgress, [0, 1], [0, -100]);
  const skillsParallax = useTransform(smoothScrollProgress, [0, 1], [0, -50]);

  // Scroll animations for each section
  const skillsAnimRef = useRef(null);
  const skillsInView = useInView(skillsAnimRef, {
    once: false,
    threshold: 0.15,
    margin: '0px 0px -100px 0px',
  });

  // const projectsAnimRef = useRef(null);
  // const projectsInView = useInView(projectsAnimRef, {
  //   once: false,
  //   threshold: 0.1,
  //   margin: '0px 0px -100px 0px',
  // });

  const activityAnimRef = useRef(null);
  const activityInView = useInView(activityAnimRef, {
    once: false,
    threshold: 0.2,
    margin: '0px 0px -100px 0px',
  });

  // Handle scroll for showing/hiding navigation
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Show navigation after scrolling down a bit
    if (currentScrollY > 100) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, []);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Coding activity data
  const codingData = [
    { date: '2025-01-01', count: 3 },
    { date: '2025-01-05', count: 5 },
    { date: '2025-01-10', count: 2 },
    { date: '2025-01-15', count: 7 },
    { date: '2025-01-20', count: 4 },
    { date: '2025-01-25', count: 6 },
    { date: '2025-02-01', count: 5 },
    { date: '2025-02-05', count: 4 },
    { date: '2025-02-10', count: 3 },
    { date: '2025-02-15', count: 6 },
    { date: '2025-02-20', count: 2 },
    { date: '2025-02-25', count: 5 },
    { date: '2025-03-01', count: 1 },
    { date: '2025-03-05', count: 3 },
    { date: '2025-03-10', count: 7 },
    { date: '2025-03-15', count: 4 },
    { date: '2025-03-20', count: 6 },
  ];

  // Skill categories with icons
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        {
          name: 'React',
          level: 95,
          icon: <FaReact size={24} color="#61DBFB" />,
        },
        {
          name: 'JavaScript',
          level: 90,
          icon: <FaJsSquare size={24} color="#F0DB4F" />,
        },
        {
          name: 'TypeScript',
          level: 85,
          icon: <SiTypescript size={24} color="#007ACC" />,
        },
        {
          name: 'HTML5',
          level: 95,
          icon: <FaHtml5 size={24} color="#E34C26" />,
        },
        {
          name: 'CSS3',
          level: 90,
          icon: <FaCss3Alt size={24} color="#264de4" />,
        },
        {
          name: 'Redux',
          level: 85,
          icon: <SiRedux size={24} color="#764ABC" />,
        },
        {
          name: 'Next.js',
          level: 80,
          icon: <SiNextdotjs size={24} color="#000000" />,
        },
        {
          name: 'Tailwind CSS',
          level: 90,
          icon: <SiTailwindcss size={24} color="#38B2AC" />,
        },
        {
          name: 'zustand',
          level: 80,
          icon: <FaSatelliteDish size={24} color="#000000" />,
        },
      ],
    },
    {
      name: 'Backend',
      skills: [
        {
          name: 'Node.js',
          level: 90,
          icon: <FaNodeJs size={24} color="#68A063" />,
        },
        {
          name: 'Express',
          level: 85,
          icon: <SiExpress size={24} color="#000000" />,
        },
        {
          name: 'RESTful APIs',
          level: 90,
          icon: <FaServer size={24} color="#FF5733" />,
        },
        {
          name: 'Cryptography',
          level: 80,
          icon: <FaLock size={24} color="#E535AB" />,
        },
        {
          name: 'WebSockets',
          level: 85,
          icon: <FaGlobe size={24} color="#4B5563" />,
        },
      ],
    },
    {
      name: 'Database',
      skills: [
        {
          name: 'MongoDB',
          level: 85,
          icon: <SiMongodb size={24} color="#4DB33D" />,
        },
        {
          name: 'MySql',
          level: 80,
          icon: <SiMysql size={24} color="#4479A1" />,
        },
      ],
    },
    {
      name: 'Specialized',
      skills: [
        {
          name: 'React',
          level: 85,
          icon: <FaReact size={24} color="#61DBFB" />,
        },
        {
          name: 'Socket.io',
          level: 90,
          icon: <SiSocketdotio size={24} color="#010101" />,
        },
        {
          name: 'Encryption',
          level: 80,
          icon: <FaLock size={24} color="#4B5563" />,
        },
        {
          name: 'AI Integration',
          level: 75,
          icon: <FaRobot size={24} color="#6366F1" />,
        },
        {
          name: 'OpenAI API',
          level: 80,
          icon: <SiOpenai size={24} color="#412991" />,
        },
        {
          name: 'Gemini API',
          level: 80,
          icon: <SiGooglegemini size={24} color="#FFFFFF" />,
        },
      ],
    },
  ];

  // All skills for the cloud
  const allSkills = skillCategories.flatMap(category =>
    category.skills.map(skill => ({
      ...skill,
      category: category.name,
    }))
  );

  // Projects data
  const projects = [
    {
      id: 'project1',
      title: 'AI-Powered Blog Platform',
      description:
        'A sophisticated blog platform with AI-generated content suggestions, SEO optimization, and personalized user experiences.',
      features: [
        'Natural language processing for content recommendations',
        'AI-driven SEO optimization',
        'Personalized reading experience',
        'Content analytics dashboard',
      ],
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Express',
        'Gemini API',
        'Context API',
      ],
      image: vishalWritesImage,
      icon: <FaRobot className="text-blue-500" size={24} />,
      color: 'bg-blue-500',
      link: 'https://github.com/VishalSoni2005/AI-Powered-Blog-Website.git',
    },
    {
      id: 'project2',
      title: 'End-to-End Encrypted Chat App',
      description:
        'A secure real-time messaging platform with end-to-end encryption, ensuring complete privacy for all communications.',
      features: [
        'End-to-end encryption using the Signal protocol',
        'Real-time messaging with WebSockets',
        'File and media sharing',
        'Group chat functionality',
      ],
      technologies: [
        'React',
        'Socket.io',
        'Node.js',
        'Express',
        'zustand',
        'WebSockets',
        'MongoDB',
        'Encryption Libraries',
      ],
      image: togetherImage,
      icon: <FaLock className="text-green-500" size={24} />,
      color: 'bg-green-500',
      link: 'https://github.com/VishalSoni2005/Chat-Application.git',
    },
    {
      id: 'project3',
      title: 'Remote Interview Platform',
      description:
        'A comprehensive platform for conducting remote technical interviews with code execution, video conferencing, and collaborative tools.',
      features: [
        'Live code editor with syntax highlighting',
        'Real-time video conferencing',
        'Whiteboarding capabilities',
        'Automated skill assessment',
      ],
      technologies: [
        'Next.js',
        'Tailwind CSS',
        'AI Voice Agent',
        'React',
        'Monaco Editor',
        'Node.js',
      ],
      image: portfolioPreview,
      icon: <FaVideo className="text-purple-500" size={24} />,
      color: 'bg-purple-500',
      link: 'https://github.com/VishalSoni2005/IntelliHire.git',
    },
  ];

  // Stats data
  const stats = [
    {
      label: 'Projects Completed',
      value: '6+',
      icon: <FaCode size={24} className="text-blue-500" />,
    },
    {
      label: 'Leetcode Problems Solved',
      value: '150+',
      icon: <FaStar size={24} className="text-yellow-500" />,
    },
  ];

  // Enhanced scroll to section with smooth animation
  const scrollToSection = useCallback(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate the exact position with offset
      const offsetTop =
        section.getBoundingClientRect().top + window.pageYOffset - 80;

      // Use smooth scrolling with animation
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen mt-16 bg-gray-50">
      {/* Calendar Heatmap Styles */}
      <style>
        {`
          .react-calendar-heatmap .color-empty {
            fill: #f0f0f0;
          }
          .react-calendar-heatmap .color-scale-1 {
            fill: #c6e48b;
          }
          .react-calendar-heatmap .color-scale-2 {
            fill: #7bc96f;
          }
          .react-calendar-heatmap .color-scale-3 {
            fill: #239a3b;
          }
          .react-calendar-heatmap .color-scale-4 {
            fill: #196127;
          }
          .react-calendar-heatmap text {
            font-size: 10px;
            fill: #767676;
          }
          .react-calendar-heatmap rect:hover {
            stroke: #555;
            stroke-width: 1px;
          }
        `}
      </style>

      {/* Floating Navigation */}
      <nav
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-opacity duration-500 ${
          navVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
          {sectionIds.map(sectionId => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === sectionId
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Scroll to ${sectionId} section`}
            />
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Overview Section */}
          <motion.section
            id="overview"
            ref={overviewRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.0, 0.3, 1] }}
            className="py-16 px-4 md:px-8 relative"
          >
            <motion.div
              className="max-w-6xl mx-auto"
              style={{ y: headerParallax }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12 text-white">
                    <motion.h1
                      className="text-4xl md:text-5xl font-bold mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Hi, I am{' '}
                      <span className="text-yellow-300">Vishal Soni</span>
                    </motion.h1>
                    <motion.p
                      className="text-xl mb-6 text-blue-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Full Stack Developer specializing in modern web
                      applications
                    </motion.p>
                    <motion.p
                      className="mb-8 text-blue-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      I build scalable, secure, and innovative solutions using
                      cutting-edge technologies. My expertise spans from
                      frontend development with React to backend systems with
                      Node.js.
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <button
                        onClick={() => scrollToSection('projects')}
                        className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors hover:scale-105 transform duration-300"
                      >
                        <Link to="/contact" > Contact Me </Link>
                      </button>
                      <button
                        onClick={() => scrollToSection('activity')}
                        className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors hover:scale-105 transform duration-300"
                      >
                        View Activity
                      </button>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 bg-white p-8 md:p-12">
                    <motion.h2
                      className="text-2xl font-bold text-gray-800 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      Key Metrics
                    </motion.h2>
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 rounded-xl p-4 flex items-center space-x-4 hover:shadow-md transition-shadow"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + index * 0.1,
                          }}
                          whileHover={{ scale: 1.03 }}
                        >
                          <div className="rounded-full bg-gray-100 p-3">
                            {stat.icon}
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-800">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-500">
                              {stat.label}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Specialized In
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'React',
                          'Node.js',
                          'Next.js',
                          'Tailwind CSS',
                          "Socket.io",
                          'state management',
                          'AI Integration',
                          'End-to-End Encryption',
                        ].map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: '#e0e7ff',
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Featured Projects Preview */}
              <div className="mt-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Featured Projects
                  </h2>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                  >
                    View All Projects
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      whileHover={{
                        y: -8,
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <div className={`h-2 ${project.color}`}></div>
                      <div className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div
                            className={`rounded-full p-2 ${project.color} bg-opacity-20`}
                          >
                            {project.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <a
                          href={project.link}
                          className="text-blue-500 hover:text-blue-700 font-medium text-sm inline-flex items-center group"
                        >
                          Check it out
                          <FaArrowRight className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <section
            id="skills"
            ref={skillsRef}
            className="py-16 px-4 md:px-8 bg-gray-50 relative"
          >
            <div ref={skillsAnimRef} className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  My Skills
                </h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                  I have developed expertise in various technologies across the
                  full stack development spectrum.
                </p>
              </motion.div>

              {/* Skill Cloud */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ y: skillsParallax }}
              >
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  {allSkills
                    .sort((a, b) => b.level - a.level)
                    .slice(0, 8)
                    .map((skill, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          skillsInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center"
                          whileHover={{ rotate: 10 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-lg font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <motion.div
                            className="bg-blue-600 h-1.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={
                              skillsInView
                                ? { width: `${skill.level}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 1,
                              delay: 0.4 + index * 0.1,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {allSkills
                    .sort(() => 0.5 - Math.random())
                    .map((skill, index) => (
                      <motion.div
                        key={index}
                        className={`px-3 py-2 rounded-full text-white font-medium 
                          ${
                            skill.level > 90
                              ? 'bg-blue-600'
                              : skill.level > 80
                              ? 'bg-blue-500'
                              : skill.level > 70
                              ? 'bg-blue-400'
                              : 'bg-blue-300'
                          }`}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={
                          skillsInView
                            ? { opacity: 1, scale: 1, y: 0 }
                            : { opacity: 0, scale: 0.8, y: 20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.02,
                        }}
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <div className="flex items-center space-x-1">
                          {skill.icon && (
                            <span className="scale-75">{skill.icon}</span>
                          )}
                          <span>{skill.name}</span>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>

              {/* Skill Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    className="bg-white rounded-xl shadow-sm p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      skillsInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.7, delay: 0.2 + catIndex * 0.15 }}
                    whileHover={{
                      y: -5,
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {category.name}
                    </h3>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              {skill.icon && <span>{skill.icon}</span>}
                              <span className="font-medium text-gray-700">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm text-gray-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={
                                skillsInView
                                  ? { width: `${skill.level}%` }
                                  : { width: 0 }
                              }
                              transition={{
                                duration: 1,
                                delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                                ease: 'easeOut',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          {/* <section
            id="projects"
            ref={projectsRef}
            className="py-16 px-4 md:px-8"
          >
            <div ref={projectsAnimRef} className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  My Projects
                </h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                  Here are some of the key projects I have worked on. Each
                  project demonstrates different skills and technologies.
                </p>
              </motion.div>

              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={project.id}
                  className="project-card bg-white rounded-xl shadow-lg overflow-hidden mb-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    projectsInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 50 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="md:flex">
                    <motion.div
                      className="md:w-2/5 bg-gray-100 flex items-center justify-center p-8"
                      initial={{ opacity: 0, x: -30 }}
                      animate={
                        projectsInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -30 }
                      }
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    >
                      <motion.div
                        className={`w-20 h-20 rounded-full ${project.color} flex items-center justify-center text-white`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {project.icon}
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="md:w-3/5 p-8"
                      initial={{ opacity: 0, x: 30 }}
                      animate={
                        projectsInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 30 }
                      }
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>

                      <h4 className="font-semibold text-gray-800 mb-2">
                        Key Features:
                      </h4>
                      <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={
                              projectsInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 20 }
                            }
                            transition={{
                              duration: 0.4,
                              delay: 0.6 + index * 0.2 + idx * 0.1,
                            }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      <h4 className="font-semibold text-gray-800 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              projectsInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.4,
                              delay: 0.7 + index * 0.2 + idx * 0.05,
                            }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: '#f3f4f6',
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <motion.a
                          href={project.link}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Project
                        </motion.a>
                        <motion.a
                          href="#"
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Source Code
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section> */}

          {/* Activity Section */}
          <motion.section
            id="activity"
            ref={activityRef}
            className="py-16 px-4 md:px-8 bg-gray-50"
          >
            <div ref={activityAnimRef} className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  activityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Coding Activity
                </h2>
                <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                  My GitHub contribution activity over the past year shows my
                  consistent dedication to coding.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  activityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    GitHub Contributions
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center text-sm text-gray-600">
                      <FaEye className="mr-1" />
                      <span>Public Contributions</span>
                    </span>
                  </div>
                </div>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={activityInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <CalendarHeatmap
                    startDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() - 1)
                      )
                    }
                    endDate={new Date()}
                    values={codingData}
                    classForValue={value => {
                      if (!value) return 'color-empty';
                      if (value.count >= 7) return 'color-scale-4';
                      if (value.count >= 4) return 'color-scale-3';
                      if (value.count >= 2) return 'color-scale-2';
                      return 'color-scale-1';
                    }}
                    tooltipDataAttrs={value => {
                      return {
                        'data-tip': value.date
                          ? `${value.date} — ${value.count} commits`
                          : 'No commits',
                      };
                    }}
                    gutterSize={3}
                    showWeekdayLabels={true}
                  />
                </motion.div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="text-sm text-gray-600">Less</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-[#f0f0f0] rounded-sm"></div>
                      <div className="w-3 h-3 bg-[#c6e48b] rounded-sm"></div>
                      <div className="w-3 h-3 bg-[#7bc96f] rounded-sm"></div>
                      <div className="w-3 h-3 bg-[#239a3b] rounded-sm"></div>
                      <div className="w-3 h-3 bg-[#196127] rounded-sm"></div>
                    </div>
                    <span className="text-sm text-gray-600">More</span>
                  </div>

                  <motion.a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center group"
                    whileHover={{ x: 3 }}
                  >
                    View on GitHub
                    <FaArrowRight className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
