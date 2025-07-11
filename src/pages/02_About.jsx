import pic from '../assets/me2.jpeg';
import { useState, useRef } from 'react';
import IconCloud from '../components/IconCloud/SkillCloud';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
  'python',
  'c',
  'cplusplus',
  'ruby',
  'php',
  'rust',
  'go',
  'swift',
  'kotlin',
  'perl',
  'r',
  'scala',
  'elixir',
  'mongodb',
  'mysql',
  'mariadb',
  'reactivex',
  'reactrouter',
  'redis',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'supabase',
  'tailwindcss',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'sqlite',
];

// Group skills by category for the skill boxes
const skillCategories = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'Rust'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'Prisma', 'Firebase', 'Supabase'],
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'Vercel', 'GitHub', 'VSCode'],
  },
];

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  // const contactRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  // const isContactInView = useInView(contactRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-green-100/50 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  About Me
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  I&apos;m a passionate full-stack developer dedicated to
                  building modern, high-performance web and mobile applications.
                  With a strong foundation in both frontend and backend
                  technologies, I focus on creating seamless, user-centric
                  experiences that solve real-world problems. Whether it&apos;s
                  crafting clean UIs or designing scalable backend systems, I
                  love turning ideas into impactful digital solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to={'/contact'}>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
                      Contact Me <ArrowRight size={18} />
                    </button>
                  </Link>
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
                      Download CV <Download size={18} />
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <img
                    src={pic}
                    alt="Profile"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="bg-blue-600 rounded-full p-2 text-white">
                    <code className="text-sm">{'<coder/>'}</code>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                {' '}
                I&apos;m a passionate developer with a strong interest in
                building modern web and mobile applications. With a solid
                foundation in both frontend and backend technologies, I focus on
                creating seamless, user-centric experiences that solve
                real-world problems.{' '}
              </p>{' '}
              <p>
                {' '}
                My approach combines technical knowledge with a drive for
                continuous learning and creative problem-solving. I value clean,
                maintainable code and stay updated with the latest tools,
                frameworks, and best practices in the industry. Whether working
                independently or collaborating with a team, I’m committed to
                delivering high-quality, scalable solutions.{' '}
              </p>{' '}
              <p>
                {' '}
                Outside of development, I enjoy exploring new technologies,
                contributing to open-source projects, and sharing insights
                through blogging and community engagement. I&apos;m always
                excited to take on new challenges and grow as a developer.{' '}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-center">
              Skills & Expertise
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              I have worked with a variety of technologies and frameworks to
              create robust and scalable applications.
            </p>

            {/* Skill Cloud */}
            <div className="mb-16">
              <div className="relative flex size-full max-w-2xl mx-auto items-center justify-center overflow-hidden rounded-lg px-4 sm:px-20 pb-20 pt-8">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>

            {/* Skill Categories */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {skillCategories.map(category => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === category.name ? null : category.name
                      )
                    }
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Skill Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillCategories
                  .filter(
                    category =>
                      !activeCategory || category.name === activeCategory
                  )
                  .flatMap(category =>
                    category.skills.map(skill => (
                      <motion.div
                        key={skill}
                        className="group relative bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
                        whileHover={{
                          scale: 1.05,
                          boxShadow:
                            '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                        <span className="text-gray-800 font-medium relative z-10">
                          {skill}
                        </span>
                      </motion.div>
                    ))
                  )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
