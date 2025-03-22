import IconCloud from '../components/IconCloud/SkillCloud';

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
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];

function IconCloudDemo() {
  return (
    <div className="min-h-screen mt-16 flex items-center justify-center">
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}

export default IconCloudDemo;


// export default About

// import { motion } from 'framer-motion';

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-950 text-white px-4 py-16">
//       <div className="max-w-4xl mx-auto">
//         {/* Heading */}
//         <motion.h1
//           className="text-4xl md:text-6xl font-bold mb-8 text-center"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: 'easeOut' }}
//         >
//           About Me
//         </motion.h1>

//         {/* Content Card */}
//         <motion.div
//           className="bg-gray-900 rounded-2xl shadow-lg p-8"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, ease: 'easeOut' }}
//         >
//           <p className="text-lg leading-relaxed mb-6">
//             Hi 👋, I am{' '}
//             <span className="font-semibold text-blue-400">
//               Vishal Kumar Soni
//             </span>
//             , a passionate full-stack developer specializing in the
//             <span className="font-semibold text-green-400"> MERN stack</span>. I
//             have built several scalable projects, including AI-integrated
//             blogging platforms, chat applications, and authentication systems.
//           </p>

//           {/* Skills */}
//           <motion.div
//             className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             {[
//               'React.js',
//               'Next.js',
//               'Node.js',
//               'Express.js',
//               'MongoDB',
//               'TypeScript',
//               'Tailwind CSS',
//               'JWT Authentication',
//             ].map(skill => (
//               <div
//                 key={skill}
//                 className="bg-gray-800 rounded-lg py-2 px-4 text-center font-medium text-sm hover:bg-blue-500 transition"
//               >
//                 {skill}
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
