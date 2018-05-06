import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Style from './style';

const defaultConfig = {
  bottomOffset: 0,
  duration: '1.2s',
  startingOpacity: 0,
  startingScale: 1,
  timingFunction: 'ease-in',
  transformOrigin: '50% 50%',
};

class TransitionOnScroll extends Component {
  constructor(props) {
    super(props);
    const config = {
      bottomOffset: this.props.config.bottomOffset || defaultConfig.bottomOffset,
      duration: this.props.config.duration || defaultConfig.duration,
      flip: this.props.config.flip || 0,
      rotate: this.props.config.rotate || 0,
      startingOpacity: this.props.config.startingOpacity || defaultConfig.startingOpacity,
      startingScale: this.props.config.startingScale || defaultConfig.startingScale,
      timingFunction: this.props.config.timingFunction || defaultConfig.timingFunction,
      transformOrigin: this.props.config.transformOrigin || defaultConfig.transformOrigin,
      translate: this.props.config.translate || 0,
    };
    this.state = {
      duration: 0,
      config,
      isVisible: false,
      onScrollAdded: null,
      transform: this.defineTransform(config),
    };
  }
  componentDidMount = () => {
    const show = this.showContainer();
    if (!show) {
      window.addEventListener('scroll', this.handleScroll);
    }
    this.setState({
      duration: show ? 0 : this.state.config.duration,
      isVisible: show,
      onScrollAdded: !show,
    });
  }
  componentWillUnmount = () => {
    if (this.state.onScrollAdded) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  defineTransform = (config) => {
    const transforms = [];
    if (config.flip) {
      transforms.push(`rotateY(${config.flip})`);
    }
    if (config.rotate) {
      transforms.push(`rotateZ(${config.rotate})`);
    }
    if (config.startingScale < 1) {
      transforms.push(`scale(${config.startingScale})`);
    }
    if (config.translate) {
      transforms.push(`translate(${config.translate})`);
    }
    return transforms.join(' ');
  }
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
    return bottom > top - this.state.config.bottomOffset;
  }
  render() {
    return (
      <div
        className={this.props.className}
        ref={(elem) => { this.elem = elem; }}
        style={{
          ...Style,
          ...{
            opacity: this.state.isVisible ? 1 : this.state.config.startingOpacity,
            transform: this.state.isVisible ? 'none' : this.state.transform,
            transformOrigin: this.state.config.transformOrigin,
            transitionDuration: this.state.duration,
            transitionTimingFunction: this.state.config.timingFunction,
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
  config: defaultConfig,
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
    bottomOffset: PropTypes.number,
    duration: PropTypes.string,
    flip: PropTypes.string,
    rotate: PropTypes.string,
    startingScale: PropTypes.number,
    startingOpacity: PropTypes.number,
    timingFunction: PropTypes.string,
    translate: PropTypes.string,
    transformOrigin: PropTypes.string,
  }),
};

export default TransitionOnScroll;
