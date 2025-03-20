import Marquee from 'react-fast-marquee';
import HTML from '../assets/Skills/HTML.svg';
import CSS from '../assets/Skills/CSS.svg';
import Next from '../assets/Skills/Nextjs.svg';
import NGINX from '../assets/Skills/NGINX.svg';
import mysql from '../assets/Skills/MYSQL.svg';
import postgres from '../assets/Skills/Postgresql.svg';
import postman from '../assets/Skills/postman.svg';
import solidity from '../assets/Skills/Solidity.svg';
import JS from '../assets/Skills/JS.svg';
import React from '../assets/Skills/React.svg';
import Node from '../assets/Skills/Nodejs.svg';
import Mongo from '../assets/Skills/Mongo.svg';
import Git from '../assets/Skills/GIT.svg';
import GitHub from '../assets/Skills/GITHUB.svg';
import C from '../assets/Skills/C.svg';
import Expressjs from '../assets/Skills/Express.svg';
import Graphql from '../assets/Skills/Graphql.svg';
import JAVA from '../assets/Skills/JAVA.svg';
import Linux from '../assets/Skills/Linux.svg';
import TS from '../assets/Skills/TS.svg';
import Vercel from '../assets/Skills/Vercel.svg';

const logoImgs = [
  { imgUrl: HTML, altText: 'HTML' },
  { imgUrl: CSS, altText: 'CSS' },
  { imgUrl: React, altText: 'React' },
  { imgUrl: Node, altText: 'Node.js' },
  { imgUrl: Mongo, altText: 'MongoDB' },
  { imgUrl: Git, altText: 'Git' },
  { imgUrl: GitHub, altText: 'GitHub' },
  { imgUrl: JS, altText: 'JavaScript' },
  { imgUrl: NGINX, altText: 'NGINX' },
  { imgUrl: mysql, altText: 'MySQL' },
  { imgUrl: postgres, altText: 'PostgreSQL' },
  { imgUrl: postman, altText: 'Postman' },
  { imgUrl: solidity, altText: 'Solidity' },
  { imgUrl: Next, altText: 'Next.js' },
  { imgUrl: C, altText: 'C' },
  { imgUrl: Expressjs, altText: 'Express.js' },
  { imgUrl: Graphql, altText: 'GraphQL' },
  { imgUrl: JAVA, altText: 'Java' },
  { imgUrl: Linux, altText: 'Linux' },
  { imgUrl: TS, altText: 'TypeScript' },
  { imgUrl: Vercel, altText: 'Vercel' },
];

