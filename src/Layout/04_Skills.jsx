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
  { imgUrl: HTML, altText: 'HTML Logo' },
  { imgUrl: CSS, altText: 'CSS Logo' },
  { imgUrl: React, altText: 'React Logo' },
  { imgUrl: Node, altText: 'Node.js Logo' },
  { imgUrl: Mongo, altText: 'MongoDB Logo' },
  { imgUrl: Git, altText: 'Git Logo' },
  { imgUrl: GitHub, altText: 'GitHub Logo' },
  { imgUrl: JS, altText: 'JavaScript Logo' },
  { imgUrl: NGINX, altText: 'NGINX Logo' },
  { imgUrl: mysql, altText: 'MySQL Logo' },
  { imgUrl: postgres, altText: 'PostgreSQL Logo' },
  { imgUrl: postman, altText: 'Postman Logo' },
  { imgUrl: solidity, altText: 'Solidity Logo' },
  { imgUrl: Next, altText: 'Next.js Logo' },
  { imgUrl: C, altText: 'C Logo' },
  { imgUrl: Expressjs, altText: 'Express.js Logo' },
  { imgUrl: Graphql, altText: 'GraphQL Logo' },
  { imgUrl: JAVA, altText: 'Java Logo' },
  { imgUrl: Linux, altText: 'Linux Logo' },
  { imgUrl: TS, altText: 'TypeScript Logo' },
  { imgUrl: Vercel, altText: 'Vercel Logo' },
];

export default function CardFive() {
  return (
    <div className="h-screen bg-[#161719] flex flex-col items-center justify-items-start overflow-hidden p-10">
      <h1 className="text-6xl font-bold text-green-400 mt-10 p-4 text-center drop-shadow-lg">
        🎉 SUPERPOWER 🎉
      </h1>
      <p className="text-2xl font-light text-white m-6 p-6 text-center max-w-3xl leading-relaxed">
        I specialize in building modern, responsive web applications with a
        focus on performance and user experience. From frontend frameworks to
        backend logic, I have a versatile skill set that brings ideas to life.
      </p>

      {/* <div className="mt-10 p-6"> */}
      <Marquee
        gradient={true}
        gradientColor={[22, 23, 25]}
        speed={50}
        pauseOnHover={true}
        className="mt-10 "
      >
        {logoImgs.map((logo, index) => (
          <div key={index} className="mx-10">
            <img src={logo.imgUrl} alt={logo.alt} className="h-15 w-auto" />
          </div>
        ))}
      </Marquee>
      {/* </div> */}
    </div>
  );
}
