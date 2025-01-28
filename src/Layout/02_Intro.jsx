
import { motion } from 'framer-motion';
import Avatar from '../assets/Avatar.svg';
import DownloadCV from '../components/custom_components/Btns/DownloadCV';

export default function CardFive() {
  return (
    <div className="h-screen bg-[#EFEFEF] text-black flex items-center justify-center overflow-hidden rounded-xl">
      <div className="w-1/2 flex justify-center items-center">
        <img src={Avatar} alt="Avatar" className="h-auto w-auto rounded-full" />
      </div>
      <motion.div
        className="w-1/2 flex flex-col justify-center items-start space-y-6"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        <motion.span
          className="text-xl text-blue-600 border border-blue-600 rounded-3xl px-6 py-2 font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          About Me
        </motion.span>
        <p className="font-serif text-lg text-gray-700 leading-relaxed tracking-wide">
          I&#39;m a passionate{' '}
          <strong className="text-blue-500">Full-Stack Web Developer</strong>{' '}
          dedicated to building dynamic, user-friendly, and efficient web
          applications. With a strong foundation in both frontend and backend
          technologies, I thrive on transforming ideas into reality through
          code.
        </p>
        <p className="text-lg font-serif text-gray-700 leading-relaxed tracking-wide">
          I specialize in crafting responsive, scalable, and performance-driven
          applications using modern frameworks and tools like {''}
          <strong className="text-red-900">
             React, TypeScript, Node.js, and Express{' '}
          </strong>{' '}
          ensuring seamless user experiences and robust backend functionality.
        </p>
          <DownloadCV />
      </motion.div>
    </div>
  );
}
