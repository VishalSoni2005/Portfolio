/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import { useState, useRef, useEffect } from 'react';
// import {
//   motion,
//   useInView,
//   useAnimation,
//   AnimatePresence,
// } from 'framer-motion';
// import {
//   ArrowRight,
//   Download,
//   Mail,
//   Github,
//   Linkedin,
//   Twitter,
//   ExternalLink,
//   ChevronRight,
// } from 'lucide-react';

// import skillCloud from '../components/IconCloud/SkillCloud'
// // Enhanced skill categories with icons and colors
// const skillCategories = [
//   {
//     name: 'Languages',
//     icon: '🔤',
//     color: 'from-violet-500 to-purple-600',
//     lightColor: 'from-violet-200 to-purple-300',
//     skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Dart', 'C++', 'Go'],
//   },
//   {
//     name: 'Frontend',
//     icon: '🎨',
//     color: 'from-blue-500 to-cyan-600',
//     lightColor: 'from-blue-200 to-cyan-300',
//     skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter'],
//   },
//   {
//     name: 'Backend',
//     icon: '⚙️',
//     color: 'from-emerald-500 to-green-600',
//     lightColor: 'from-emerald-200 to-green-300',
//     skills: ['Node.js', 'Express', 'Prisma', 'Firebase', 'Supabase'],
//   },
//   {
//     name: 'Databases',
//     icon: '💾',
//     color: 'from-amber-500 to-orange-600',
//     lightColor: 'from-amber-200 to-orange-300',
//     skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite'],
//   },
//   {
//     name: 'DevOps',
//     icon: '🚀',
//     color: 'from-rose-500 to-red-600',
//     lightColor: 'from-rose-200 to-red-300',
//     skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub', 'VSCode'],
//   },
// ];

// // Animated background component
// const AnimatedBackground = () => {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       {/* Gradient orbs */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-purple-300/20 to-blue-300/10 blur-3xl opacity-60 animate-[float_20s_ease-in-out_infinite]"></div>
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-amber-300/10 to-rose-300/20 blur-3xl opacity-60 animate-[float_15s_ease-in-out_infinite]"></div>
//       <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-b from-emerald-300/10 to-cyan-300/20 blur-3xl opacity-50 animate-[float_10s_ease-in-out_infinite]"></div>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-[0.015]"></div>

//       {/* Noise texture */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_viewBox='0_0_200_200'_xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter_id='noiseFilter'%3E%3CfeTurbulence_type='fractalNoise'_baseFrequency='0.65'_numOctaves='3'_stitchTiles='stitch'/%3E%3C/filter%3E%3Crect_width='100%25'_height='100%25'_filter='url(%23noiseFilter)'/%3E%3C/svg%3E')] opacity-[0.03]"></div>
//     </div>
//   );
// };

// // Enhanced skill box component
// const SkillBox = ({ skill, category, index }) => {
//   const controls = useAnimation();

//   return (
//     <motion.div
//       className={`group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-white/20 p-4 shadow-sm hover:shadow-lg transition-all duration-500`}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.05 }}
//       whileHover={{
//         scale: 1.03,
//         transition: { duration: 0.3, ease: 'easeOut' },
//       }}
//     >
//       {/* Background gradient that reveals on hover */}
//       <motion.div
//         className={`absolute inset-0 bg-gradient-to-br ${category.lightColor} opacity-0 group-hover:opacity-20`}
//         initial={{ opacity: 0 }}
//         whileHover={{ opacity: 0.2 }}
//         transition={{ duration: 0.3 }}
//       />

//       {/* Animated border */}
//       <div className="absolute inset-0 rounded-xl overflow-hidden">
//         <div
//           className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
//         ></div>
//         <div
//           className={`absolute -inset-[1px] bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//         ></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-between">
//         <span className="font-medium text-gray-800">{skill}</span>
//         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <ChevronRight size={16} className="text-gray-600" />
//         </span>
//       </div>
//     </motion.div>
//   );
// };
// // Enhanced skill cloud wrapper
// // eslint-disable-next-line react/prop-types
// const EnhancedSkillCloud = ({ iconSlugs }) => {
//   return (
//     <div className="relative group">
//       <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//       <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl overflow-hidden">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-[0.03]"></div>
//         <div className="h-64 flex items-center justify-center">
//           <skillCloud iconSlugs={slugs} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function AboutPage() {

