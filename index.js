const Color = require('color');

const vibrancyManager = require('./VibrancyManager');

const CONFIG_KEY = 'hyperTransparentVibrancy';
const DEFAULT_COLOR = 'rgba(0, 0, 0, 0.5)';
const DEFAULT_ALPHA = 0.5;

function makeTransparent(color, alpha = DEFAULT_ALPHA) {
  if (!color) return DEFAULT_COLOR;
  const tColor = Color(color).alpha(alpha);
  if (alpha === 1) return tColor.hex();
  return '#' + tColor.hex().substr(1) + Math.floor(tColor.alpha() * 255).toString(16);
}

module.exports.onApp = app => {
  vibrancyManager.registerApp(app);
}

module.exports.onWindow = browserWindow => {
  vibrancyManager.registerWindow(browserWindow);
}

module.exports.decorateConfig = config => {
  const { alpha, vibrancy } = config[CONFIG_KEY] || {};
  return Object.assign({}, config, {
    backgroundColor: vibrancy ? config.backgroundColor : makeTransparent(config.backgroundColor, alpha),
  });
};
