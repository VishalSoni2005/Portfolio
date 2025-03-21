'use client';
import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

export const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon, theme, imageArray) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: e => e.preventDefault(),
    },
  });
};

export default function IconCloud({
  // Default to an empty array if not provided
  iconSlugs = [],

  imageArray,
}) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      // Check if iconSlugs is not empty
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map(icon =>
      renderCustomIcon(icon, theme || 'dark')
    );
  }, [data, theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>
        <>{renderedIcons}</>
        {imageArray &&
          imageArray.length > 0 &&
          imageArray.map((image, index) => {
            return (
              <a key={index} href="#" onClick={e => e.preventDefault()}>
                <img height="42" width="42" alt="A globe" src={image} />
              </a>
            );
          })}
      </>
    </Cloud>
  );
}

// import { IconCloud } from 'react-icon-cloud';
// import {
//   FaReact,
//   FaNodeJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaDatabase,
//   FaDocker,
//   FaGithub,
//   FaPython,
//   FaGit,
// } from 'react-icons/fa';

// export default function SkillCloud() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <IconCloud
//         className="w-[400px] h-[400px]"
//         iconSize={60} // Adjust icon size
//         backgroundHexColor="#000000"
//         fallbackContent={<p>Loading...</p>}
//         maxSpeed={0.07}
//         minSpeed={0.02}
//         direction={135} // Adjust rotation direction
//       >
//         {/* Add skill icons here */}
//         <FaReact className="text-blue-400" />
//         <FaNodeJs className="text-green-400" />
//         <FaHtml5 className="text-orange-500" />
//         <FaCss3Alt className="text-blue-500" />
//         <FaJs className="text-yellow-400" />
//         <FaDatabase className="text-purple-400" />
//         <FaDocker className="text-blue-500" />
//         <FaGithub className="text-gray-400" />
//         <FaPython className="text-blue-300" />
//         <FaGit className="text-red-400" />
//       </IconCloud>
//     </div>
//   );
// }