//   const [activeCategory, setActiveCategory] = useState(null);
//   const [visibleSkills, setVisibleSkills] = useState([]);
//   const slugs = [
//     'typescript',
//     'javascript',
//     'dart',
//     'java',
//     'react',
//     'flutter',
//     'android',
//     'html5',
//     'css3',
//     'nodedotjs',
//     'docker',
//     'git',
//     'jira',
//     'github',
//     'gitlab',
//     'visualstudiocode',
//     'androidstudio',
//     'sonarqube',
//     'figma',
//     'python',
//     'c',
//     'cplusplus',
//     'ruby',
//     'php',
//     'rust',
//     'go',
//     'swift',
//     'kotlin',
//     'perl',
//     'r',
//     'scala',
//     'elixir',
//     'mongodb',
//     'mysql',
//     'mariadb',
//     'reactivex',
//     'reactrouter',
//     'redis',
//     'express',
//     'nextdotjs',
//     'prisma',
//     'amazonaws',
//     'postgresql',
//     'firebase',
//     'supabase',
//     'tailwindcss',
//     'nginx',
//     'vercel',
//     'testinglibrary',
//     'jest',
//     'cypress',
//     'sqlite',
//   ];

//   const aboutRef = useRef(null);
//   const skillsRef = useRef(null);
//   const contactRef = useRef(null);

//   const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
//   const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
//   const isContactInView = useInView(contactRef, { once: true, amount: 0.3 });

//   // Update visible skills when category changes
//   useEffect(() => {
//     if (activeCategory) {
//       const category = skillCategories.find(cat => cat.name === activeCategory);
//       setVisibleSkills(category ? category.skills : []);
//     } else {
//       setVisibleSkills(skillCategories.flatMap(cat => cat.skills));
//     }
//   }, [activeCategory]);

//   return (
//     <>
//       <AnimatedBackground />

//       <div className="min-h-screen bg-white/40 backdrop-blur-sm text-gray-800">
//         {/* Hero Section */}
//         <section className="relative pt-24 pb-32 overflow-hidden">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-16">
//               <div className="w-full md:w-1/2">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/30 shadow-sm">
//                     <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
//                       Full-Stack Developer
//                     </span>
//                   </div>

//                   <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
//                     <span className="block">About</span>
//                     <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                       My Journey
//                     </span>
//                   </h1>

//                   <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
//                     I transform complex problems into elegant, intuitive
//                     solutions through code. With a passion for both design and
//                     functionality, I create digital experiences that are as
//                     beautiful as they are functional.
//                   </p>

//                   <div className="flex flex-wrap gap-4">
//                     <motion.button
//                       className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-blue-600/20 relative overflow-hidden group"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <span className="relative z-10">Contact Me</span>
//                       <ArrowRight size={18} className="relative z-10" />
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600"
//                         initial={{ x: '100%', opacity: 0 }}
//                         whileHover={{ x: '0%', opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                       />
//                     </motion.button>

//                     <motion.button
//                       className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/30 text-gray-700 rounded-xl font-medium flex items-center gap-2 shadow-md relative overflow-hidden group"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <span className="relative z-10">Download CV</span>
//                       <Download size={18} className="relative z-10" />
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-white/50"
//                         initial={{ x: '-100%', opacity: 0 }}
//                         whileHover={{ x: '0%', opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                       />
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               </div>

//               <div className="w-full md:w-1/2 flex justify-center">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   className="relative"
//                 >
//                   <div className="relative">
//                     {/* Decorative elements */}
//                     <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-violet-400/30 to-blue-400/30 blur-xl animate-[float_15s_ease-in-out_infinite]"></div>
//                     <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 blur-xl animate-[float_20s_ease-in-out_infinite]"></div>

//                     {/* Profile image */}
//                     <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white/80 shadow-2xl transform rotate-3">
//                       <img
//                         src="/placeholder.svg?height=320&width=320"
//                         alt="Profile"
//                         className="object-cover w-full h-full"
//                       />

