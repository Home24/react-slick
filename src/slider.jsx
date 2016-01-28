'use strict';

import React from 'react';
import {InnerSlider} from './inner-slider';
import assign from 'object-assign';
import defaultProps from './default-props';

var Slider = React.createClass({
  getInitialState: function () {
    return {
      breakpoint: null
    };
  },
  render: function () {
    var settings;
    var newProps;
    if (this.state.breakpoint) {
      newProps = this.props.responsive.filter(resp => resp.breakpoint === this.state.breakpoint);
      settings = newProps[0].settings === 'unslick' ? 'unslick' : assign({}, this.props, newProps[0].settings);
    } else {
      settings = assign({}, defaultProps, this.props);
    }
    if (settings === 'unslick') {
      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
      return (
        <div>{this.props.children}</div>
      );
    } else {
      return (
        <InnerSlider {...settings}>
          {this.props.children}
        </InnerSlider>
      );
    }
  }
});

module.exports = Slider;
