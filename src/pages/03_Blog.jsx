import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'How Zustand Works',
    description:
      'Learn how Zustand simplifies state management in React and how to create and manage states efficiently with minimal boilerplate.',
    date: 'March 10, 2025',
    link: '#',
  },
  {
    id: 2,
    title: 'How to Persist an Authenticated User Even After Browser Reload',
    description:
      'Learn how to store user authentication status using cookies, localStorage, or sessionStorage to maintain login state.',
    date: 'March 15, 2025',
    link: '#',
  },
  {
    id: 3,
    title: 'How JWT Token Works',
    description:
      'Understand how JWT (JSON Web Token) is used for secure authentication and why it’s a popular method for token-based authentication.',
    date: 'March 20, 2025',
    link: '#',
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          My Blogs
        </motion.h1>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">{blog.date}</span>
                <a
                  href={blog.link}
                  className="text-blue-500 font-medium hover:text-blue-700 transition"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

// import { useEffect, useRef } from 'react';
// import Lenis from '@studio-freight/lenis';
// export default function About() {
//   const lenisRef = useRef(null); // Removed <Lenis | null>

//   useEffect(() => {
//     // Initialize Lenis
//     const lenis = new Lenis({
//       smooth: true,
//     });

//     // Set reference
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
//     <div className="text-3xl h-screen flex items-center justify-center bg-amber-700 text-white">
//       <h1>About</h1>
//     </div>
//   );
// }
