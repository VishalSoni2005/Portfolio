import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
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
    initial: [-0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#000',
    maxSpeed: 0.04,

    minSpeed: 0.02,
    dragControl: false,
     
  },
};

export const renderCustomIcon = (icon, theme, imageArray) => {
  console.log(imageArray);

  const bgHex = '#f3f2ef' ;
  const fallbackHex =  '#6e6e73'
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
  iconSlugs = [],
  imageArray,
}) {
  const [data, setData] = useState(null);
  const  theme = 'light';

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map(icon =>
      renderCustomIcon(icon, theme || 'light')
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

IconCloud.propTypes = {
  iconSlugs: PropTypes.arrayOf(PropTypes.string),
  imageArray: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.string,
  imageScale: PropTypes.number,
  maxSpeed: PropTypes.number,
  minSpeed: PropTypes.number,
  depth: PropTypes.number,
  reverse: PropTypes.bool,
  wheelZoom: PropTypes.bool,
  dragControl: PropTypes.bool,
};
