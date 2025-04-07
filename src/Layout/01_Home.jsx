import { useState, useEffect, useRef } from 'react';
import me from '../assets/mypic.jpg';
import GradientText from '../components/custom_components/Text_Component/GradientText';
import SplitText from '../components/custom_components/Text_Component/SplitText';
import Loader from '../components/custom_components/Text_Component/SequenceText';
import { motion, useAnimation } from 'framer-motion';
// import {  useNavigate } from 'react-router-dom';

export default function HomePage() {
  // const Navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const imageRef = useRef(null);
  const controls = useAnimation();
  const [hoverState, setHoverState] = useState({
    freelance: false,
    heading: false,
    subtitle: false,
    cta: false,
    image: false,
  });

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

  // Image parallax effect
  useEffect(() => {
    if (!imageRef.current) return;

    const handleMouseMove = e => {
      if (!hoverState.image) return;

      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 8
      }deg) rotateX(${-y * 8}deg) scale3d(1.03, 1.03, 1.03)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoverState.image]);

  // Reset image transform when not hovering
  useEffect(() => {
    if (!imageRef.current) return;

    if (!hoverState.image) {
      imageRef.current.style.transform =
        'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    }
  }, [hoverState.image]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.3,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(230, 230, 230, 0.5)',
      border: '1px solid rgba(200, 200, 200, 0.8)',
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: 'rgba(240, 240, 240, 0.2)',
      mixBlendMode: 'difference',
      opacity: 0.7,
      border: '1px solid rgba(200, 200, 200, 0.3)',
    },
    image: {
      height: 70,
      width: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      backgroundColor: 'rgba(245, 245, 245, 0.15)',
      mixBlendMode: 'difference',
      borderRadius: '50%',
      opacity: 0.7,
      border: '1px solid rgba(200, 200, 200, 0.3)',
    },
    button: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      mixBlendMode: 'normal',
      borderRadius: '50%',
      opacity: 0.5,
      border: '1px solid rgba(200, 200, 200, 0.5)',
    },
    emoji: {
      height: 40,
      width: 40,
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      mixBlendMode: 'normal',
      borderRadius: '50%',
      opacity: 0.7,
      scale: 1.1,
      border: '1px solid rgba(200, 200, 200, 0.5)',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const imageEnter = () => setCursorVariant('image');
  const buttonEnter = () => setCursorVariant('button');
  const emojiEnter = () => setCursorVariant('emoji');
  const cursorLeave = () => setCursorVariant('default');

  const handleHover = (element, isHovering) => {
    setHoverState(prev => ({ ...prev, [element]: isHovering }));
  };

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="cursor-dot hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />

      <div className="min-h-screen bg-white text-gray-800 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-16 lg:px-24 py-12 md:py-0 gap-8 md:gap-4 overflow-hidden rounded-xl relative">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 blur-3xl"
            animate={{
              x: [0, 15, 0],
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 18,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 24,
              ease: 'easeInOut',
            }}
          />
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
            className="group relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => {
              textEnter();
              handleHover('freelance', true);
              controls.start('visible');
            }}
            onMouseLeave={() => {
              cursorLeave();
              handleHover('freelance', false);
              controls.start('hidden');
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoverState.freelance ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <GradientText
              colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
              animationSpeed={3}
              showBorder={false}
              className="text-base md:text-lg px-4 py-2 rounded-full bg-white shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              🎉 | Available for freelance work
            </GradientText>
            <motion.div
              className="absolute inset-0 border border-gray-200 rounded-full transition-all duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: hoverState.freelance ? 1.05 : 0.8,
                opacity: hoverState.freelance ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Main heading */}
          <div
            className="w-full relative"
            onMouseEnter={() => {
              textEnter();
              handleHover('heading', true);
            }}
            onMouseLeave={() => {
              cursorLeave();
              handleHover('heading', false);
            }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg opacity-0 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoverState.heading ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <SplitText
              text="Hi, I am Vishal Soni!"
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-left transition-transform duration-700 ${
                hoverState.heading ? 'scale-[1.02]' : 'scale-100'
              }`}
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: hoverState.heading ? '100%' : '0%' }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Subtitle with loader */}
          <motion.div
            className="my-2 md:my-4 relative"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => {
              textEnter();
              handleHover('subtitle', true);
            }}
            onMouseLeave={() => {
              cursorLeave();
              handleHover('subtitle', false);
            }}
          >
            <motion.div
              className="absolute -inset-2 rounded-lg opacity-0 bg-gradient-to-r from-gray-50 to-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoverState.subtitle ? 0.8 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="flex flex-wrap text-xl md:text-2xl font-serif webkit-font-smoothing items-center">
              I build
              <motion.div
                className="mx-2 bg-gradient-to-r from-[#40ffaa]/10 to-[#4079ff]/10 px-3 py-1 rounded-lg"
                animate={{
                  boxShadow: hoverState.subtitle
                    ? [
                        '0 0 0 rgba(64, 255, 170, 0)',
                        '0 0 10px rgba(64, 255, 170, 0.3)',
                        '0 0 0 rgba(64, 255, 170, 0)',
                      ]
                    : '0 0 0 rgba(64, 255, 170, 0)',
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: 'easeInOut',
                }}
              >
                <Loader />
              </motion.div>
              <span className="mt-1 md:mt-0">Website and Webapps</span>
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="mt-4 px-6 py-3 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white rounded-lg font-medium shadow-md hidden md:block relative overflow-hidden"
            whileHover={{
              scale: 1.03,
              boxShadow: '0 8px 20px rgba(64, 121, 255, 0.2)',
            }}
            whileTap={{ scale: 0.97 }}
            onMouseEnter={() => {
              buttonEnter();
              handleHover('cta', true);
            }}
            onMouseLeave={() => {
              cursorLeave();
              handleHover('cta', false);
            }}
          >
            <motion.span
              className="absolute inset-0 bg-white opacity-0"
              animate={{
                opacity: [0, 0.15, 0],
                left: hoverState.cta ? ['-100%', '100%', '100%'] : '-100%',
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                repeat: hoverState.cta ? Number.POSITIVE_INFINITY : 0,
                repeatDelay: 0.5,
              }}
            />
            View My Work
          </motion.button>
        </motion.div>

        {/* Image container */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="relative group"
            ref={imageRef}
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s ease-out',
            }}
            onMouseEnter={() => {
              imageEnter();
              handleHover('image', true);
            }}
            onMouseLeave={() => {
              cursorLeave();
              handleHover('image', false);
            }}
          >
            {/* Decorative elements - more subtle for clean design */}
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-[#40ffaa]/40 to-[#4079ff]/40 rounded-full opacity-50 blur-sm"
              animate={{
                opacity: hoverState.image ? 0.7 : 0.5,
                scale: hoverState.image ? 1.05 : 1,
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#40ffaa]/30 to-[#4079ff]/30 rounded-full opacity-30 blur-md"
              animate={{
                opacity: hoverState.image ? 0.5 : 0.3,
                scale: hoverState.image ? 1.1 : 1,
              }}
              transition={{ duration: 0.7 }}
            />

            <div className="relative rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#40ffaa]/10 to-[#4079ff]/10 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoverState.image ? 0.7 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Clean image overlay effect */}
              <motion.div
                className="absolute inset-0 z-20 mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoverState.image ? 0.3 : 0,
                  background:
                    'linear-gradient(135deg, rgba(64, 255, 170, 0.15) 0%, rgba(64, 121, 255, 0.15) 100%)',
                }}
                transition={{ duration: 0.3 }}
              />

              <img
                src={me || '/placeholder.svg'}
                alt="Vishal Soni portrait"
                className={`relative w-[180px] h-[240px] md:w-[220px] md:h-[280px] lg:w-[260px] lg:h-[320px] object-cover shadow-md border border-gray-100 rounded-2xl 
                  transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                  ${
                    hoverState.image
                      ? 'border-[#40ffaa]/20 grayscale-0'
                      : 'grayscale-[30%]'
                  }`}
              />

              {/* Subtle scan line effect */}
              <motion.div
                className="absolute inset-0 overflow-hidden z-10 pointer-events-none opacity-0"
                animate={{ opacity: hoverState.image ? 0.08 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-full h-[1px] bg-white/70 blur-[1px]"
                  animate={{
                    top: hoverState.image ? ['-10%', '110%'] : '-10%',
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: hoverState.image ? Number.POSITIVE_INFINITY : 0,
                    ease: 'linear',
                  }}
                  style={{ position: 'absolute' }}
                />
              </motion.div>
            </div>

            {/* Floating elements - cleaner style */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50"
              animate={{
                y: [0, -8, 0],
                rotate: hoverState.image ? [0, 8, 0] : 0,
              }}
              transition={{
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: 'easeInOut',
                },
                rotate: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: 'easeInOut',
                },
              }}
              onMouseEnter={emojiEnter}
              onMouseLeave={cursorLeave}
            >
              <span className="text-2xl">💻</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50"
              animate={{
                y: [0, 8, 0],
                rotate: hoverState.image ? [0, -8, 0] : 0,
              }}
              transition={{
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: 'easeInOut',
                  delay: 0.5,
                },
                rotate: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2.5,
                  ease: 'easeInOut',
                  delay: 0.2,
                },
              }}
              onMouseEnter={emojiEnter}
              onMouseLeave={cursorLeave}
            >
              <span className="text-2xl">🚀</span>
            </motion.div>

            {/* New floating element with clean animation */}
            <motion.div
              className="absolute top-1/2 right-[-40px] w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50 opacity-0"
              animate={{
                opacity: hoverState.image ? 1 : 0,
                x: hoverState.image ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={emojiEnter}
              onMouseLeave={cursorLeave}
            >
              <span className="text-xl">✨</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mobile CTA Button */}
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white rounded-lg font-medium shadow-md md:hidden w-full max-w-xs relative overflow-hidden"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.span
            className="absolute inset-0 bg-white opacity-0"
            animate={{
              opacity: [0, 0.15, 0],
              left: ['-100%', '100%', '100%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
          />
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
