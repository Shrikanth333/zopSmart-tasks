import React from 'react';
import '../styles/Slider.css';

import { css, keyframes } from 'styled-components';

function Slider({ images }) {
  const length = 100 / images.length;

  let totalTansition = images.map((image, index) => {
    return `${length * index}%  { transform: translateX(-${100 * index}%)}`;
  });

  let slideShow = keyframes`
    ${totalTansition}
    `;
  let animation = css`
    ${slideShow} ${images.length * 4}s ease-out 1s infinite
  `;
  let slider = images.map((image, index) => {
    return (
      <div
        key={index}
        className="slide"
        style={{
          animation: { animation },
        }}
      >
        <img className="img" src={image.url} alt="slide-img"></img>
      </div>
    );
  });
  console.log(slider);
  return <div className="slider">{slider}</div>;
}
export default Slider;