//                       {/* Overlay gradient */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 to-transparent"></div>
//                     </div>

//                     {/* Decorative badge */}
//                     <motion.div
//                       className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-white/50"
//                       animate={{ y: [0, -5, 0] }}
//                       transition={{
//                         repeat: Number.POSITIVE_INFINITY,
//                         duration: 3,
//                         ease: 'easeInOut',
//                       }}
//                     >
//                       <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl p-2 text-white">
//                         <code className="text-sm font-mono">{'<coder/>'}</code>
//                       </div>
//                     </motion.div>

//                     {/* Experience badge */}
//                     <motion.div
//                       className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-white/50 text-sm font-medium"
//                       animate={{ y: [0, -5, 0] }}
//                       transition={{
//                         repeat: Number.POSITIVE_INFINITY,
//                         duration: 2.5,
//                         ease: 'easeInOut',
//                         delay: 0.5,
//                       }}
//                     >
//                       <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
//                         5+ Years Experience
//                       </span>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section ref={aboutRef} className="py-24 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/70 to-white/0"></div>

//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8 }}
//               className="max-w-4xl mx-auto"
//             >
//               <div className="text-center mb-16">
//                 <motion.div
//                   className="inline-block mb-3 w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
//                   animate={{ width: isAboutInView ? 64 : 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                 ></motion.div>
//                 <h2 className="text-4xl font-bold mb-4">My Journey</h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   The path that led me to where I am today, and the philosophy
//                   that guides my work.
//                 </p>
//               </div>

//               <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
//                 <div className="prose prose-lg max-w-none">
//                   <p>
//                     I started my coding journey 5 years ago, driven by curiosity
//                     and a desire to build things that make a difference. Since
//                     then, I have worked on a variety of projects ranging from
//                     web applications to mobile apps, always focusing on creating
//                     intuitive and efficient solutions.
//                   </p>

//                   <div className="my-8 p-6 bg-gradient-to-r from-violet-50 to-blue-50 rounded-xl border border-blue-100/50 relative">
//                     <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-6 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
//                       My Philosophy
//                     </div>
//                     <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
//                       I believe great code should be both functional and
//                       beautiful. Technology is most powerful when it&apos;s
//                       accessible to everyone, and the best solutions are those
//                       that feel intuitive and natural to use.
//                     </blockquote>
//                   </div>

//                   <p>
//                     My approach combines technical expertise with creative
//                     problem-solving. I believe in writing clean, maintainable
//                     code and staying updated with the latest industry trends and
//                     best practices. Whether working independently or as part of
//                     a team, I am committed to delivering high-quality results
//                     that exceed expectations.
//                   </p>

//                   <p>
//                     When I&apos;m not coding, you can find me exploring new
//                     technologies, contributing to open-source projects, or
//                     sharing my knowledge through blog posts and community
//                     engagement.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section ref={skillsRef} className="py-24 relative overflow-hidden">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="text-center mb-16">
//                 <motion.div
//                   className="inline-block mb-3 w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
//                   animate={{ width: isSkillsInView ? 64 : 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                 ></motion.div>
//                 <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   The technologies and tools I&apos;ve mastered to create exceptional
//                   digital experiences.
//                 </p>
//               </div>

//               {/* Enhanced Skill Cloud */}
//               <div className="mb-20">
//                 <div className="max-w-3xl mx-auto">
//                   <EnhancedSkillCloud iconSlugs={slugs} />
//                 </div>
//               </div>

//               {/* Skill Categories */}
//               <div className="max-w-5xl mx-auto">
//                 <div className="flex flex-wrap justify-center gap-3 mb-12">
//                   {skillCategories.map(category => (
//                     <motion.button
//                       key={category.name}
//                       className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
//                         activeCategory === category.name
//                           ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
//                           : 'bg-white/70 backdrop-blur-sm text-gray-700 border border-white/30 hover:bg-white'
//                       }`}
//                       onClick={() =>
//                         setActiveCategory(
//                           activeCategory === category.name
//                             ? null
//                             : category.name
//                         )
//                       }
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                     >
//                       <span>{category.icon}</span>
//                       {category.name}
//                     </motion.button>
//                   ))}

