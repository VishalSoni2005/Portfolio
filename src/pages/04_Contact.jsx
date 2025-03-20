import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., send an email or call an API)
    console.log(formData);
    alert('Thank you for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - SVG Illustration */}
      <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="w-full h-auto"
          >
            {/* Example SVG: Student working on projects */}
            <path
              fill="#4F46E5"
              d="M320 32c-35.3 0-64 28.7-64 64v32h128V96c0-35.3-28.7-64-64-64zM144 96c0-26.5-21.5-48-48-48S48 69.5 48 96v32h96V96zM592 96c0-26.5-21.5-48-48-48s-48 21.5-48 48v32h96V96zM80 192H32C14.3 192 0 206.3 0 224v48c0 17.7 14.3 32 32 32h48v-112zm512 0h-48v112h48c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32zM80 320H32c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h48v-112zm512 0h-48v112h48c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32zM320 416c-35.3 0-64 28.7-64 64h128c0-35.3-28.7-64-64-64z"
            />
            <path
              fill="#A5B4FC"
              d="M320 128c-17.7 0-32 14.3-32 32v96h64v-96c0-17.7-14.3-32-32-32z"
            />
            <circle cx="320" cy="96" r="48" fill="#E0E7FF" />
          </svg>
          <p className="text-center mt-4 text-gray-600 font-medium">
            Student working on projects
          </p>
        </motion.div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="md:w-1/2 flex items-center justify-center p-6 bg-white">
        <motion.div
          className="w-full max-w-lg bg-gray-50 shadow-2xl rounded-3xl p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Hire Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-600 transition"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
