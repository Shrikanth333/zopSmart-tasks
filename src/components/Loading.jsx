import React from 'react';
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Loading',
    };
  }
  componentDidMount() {
    const stopper = this.state.text + '...';
    this.interval = setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: 'Loading' }))
        : this.setState((prevState) => ({ text: prevState.text + '.' }));
    }, 300);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div> {this.state.text}</div>
      </div>
    );
  }
}

export default Loading;