export default function CardFive() {
  return (
    <div className="h-screen bg-[#161719] flex flex-col items-center justify-center overflow-hidden">
      {/* Title */}
      <h1 className="text-5xl font-serif text-green-400 md:mt-6 p-4 text-center drop-shadow-lg">
        <span className="hidden sm:inline">🚀</span> My Superpowers{' '}
        <span className="hidden sm:inline">🚀</span>
      </h1>

      {/* Description */}
      <p className="md:text-xl text-lg font-light text-gray-300 mt-4 md:p-6 text-center max-w-3xl leading-relaxed">
        I specialize in building modern, responsive web applications with a
        focus on performance and user experience. From frontend frameworks to
        backend logic, I have a versatile skill set that brings ideas to life.
      </p>

      {/* Marquee Section */}
      <div className="w-full mt-10 space-y-4">
        {/* Row 1 */}
        <Marquee
          gradient={true}
          gradientColor={[22, 23, 25]}
          speed={50}
          pauseOnHover={true}
          className="w-full"
        >
          {logoImgs
            .slice(0, Math.ceil(logoImgs.length / 2))
            .map((logo, index) => (
              <div key={index} className="mx-6 flex flex-col items-center">
                <div className="relative group">
                  <img
                    src={logo.imgUrl}
                    alt={logo.altText}
                    className="h-16 w-auto transition-transform transform hover:scale-110"
                  />
                  {/* Hover Label */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-100 bg-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {logo.altText}
                  </span>
                </div>
              </div>
            ))}
        </Marquee>

        {/* Row 2 */}
        <Marquee
          gradient={true}
          gradientColor={[22, 23, 25]}
          speed={40}
          pauseOnHover={true}
          direction="right"
          className="w-full"
        >
          {logoImgs.slice(Math.ceil(logoImgs.length / 2)).map((logo, index) => (
            <div key={index} className="mx-6 flex flex-col items-center">
              <div className="relative group">
                <img
                  src={logo.imgUrl}
                  alt={logo.altText}
                  className="h-16 w-auto transition-transform transform hover:scale-110"
                />
                {/* Hover Label */}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-100 bg-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {logo.altText}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

// import Marquee from 'react-fast-marquee';
// import HTML from '../assets/Skills/HTML.svg';
// import CSS from '../assets/Skills/CSS.svg';
// import Next from '../assets/Skills/Nextjs.svg';
// import NGINX from '../assets/Skills/NGINX.svg';
// import mysql from '../assets/Skills/MYSQL.svg';
// import postgres from '../assets/Skills/Postgresql.svg';
// import postman from '../assets/Skills/postman.svg';
// import solidity from '../assets/Skills/Solidity.svg';
// import JS from '../assets/Skills/JS.svg';
// import React from '../assets/Skills/React.svg';
// import Node from '../assets/Skills/Nodejs.svg';
// import Mongo from '../assets/Skills/Mongo.svg';
// import Git from '../assets/Skills/GIT.svg';
// import GitHub from '../assets/Skills/GITHUB.svg';
// import C from '../assets/Skills/C.svg';
// import Expressjs from '../assets/Skills/Express.svg';
// import Graphql from '../assets/Skills/Graphql.svg';
// import JAVA from '../assets/Skills/JAVA.svg';
// import Linux from '../assets/Skills/Linux.svg';
// import TS from '../assets/Skills/TS.svg';
// import Vercel from '../assets/Skills/Vercel.svg';

// const logoImgs = [
//   { imgUrl: HTML, altText: 'HTML Logo' },
//   { imgUrl: CSS, altText: 'CSS Logo' },
//   { imgUrl: React, altText: 'React Logo' },
//   { imgUrl: Node, altText: 'Node.js Logo' },
//   { imgUrl: Mongo, altText: 'MongoDB Logo' },
//   { imgUrl: Git, altText: 'Git Logo' },
//   { imgUrl: GitHub, altText: 'GitHub Logo' },
//   { imgUrl: JS, altText: 'JavaScript Logo' },
//   { imgUrl: NGINX, altText: 'NGINX Logo' },
//   { imgUrl: mysql, altText: 'MySQL Logo' },
//   { imgUrl: postgres, altText: 'PostgreSQL Logo' },
//   { imgUrl: postman, altText: 'Postman Logo' },
//   { imgUrl: solidity, altText: 'Solidity Logo' },
//   { imgUrl: Next, altText: 'Next.js Logo' },
//   { imgUrl: C, altText: 'C Logo' },
//   { imgUrl: Expressjs, altText: 'Express.js Logo' },
//   { imgUrl: Graphql, altText: 'GraphQL Logo' },
//   { imgUrl: JAVA, altText: 'Java Logo' },
//   { imgUrl: Linux, altText: 'Linux Logo' },
//   { imgUrl: TS, altText: 'TypeScript Logo' },
//   { imgUrl: Vercel, altText: 'Vercel Logo' },
// ];

// export default function CardFive() {
//   return (
//     <div className="h-screen bg-[#161719] flex flex-col items-center justify-center overflow-hidden ">
//       {/* Title */}
//       <h1 className="text-6xl font-serif text-green-400 md:mt-10 -translate-y-9 p-4 text-center drop-shadow-lg">
//         <p className="hidden sm:inline">🎉</p> SUPERPOWER{' '}
//         <p className="hidden sm:inline">🎉</p>
//       </h1>

//       {/* Description */}
//       <p className="md:text-2xl text-xl font-light text-gray-300 mt-6 md:m-6 md:p-6 text-center max-w-4xl leading-relaxed -translate-y-6 pr-6 pl-6">
//         I specialize in building modern, responsive web applications with a
//         focus on performance and user experience. From frontend frameworks to
//         backend logic, I have a versatile skill set that brings ideas to life.
//       </p>

//       {/* Marquee Section */}
//       <div className="mt-10">
//         <Marquee
//           gradient={true}
//           gradientColor={[22, 23, 25]}
//           speed={60}
//           pauseOnHover={true}
//           className="w-full"
//         >
//           {logoImgs.map((logo, index) => (
//             <div
//               key={index}
//               className="mx-6 flex items-center justify-center transition-transform transform hover:scale-110"
//             >
//               <img
//                 src={logo.imgUrl}
//                 alt={logo.altText}
//                 className="h-16 w-auto"
//               />
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// }
