const parse = require('parse-color');

const CONFIG_KEY = 'hyperTransparentVibrancy';
const DEFAULT_COLOR = 'rgba(250, 250, 250, 0.8)';
const DEFAULT_ALPHA = 0.8;
const DEFAULT_VIB = 'light';

function makeTransparent(color, alpha = DEFAULT_ALPHA) {
  if (!color) return DEFAULT_COLOR;
  const { rgb } = parse(color);
  console.log(rgb)
  if (!rgb) return color;
  return `rgba(${rgb.join(', ')}, ${alpha})`;
}

let config;

module.exports.onApp = app => {
  config = app.config.getConfig();
}

module.exports.decorateBrowserOptions = options => {
  const { vibrancy } = config[CONFIG_KEY] || {};
  return Object.assign({}, options, {
    vibrancy,
  });
}

module.exports.decorateConfig = conf => {
  config = conf;
  const { alpha } = conf[CONFIG_KEY] || {};
  return Object.assign({}, conf, {
    backgroundColor: makeTransparent(conf.backgroundColor, alpha),
    css: `
      ${conf.css || ''}
      .hyper_main {
        background-color: ${makeTransparent(conf.backgroundColor, alpha)};
      }
    `
  });
};
