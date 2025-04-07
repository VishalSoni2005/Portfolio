import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaReddit,
  FaInstagram,
} from 'react-icons/fa';

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

      emailjs
        .send(
          'service_ec26dit', // service id
          'template_4k0enuu', // template id
          formData,
          'lUw-YnIRuLNX_brvC'
        )
        .then(
          // eslint-disable-next-line no-unused-vars
          result => {
            toast.success('Message sent successfully!');
            // console.log(result);

            setFormData({ name: '', email: '', message: '' });
          },
          error => {
            console.error(error.text);
            alert('Something went wrong. Try again later.');
          }
        );
    };

  

  return (
    <>
      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        className="py-16 px-4 md:px-8"
      >
        <Toaster position="top-right" reverseOrder={false} />

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Feel free to reach out if you are interested in working together or
            have any questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={5}
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-blue-100">vsoni0882@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaGlobe className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium">Website</h4>
                    <a
                      href="https://vsoni.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-blue-100">vsoni.vercel.app</p>{' '}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaGithub className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a
                      href="https://github.com/vishalsoni2005"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-blue-100">github.com/vishalsoni2005</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaLinkedin className="h-6 w-6 mt-1" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/vishal-soni-07-/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-blue-100">
                        Linkedin.com/in/vishal-soni
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-8 pt-8 border-t border-blue-400">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/vishalsoni2005"
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vishal-soni-07-/"
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>

                  <a
                    href="htttps://medium.com/@vishalsoni2005"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaMedium className="h-5 w-5 " />
                  </a>
                  <a
                    href="mailto:vsoni0882@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaEnvelope className="h-5 w-5" />
                  </a>

                  <a
                    href="https://www.reddit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaReddit className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
