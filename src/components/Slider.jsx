import React, { Component } from 'react';
import Slideshow from './Slideshow';
// import '../styles/Slider.css';

const style = {
  container: 'screenW screenH dGray col',
  header: 'flex1 fCenter fSize2',
  main: 'flex8 white',
  footer: 'flex1 fCenter',
};

class Slider extends Component {
  render() {
    const slides = this.props.images.map((image, index) => image.url);

    return (
      <div className={style.container}>
        <div className={style.main}>
          <Slideshow slides={slides} />
        </div>
      </div>
    );
  }
}
export default Slider;
