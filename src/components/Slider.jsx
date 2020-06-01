import React from 'react';
import '../styles/Slider.css';

import { keyframes } from 'styled-components';

function Slider({ images }) {
  const length = 100 / images.length;

  let totalTansition = images.map((image, index) => {
    return `${length * index}%  { transform: translateX(-${100 * index}%)}`;
  });

  let slideShow = keyframes`
    ${totalTansition}
    `;

  let slider = images.map((image, index) => {
    return (
      <div
        key={index}
        className="slide"
        style={{
          animation: `${slideShow} ${images.length * 4}s ease-in 1s infinite`,
        }}
      >
        <img className="img" src={image.url} alt="slide-img"></img>
      </div>
    );
  });

  return <div className="slider">{slider}</div>;
}
export default Slider;
