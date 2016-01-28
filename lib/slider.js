'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _innerSlider = require('./inner-slider');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var Slider = _react2['default'].createClass({
  displayName: 'Slider',

  getInitialState: function getInitialState() {
    return {
      breakpoint: null
    };
  },
  render: function render() {
    var _this = this;

    var settings;
    var newProps;
    if (this.state.breakpoint) {
      newProps = this.props.responsive.filter(function (resp) {
        return resp.breakpoint === _this.state.breakpoint;
      });
      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2['default'])({}, this.props, newProps[0].settings);
    } else {
      settings = (0, _objectAssign2['default'])({}, _defaultProps2['default'], this.props);
    }
    if (settings === 'unslick') {
      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
      return _react2['default'].createElement(
        'div',
        null,
        this.props.children
      );
    } else {
      return _react2['default'].createElement(
        _innerSlider.InnerSlider,
        settings,
        this.props.children
      );
    }
  }
});

module.exports = Slider;