const parse = require('parse-color');

const CONFIG_KEY = 'hyperTransparentVibrancy';

function makeTransparent(color, alpha = DEFAULT_ALPHA) {
  if (!color) return DEFAULT_COLOR;
  const { rgb } = parse(color);
  if (!rgb) return color;
  return `rgba(${rgb.join(', ')}, ${alpha})`;
}

class VibrancyManager {
  constructor() {
    this.window = null;
    this.config = null;
  }

  registerApp(app) {
    this.config = app.config.getConfig();
    if (this.window) {
      const { vibrancy } = this.config[CONFIG_KEY] || {};
      if (!vibrancy) return;
      this.window.setVibrancy(vibrancy);
    }
  }

  registerWindow(window) {
    if (this.config) {
      const { vibrancy } = this.config[CONFIG_KEY] || {};
      if (!vibrancy) return;
      window.setVibrancy(vibrancy);
    } else {
      this.window = window;
    }
  }

  onRenderWindow(window) {
    if (this.config) {
      const { alpha } = this.config[CONFIG_KEY] || {};
      if (!alpha) return;
      window.setBackgroundColor(makeTransparent(this.config.backgroundColor, alpha));
    } else {
      this.window = window;
    }
  }
}

module.exports = new VibrancyManager();
