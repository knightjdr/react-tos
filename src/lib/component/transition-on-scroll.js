import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Style from './style';

class TransitionOnScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      isVisible: false,
      onScrollAdded: null,
      transform: this.defineTransform(),
    };
  }
  componentDidMount = () => {
    const show = this.showContainer();
    if (!show) {
      window.addEventListener('scroll', this.handleScroll);
    }
    this.setState({
      duration: show ? 0 : this.props.config.duration,
      isVisible: show,
      onScrollAdded: !show,
    });
  }
  componentWillUnmount = () => {
    if (this.state.onScrollAdded) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  defineTransform = () => (
    `scale(${this.props.config.startingScale})`
  )
  handleScroll = () => {
    if (this.state.onScrollAdded) {
      const show = this.showContainer();
      if (show) {
        window.removeEventListener('scroll', this.handleScroll);
        this.setState({
          isVisible: true,
          onScrollAdded: false,
        });
      }
    }
  }
  showContainer = () => {
    const { top } = this.elem.getBoundingClientRect();
    const bottom = window.innerHeight;
    return bottom > top - this.props.config.bottomOffset;
  }
  render() {
    return (
      <div
        className={this.props.className}
        ref={(elem) => { this.elem = elem; }}
        style={{
          ...Style,
          ...{
            opacity: this.state.isVisible ? 1 : this.props.config.startingOpacity,
            transform: this.state.isVisible ? 'none' : this.state.transform,
            transitionDuration: `${this.state.duration}s`,
            transitionTimingFunction: this.props.config.timingFunction,
          },
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

TransitionOnScroll.defaultProps = {
  children: null,
  className: '',
  config: {
    duration: 1,
    bottomOffset: 0,
    startingScale: 0.95,
    startingOpacity: 0,
    timingFunction: 'ease-in',
  },
};

TransitionOnScroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  config: PropTypes.shape({
    duration: PropTypes.number,
    bottomOffset: PropTypes.number,
    startingScale: PropTypes.number,
    startingOpacity: PropTypes.number,
    timingFunction: PropTypes.string,
  }),
};

export default TransitionOnScroll;
