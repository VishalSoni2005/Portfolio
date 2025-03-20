import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          About Me
        </motion.h1>

        {/* Content Card */}
        <motion.div
          className="bg-gray-900 rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-lg leading-relaxed mb-6">
            Hi 👋, I am{' '}
            <span className="font-semibold text-blue-400">
              Vishal Kumar Soni
            </span>
            , a passionate full-stack developer specializing in the
            <span className="font-semibold text-green-400"> MERN stack</span>. I
            have built several scalable projects, including AI-integrated
            blogging platforms, chat applications, and authentication systems.
          </p>

          {/* Skills */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[
              'React.js',
              'Next.js',
              'Node.js',
              'Express.js',
              'MongoDB',
              'TypeScript',
              'Tailwind CSS',
              'JWT Authentication',
            ].map(skill => (
              <div
                key={skill}
                className="bg-gray-800 rounded-lg py-2 px-4 text-center font-medium text-sm hover:bg-blue-500 transition"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

// import { useEffect, useRef } from 'react';
// import Lenis from '@studio-freight/lenis';

// export default function About() {
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     const lenis = new Lenis({
//       smooth: true,
//     });

//     lenisRef.current = lenis;

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <div
//       className="relative h-screen bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1579547621706-1a9c79d5b41e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
//         <h1 className="text-5xl font-bold">About Me</h1>
//         <p className="mt-4 text-lg max-w-2xl">
//           I&#39;m a passionate full-stack developer with experience in MERN
//           stack, Next.js, and cloud technologies.
//         </p>
//       </div>
//     </div>
//   );
// }
