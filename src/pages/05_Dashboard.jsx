import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaCode,
  // FaHome,
  FaChartBar,
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

const Dashboard = () => {
  //  const [activeSection, setActiveSection] = useState('overview');
  //const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  //const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);

  // Check if mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        // setSidebarOpen(false);
      } else {
        //  setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      //setScrollPosition(position);

      // Check which section is in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          // setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animate skills when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setSkillsAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Animate projects when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      projectElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

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
          name: "zustand",
          level: 80,
          icon: <FaSatelliteDish size={24} color="#000000" />,
        }
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
          name: "Gemini API",
          level: 80,
          icon: <SiGooglegemini size={24} color="#FFFFFF" />,
        }
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
        "Context API"
      ],
      image: 'https://placeholder.svg?height=300&width=500',
      icon: <FaRobot className="text-blue-500" size={24} />,
      color: 'bg-blue-500',
      link: '#',
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
      image: 'https://placeholder.svg?height=300&width=500',
      icon: <FaLock className="text-green-500" size={24} />,
      color: 'bg-green-500',
      link: '#',
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
        "AI Voice Agent",

        'React',
        'Monaco Editor',
        'Node.js',
      ],
      image: 'https://placeholder.svg?height=300&width=500',
      icon: <FaVideo className="text-purple-500" size={24} />,
      color: 'bg-purple-500',
      link: '#',
    },
  ];

  // Stats data
  const stats = [
    {
      label: 'Projects Completed',
      value: '3+',
      icon: <FaCode size={24} className="text-blue-500" />,
    },
    {
      label: 'Leetcode Problems Solved',
      value: '250+',
      icon: <FaStar size={24} className="text-yellow-500" />,
    },
    
  ];

  // Scroll to section
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
      // setActiveSection(sectionId);
      if (isMobile) {
        //setSidebarOpen(false);
      }
    }
  };

  return (
    <div className="flex min-h-screen mt-16 bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Overview Section */}
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.0, 0.3, 1] }}
            className="py-16 px-4 md:px-8"
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      Hi, I am{' '}
                      <span className="text-yellow-300">Vishal Soni</span>
                    </h1>
                    <p className="text-xl mb-6 text-blue-100">
                      Full Stack Developer specializing in modern web
                      applications
                    </p>
                    <p className="mb-8 text-blue-100">
                      I build scalable, secure, and innovative solutions using
                      cutting-edge technologies. My expertise spans from
                      frontend development with React to backend systems with
                      Node.js.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => scrollToSection('projects')}
                        className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                      >
                        View Projects
                      </button>
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
                      >
                        Contact Me
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-white p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Key Metrics
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-xl p-4 flex items-center space-x-4 hover:shadow-md transition-shadow"
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
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Specialized In
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'React',
                          'Node.js',
                          'WebRTC',
                          'AI Integration',
                          'End-to-End Encryption',
                        ].map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    View All Projects
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projects.map(project => (
                    <div
                      key={project.id}
                      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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
                          className="text-blue-500 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                        >
                          Learn More
                          <FaArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <section id="skills" className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                My Skills
              </h2>
              <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                I have developed expertise in various technologies across the
                full stack development spectrum.
              </p>

              {/* Skill Cloud */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  {allSkills
                    .sort((a, b) => b.level - a.level)
                    .slice(0, 8)
                    .map((skill, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-center gap-2 transform transition-all duration-700 ease-in-out
                          ${skillsAnimated ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <span className="text-lg font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: skillsAnimated ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 150}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {allSkills
                    .sort(() => 0.5 - Math.random())
                    .map((skill, index) => (
                      <div
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
                          } 
                          transform transition-all duration-700 ease-in-out
                          ${skillsAnimated ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                        style={{
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        <div className="flex items-center space-x-1">
                          {skill.icon && (
                            <span className="scale-75">{skill.icon}</span>
                          )}
                          <span>{skill.name}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Skill Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, catIndex) => (
                  <div
                    key={catIndex}
                    className="bg-white rounded-xl shadow-sm p-6"
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
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: skillsAnimated
                                  ? `${skill.level}%`
                                  : '0%',
                                transitionDelay: `${skillIndex * 100}ms`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                My Projects
              </h2>
              <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Here are some of the key projects I haveve worked on. Each
                project demonstrates different skills and technologies.
              </p>

              {projects.map(project => (
                <div
                  key={project.id}
                  id={project.id}
                  className={`project-card bg-white rounded-xl shadow-lg overflow-hidden mb-12 transform transition-all duration-700 ease-out
                    ${visibleProjects.includes(project.id) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-8">
                      <div
                        className={`w-20 h-20 rounded-full ${project.color} flex items-center justify-center text-white`}
                      >
                        {project.icon}
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8">
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
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      <h4 className="font-semibold text-gray-800 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <a
                          href={project.link}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                          View Project
                        </a>
                        <a
                          href="#"
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Activity Section */}
          <motion.section
            id="activity"
            className="py-16 px-4 md:px-8 bg-gray-50"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                Coding Activity
              </h2>
              <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                My GitHub contribution activity over the past year shows my
                consistent dedication to coding.
              </p>

              <div className="bg-white rounded-xl shadow-lg p-8">
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

                <div className="mb-8">
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
                </div>

                <style>{`
                  :global(.react-calendar-heatmap .color-empty) {
                    fill: green;
                  }
                  :global(.react-calendar-heatmap .color-scale-1) {
                    fill: green;
                  }
                  :global(.react-calendar-heatmap .color-scale-2) {
                    fill: #7bc96f;
                  }
                  :global(.react-calendar-heatmap .color-scale-3) {
                    fill: #239a3b;
                  }
                  :global(.react-calendar-heatmap .color-scale-4) {
                    fill: #196127;
                  }
                `}</style>

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

                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    View on GitHub
                    <FaArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="rounded-full bg-blue-100 p-3 text-blue-500">
                      <FaCode size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Languages
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'JavaScript', percentage: 45 },
                      { name: 'TypeScript', percentage: 30 },
                      { name: 'HTML/CSS', percentage: 15 },
                      { name: 'Python', percentage: 10 },
                    ].map((lang, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-700">
                            {lang.name}
                          </span>
                          <span className="text-gray-500">
                            {lang.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${lang.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="rounded-full bg-purple-100 p-3 text-purple-500">
                      <FaGithub size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Repositories
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'ai-blog-platform', stars: 120, forks: 45 },
                      { name: 'encrypted-chat-app', stars: 85, forks: 32 },
                      {
                        name: 'remote-interview-platform',
                        stars: 65,
                        forks: 28,
                      },
                    ].map((repo, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="font-medium text-gray-700">
                          {repo.name}
                        </span>
                        <div className="flex space-x-3 text-sm text-gray-500">
                          <span className="flex items-center">
                            <FaStar className="mr-1" /> {repo.stars}
                          </span>
                          <span className="flex items-center">
                            <FaCode className="mr-1" /> {repo.forks}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="rounded-full bg-green-100 p-3 text-green-500">
                      <FaChartBar size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Statistics
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'Total Commits', value: '1,250+' },
                      { label: 'Pull Requests', value: '85' },
                      { label: 'Issues Closed', value: '120' },
                      { label: 'Code Reviews', value: '95' },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="font-bold text-gray-800">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
