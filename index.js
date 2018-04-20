const parse = require('parse-color');
const vibrancyManager = require('./VibrancyManager');

const CONFIG_KEY = 'hyperTransparentDynamic';
const DEFAULT_COLOR = 'rgba(0, 0, 0, 0.5)';
const DEFAULT_ALPHA = 0.5;

function makeTransparent(color, alpha = DEFAULT_ALPHA) {
  if (!color) return DEFAULT_COLOR;

  const { rgb } = parse(color);

  if (!rgb) return color;

  return `rgba(${rgb.join(', ')}, ${alpha})`;
}

module.exports.onApp = app => {
  vibrancyManager.registerApp(app);
}

module.exports.onWindow = browserWindow => {
  vibrancyManager.registerWindow(browserWindow);
}

module.exports.decorateConfig = config => {
  const { alpha } = config[CONFIG_KEY] || {};
  return Object.assign({}, config, {
    backgroundColor: makeTransparent(config.backgroundColor, alpha),
  });
};
