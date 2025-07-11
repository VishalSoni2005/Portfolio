import { useState, useEffect } from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';

export default function EnhancedEducationTimeline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-teal-500"></div>
          <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full bg-gradient-to-br from-green-400/10 to-teal-500/10"></div>

          <section className="px-4 py-12 sm:px-8 sm:py-16">
            <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
              {/* Header section */}
              <div className="md:col-span-4 space-y-4">
                <div
                  className={`transform transition-all duration-700 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="inline-flex items-center justify-center p-2 bg-green-50 rounded-lg mb-4">
                    <BookOpen className="h-6 w-6 text-green-500" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-serif">
                    Education
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mt-4"></div>
                  <p className="mt-6 text-gray-600 leading-relaxed hidden md:block">
                    My academic journey has equipped me with both theoretical
                    knowledge and practical skills in Information Technology.
                  </p>
                </div>
              </div>

              {/* Timeline section */}
              <div className="md:col-span-8">
                <div className="relative pl-8 sm:pl-12 border-l-2 border-green-100">
                  {/* Card One */}
                  <div
                    className={`mb-10 transform transition-all duration-700 delay-100 ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-10 opacity-0'
                    }`}
                  >
                    <div className="absolute -left-6 sm:-left-8 top-2">
                      <div className="h-12 w-12 flex items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-green-400 to-teal-500 shadow-md">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="relative p-6 sm:p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full bg-green-50 text-green-600">
                        Current
                      </span>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          Bachelor of Technology
                        </h3>
                        <time className="mt-1 sm:mt-0 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          2023 - 2027
                        </time>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Information Technology
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Pursuing B.Tech from{' '}
                        <span className="font-medium text-gray-900">
                          International Institute of Information Technology,
                          Pune
                        </span>
                      </p>
                      <div className="flex items-center mt-4">
                        <Award className="h-5 w-5 text-amber-500 mr-2" />
                        <span className="font-medium text-gray-900">
                          CGPA: 7.4
                        </span>
                        <span className="text-sm text-gray-500 ml-2">
                          (Till 4th Semester)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Two */}
                  <div
                    className={`transform transition-all duration-700 delay-300 ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-10 opacity-0'
                    }`}
                  >
                    <div className="absolute -left-6 sm:-left-8 top-2">
                      <div className="h-12 w-12 flex items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-green-400 to-teal-500 shadow-md">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="relative p-6 sm:p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          Higher Secondary
                        </h3>
                        <time className="mt-1 sm:mt-0 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          2020 - 2022
                        </time>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Science
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        Completed Higher Secondary from{' '}
                        <span className="font-medium text-gray-900">
                          Teresa International Academy, Patna
                        </span>
                      </p>
                      <div className="flex items-center mt-4">
                        <Award className="h-5 w-5 text-amber-500 mr-2" />
                        <span className="font-medium text-gray-900">
                          Percentage: 88.9%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// export default function CardFive() {
//   return (
//     <div className="h-screen bg-[#f2f2f2] text-black flex items-center justify-center overflow-hidden rounded-xl">
//       <section className="dark:bg-gray-100 dark:text-gray-800">
//         <div className="container max-w-5xl px-6 py-16 mx-auto">
//           <div className="grid gap-6 mx-4 sm:grid-cols-12">
//             <div className="hidden md:block col-span-12 sm:col-span-3">
//               <div className=" text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-green-500">
//                 <h3 className="text-4xl font-bold font-serif">Education</h3>
//               </div>
//             </div>

//             <div className="relative col-span-12 px-4 space-y-8 sm:col-span-9">
//               <div className="col-span-12 space-y-10 relative px-4 sm:col-span-8 sm:space-y-10 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
//                 {/* card One */}
//                 <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-5 sm:before:h-5 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400 hover:shadow-2xl transition-all duration-500 rounded-xl p-6 bg-white">
//                   <h3 className="text-2xl font-semibold tracking-wide">
//                     Bachelor of Technology in Information Technology
//                   </h3>
//                   <time className="text-lg font-medium tracking-wide uppercase text-gray-500">
//                     2023 - 2027
//                   </time>
//                   <p className="mt-3 text-lg">
//                     Pursuing B.Tech from{' '}
//                     <span className="font-medium">
//                       International Institute of Information Technology, Pune
//                     </span>
//                   </p>
//                   <p className="mt-3 text-lg font-medium">
//                     CGPA: 8 (Till 4th Semester)
//                   </p>
//                 </div>

//                 {/* card Two */}
//                 <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-5 sm:before:h-5 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400 hover:shadow-2xl transition-all duration-500 rounded-xl p-6 bg-white">
//                   <h3 className="text-2xl font-semibold tracking-wide">
//                     Higher Secondary (Science)
//                   </h3>
//                   <time className="text-lg font-medium tracking-wide uppercase text-gray-500">
//                     2020 - 2022
//                   </time>
//                   <p className="mt-3 text-lg">
//                     Completed Higher Secondary (Science) from{' '}
//                     <span className="font-medium">
//                       Teresa International Academy, Patna
//                     </span>
//                   </p>
//                   <p className="mt-3 text-lg font-medium">Percentage: 88.9%</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
