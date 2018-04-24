'use strict';

exports.__esModule = true;

var _polished = require('polished');

var _styledComponents = require('styled-components');

var _utils = require('../utils');

var brandColor = '#FFCA58';
var accentColors = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58'];
var neutralColors = ['#EB6060', '#01C781', '#6095EB', '#FFB200'];
var statusColors = {
  critical: '#FF3333',
  error: '#FF3333',
  warning: '#F7E464',
  ok: '#7DD892',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var lightColors = ['#333333', '#444444', '#555555', '#666666', '#777777', '#999999'];
var darkColors = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];
var backgroundColor = '#111111';
var textColor = '#eeeeee';
var borderColor = 'rgba(255, 255, 255, 0.33)';
var focusColor = accentColors[0];
var activeColor = (0, _polished.rgba)('#666666', 0.5);

exports.default = (0, _utils.deepFreeze)({
  global: {
    colors: {
      active: activeColor,
      accent: accentColors,
      background: backgroundColor,
      black: '#000000',
      border: borderColor,
      brand: brandColor,
      dark: darkColors,
      darkBackground: {
        text: textColor
      },
      focus: focusColor,
      light: lightColors,
      lightBackground: {
        text: '#000000'
      },
      neutral: neutralColors,
      placeholder: '#AAAAAA',
      status: statusColors,
      text: textColor,
      white: '#FFFFFF'
    },
    focus: {
      border: {
        color: (0, _styledComponents.css)(['', ''], function (props) {
          return (0, _utils.colorForName)('focus', props.theme);
        }),
        width: '2px'
      }
    },
    hover: {
      backgroundColor: (0, _styledComponents.css)(['', ''], function (props) {
        return props.theme.global.colors.active;
      }),
      textColor: '#FFFFFF'
    },
    input: {
      border: {
        width: '1px',
        radius: '4px',
        color: (0, _styledComponents.css)(['', ''], function (props) {
          return props.theme.global.colors.border;
        })
      },
      weight: 700
    }
  },
  icon: {
    color: textColor
  },
  layer: {
    backgroundColor: backgroundColor,
    overlayBackgroundColor: 'rgba(48, 48, 48, 0.5)'
  }
});