//                   {activeCategory && (
//                     <motion.button
//                       className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 bg-gray-200/70 backdrop-blur-sm text-gray-700 border border-white/30 hover:bg-white flex items-center gap-2"
//                       onClick={() => setActiveCategory(null)}
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                     >
//                       <span>🔍</span>
//                       Show All
//                     </motion.button>
//                   )}
//                 </div>

//                 {/* Skill Boxes */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                   <AnimatePresence>
//                     {skillCategories
//                       .filter(
//                         category =>
//                           !activeCategory || category.name === activeCategory
//                       )
//                       .flatMap((category, catIndex) =>
//                         category.skills.map((skill, skillIndex) => (
//                           <SkillBox
//                             key={`${category.name}-${skill}`}
//                             skill={skill}
//                             category={category}
//                             index={catIndex + skillIndex}
//                           />
//                         ))
//                       )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section ref={contactRef} className="py-24 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/70 to-white/0"></div>

//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isContactInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8 }}
//               className="max-w-4xl mx-auto"
//             >
//               <div className="text-center mb-16">
//                 <motion.div
//                   className="inline-block mb-3 w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
//                   animate={{ width: isContactInView ? 64 : 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                 ></motion.div>
//                 <h2 className="text-4xl font-bold mb-4">Let&lsquo;s Connect</h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   I&apos;m always open to discussing new projects, creative ideas, or
//                   opportunities to be part of your vision.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl p-10 shadow-xl border border-white/50 relative overflow-hidden">
//                 {/* Background elements */}
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
//                 <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>

//                 <div className="relative z-10">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//                     <motion.a
//                       href="mailto:contact@example.com"
//                       className="group flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:bg-white transition-all duration-300"
//                       whileHover={{
//                         y: -5,
//                         boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
//                       }}
//                     >
//                       <div className="p-3 bg-gradient-to-br from-violet-500 to-blue-600 rounded-lg text-white">
//                         <Mail size={24} />
//                       </div>
//                       <div>
//                         <h3 className="font-medium text-gray-800 mb-1">
//                           Email Me
//                         </h3>
//                         <p className="text-sm text-gray-600">
//                           contact@example.com
//                         </p>
//                       </div>
//                       <ExternalLink
//                         size={18}
//                         className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
//                       />
//                     </motion.a>

//                     <motion.a
//                       href="#"
//                       className="group flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:bg-white transition-all duration-300"
//                       whileHover={{
//                         y: -5,
//                         boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
//                       }}
//                     >
//                       <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg text-white">
//                         <Download size={24} />
//                       </div>
//                       <div>
//                         <h3 className="font-medium text-gray-800 mb-1">
//                           Resume
//                         </h3>
//                         <p className="text-sm text-gray-600">Download my CV</p>
//                       </div>
//                       <ExternalLink
//                         size={18}
//                         className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
//                       />
//                     </motion.a>
//                   </div>

//                   <div className="flex justify-center gap-6">
//                     {[
//                       {
//                         icon: <Github size={24} />,
//                         color: 'from-violet-500 to-purple-600',
//                         name: 'GitHub',
//                       },
//                       {
//                         icon: <Linkedin size={24} />,
//                         color: 'from-blue-500 to-cyan-600',
//                         name: 'LinkedIn',
//                       },
//                       {
//                         icon: <Twitter size={24} />,
//                         color: 'from-cyan-500 to-teal-600',
//                         name: 'Twitter',
//                       },
//                     ].map((social, index) => (
//                       <motion.a
//                         key={index}
//                         href="#"
//                         className="group relative p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-white/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
//                         whileHover={{ y: -5 }}
//                       >
//                         <div className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300">
//                           {social.icon}
//                         </div>
//                         <motion.div
//                           className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//                           initial={{ scale: 0 }}
//                           whileHover={{ scale: 1 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       </motion.a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-8 border-t border-gray-200/50">
//           <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
//             <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

import pic from '../assets/mypic.jpg';
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
  const contactRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 });

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
