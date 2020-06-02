import React from 'react';
import '../styles/Slider.css';

class Slider extends React.Component {
  state = {
    slider: [],
    transform: 'translateX(-0%)',
    index: 0,
  };
  componentDidMount() {
    this.startSlide();
  }
  startSlide = () => {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  };

  nextSlide = () => {
    if (this.state.index > 50) {
      this.setState({ index: 0 });
    }
    this.setState({ index: this.state.index + 1 });
    this.setState({ transform: `translateX(-${100 * this.state.index}%)` });
    let slider = this.props.images.map((image, index) => {
      return (
        <div
          key={index}
          className="slide"
          style={{
            transition: '.7s ease-out',
            transform: this.state.transform,
          }}
        >
          <img className="img" src={image.url} alt="slide-img"></img>
        </div>
      );
    });
    this.setState({ slider: slider });
  };
  prevSlide = (slider1) => {
    if (this.state.index < 0) {
      return;
    }
    this.setState({ index: this.state.index - 1 });
    this.setState({ transform: `translateX(${-100 * this.state.index}%)` });
    let slider = this.props.images.map((image, index) => {
      return (
        <div
          key={index}
          className="slide"
          style={{
            transition: '.7s ease-out',
            transform: this.state.transform,
          }}
        >
          <img className="img" src={image.url} alt="slide-img"></img>
        </div>
      );
    });
    this.setState({ slider: slider });
  };
  render() {
    const { slider } = this.state;

    return (
      <div>
        <button className="btn" onClick={() => this.prevSlide(slider)}>
          prev
        </button>

        <button className="btn" onClick={() => this.nextSlide(slider)}>
          next
        </button>

        <div className="slider">{slider}</div>
      </div>
    );
  }
}
export default Slider;
