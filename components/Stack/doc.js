'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Stack) {
  return (0, _reactDesc.schema)(Stack, {
    description: 'Stacks components on top of the first child component.',
    usage: 'import { Stack } from \'grommet\';\n  <Stack/>',
    props: {
      anchor: [_reactDesc.PropTypes.oneOf(['center', 'left', 'right', 'top', 'bottom', 'top-left', 'bottom-left', 'top-right', 'bottom-right']), 'Where to anchor children from. If not specified, children fill the\n      first child\'s area.']
    }
  });
};