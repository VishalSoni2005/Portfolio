//

import SkillSlider from '../components/custom_components/Wall/LogoWall';
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
import Express from '../assets/Skills/Expressjs.svg';
import Mongo from '../assets/Skills/Mongo.svg';
import Git from '../assets/Skills/GIT.svg';
import GitHub from '../assets/Skills/GITHUB.svg';

const logoImgs = [
  { imgUrl: HTML, altText: 'HTML Logo' },
  { imgUrl: CSS, altText: 'CSS Logo' },
  { imgUrl: React, altText: 'React Logo' },
  { imgUrl: Node, altText: 'Node.js Logo' },
  { imgUrl: Express, altText: 'Express.js Logo' },
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
];

export default function CardFive() {
  return (
    <div className="h-screen bg-[#161719] flex flex-col items-center justify-center overflow-hidden p-10">
      <h1 className="text-6xl font-bold text-green-400 mt-10 p-4 text-center drop-shadow-lg">
        🎉 SUPERPOWER 🎉
      </h1>
      <p className="text-2xl font-light text-white m-6 p-6 text-center max-w-3xl leading-relaxed">
        I specialize in building modern, responsive web applications with a
        focus on performance and user experience. From frontend frameworks to
        backend logic, I have a versatile skill set that brings ideas to life.
      </p>

      <div className="w-full max-w-6xl mt-10">
        <SkillSlider
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
          bgColor="#060606"
          bgAccentColor="#111111"
        />
      </div>
    </div>
  );
}