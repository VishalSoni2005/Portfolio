import { useState, useEffect } from 'react';
import me from '../assets/me.png';
import GradientText from '../components/custom_components/Text_Component/GradientText';
import SplitText from '../components/custom_components/Text_Component/SplitText';
import Loader from '../components/custom_components/Text_Component/SequenceText';
import { motion } from 'framer-motion';
// import {  useNavigate } from 'react-router-dom';

export default function HomePage() {
  // const Navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: 'rgba(64, 255, 170, 0.2)',
      mixBlendMode: 'difference',
      opacity: 0.8,
    },
    image: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: 'rgba(64, 121, 255, 0.3)',
      mixBlendMode: 'difference',
      borderRadius: '50%',
      opacity: 0.8,
    },
  };

  const textEnter = () => setCursorVariant('text');
  const imageEnter = () => setCursorVariant('image');
  const cursorLeave = () => setCursorVariant('default');

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="cursor-dot hidden md:block fixed top-0 left-0 w-8 h-8 bg-green-400 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 1000, damping: 28 }}
      />

      <div className="min-h-screen bg-[#F8F8F8] text-black flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-16 lg:px-24 py-12 md:py-0 gap-8 md:gap-4 overflow-hidden rounded-xl relative">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#40ffaa]/10 to-[#4079ff]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#4079ff]/10 to-[#40ffaa]/10 blur-3xl"></div>
        </div>

        {/* Content container */}
        <motion.div
          className="flex flex-col items-start space-y-6 md:space-y-8 z-10 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Freelance badge */}
          <motion.div
            className="group"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={textEnter}
            onMouseLeave={cursorLeave}
          >
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={3}
              showBorder={false}
              className="text-base md:text-lg px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm group-hover:shadow-md transition-all duration-300"
            >
              🎉 | Available for freelance work
            </GradientText>
          </motion.div>

          {/* Main heading */}
          <div
            className="w-full"
            onMouseEnter={textEnter}
            onMouseLeave={cursorLeave}
          >
            <SplitText
              text="Hi, I am Vishal Soni!"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-left hover:scale-105 transform:scale duration-700"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>

          {/* Subtitle with loader */}
          <motion.div
            className="my-2 md:my-4"
            whileHover={{ scale: 1.03 }}
            onMouseEnter={textEnter}
            onMouseLeave={cursorLeave}
          >
            <span className="flex flex-wrap text-xl md:text-2xl font-serif webkit-font-smoothing items-center">
              I build
              <div className="mx-2 bg-gradient-to-r from-[#40ffaa]/20 to-[#4079ff]/20 px-3 py-1  rounded-lg">
                <Loader />
              </div>
              <span className="mt-1 md:mt-0">Website and Webapps</span>
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="mt-4 px-6 py-3 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white rounded-lg font-medium shadow-lg shadow-[#4079ff]/20 hidden md:block"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(64, 121, 255, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={textEnter}
            onMouseLeave={cursorLeave}
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Image container */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05, rotate: 2 }}
            onMouseEnter={imageEnter}
            onMouseLeave={cursorLeave}
          >
            {/* Decorative elements */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full opacity-75 blur-sm group-hover:opacity-100"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full opacity-50 blur-md"></div>

            {/* Image
            <img
              src={me || '/placeholder.svg'}
              alt="Vishal Soni portrait"
              className="relative w-[180px] h-[240px] md:w-[220px] md:h-[280px] lg:w-[260px] lg:h-[320px] rounded-2xl object-cover shadow-xl border-2 border-white/50
                transform transition-all duration-700 ease-in-out
                hover:shadow-2xl hover:border-[#40ffaa]/50"
            /> */}

            <div className="relative rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#40ffaa]/10 to-[#4079ff]/10 opacity-0 group-hover:opacity-100 z-10 "
                transition={{ duration: 0.5 }}
              />
              <img
                src={me || '/placeholder.svg'}
                alt="Vishal Soni portrait"
                className="relative w-[180px] h-[240px] md:w-[220px] md:h-[280px] lg:w-[260px] lg:h-[320px] object-cover shadow-xl border-2 border-white/50 rounded-2xl 
                  transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                  group-hover:border-[#40ffaa]/30 hover:grayscale-0"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: 'easeInOut',
              }}
            >
              <span className="text-2xl">💻</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mobile CTA Button */}

        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white rounded-lg font-medium shadow-lg shadow-[#4079ff]/20 md:hidden w-full max-w-xs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </div>
    </>
  );
}

//! original
// import me from '../assets/me.png';
// import GradientText from '../components/custom_components/Text_Component/GradientText';
// import SplitText from '../components/custom_components/Text_Component/SplitText';
// import Loader from '../components/custom_components/Text_Component/SequenceText';

// export default function cardFive() {
//   return (
//     <div
//       className={`mt-6 h-screen bg-[#F8F8F8] text-black flex justify-evenly items-center overflow-hidden  text-xl rounded-xl md:flex-row flex-col `}
//     >
//       <div className="flex flex-col items-start space-y-4">
//         <div className="">
//           <GradientText
//             colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
//             animationSpeed={3}
//             showBorder={false}
//             className="custom-class"
//           >
//             🎉 | Available for freelance work
//           </GradientText>
//         </div>

//         <SplitText
//           text="Hi, I am Vishal Soni!"
//           className="text-5xl font-semibold text-center hover:scale-110 transform:scale duration-1000"
//           delay={150}
//           animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
//           animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
//           easing="easeOutCubic"
//           threshold={0.2}
//           rootMargin="-50px"
//         />

//         <div className="my-4">
//           <span className="flex text-2xl font-serif webkit-font-smoothing ">
//             I build
//             <div className="mx-2 ">
//               <Loader />
//             </div>
//             Website and Webapps
//           </span>
//         </div>
//       </div>

//       <div>
//         <img
//           src={me}
//           alt="A portrait of me"
//           className="mx-6 w-[200px] h-[260px] rounded-full max-w-full shadow-lg border-2 border-transparent
//              transform transition-all duration-700 ease-in-out
//              hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:border-purple-500"
//         />
//       </div>
//     </div>
//   );
// }
