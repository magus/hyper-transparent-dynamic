const parse = require('parse-color');

const DEFAULT_COLOR = 'rgba(0, 0, 0, 0.5)';

function makeTransparent(color) {
  if (!color) return DEFAULT_COLOR;

  const { rgb } = parse(color);

  if (!rgb) return color;

  return `rgba(${rgb.join(', ')}, 0.5)`;
}

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

module.exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor: makeTransparent(config.backgroundColor),
  });
};
