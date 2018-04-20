const CONFIG_KEY = 'hyperTransparentDynamic';
const DEFAULT_COLOR = 'rgba(0, 0, 0, 0.5)';
const DEFAULT_ALPHA = 0.8;
const DEFAULT_VIBRANCY = 'dark';

class TransparentManager {
  constructor() {
    this.window = null;
    this.config = null;
  }

  registerApp(app) {
    this.config = app.config.getConfig();
    if (this.window) {
      const { vibrancy = DEFAULT_VIBRANCY } = this.config[CONFIG_KEY] || {};
      this.window.setVibrancy(vibrancy);
    }
  }

  registerWindow(window) {
    if (this.config) {
      const { vibrancy = DEFAULT_VIBRANCY } = this.config[CONFIG_KEY] || {};
      window.setVibrancy(vibrancy);
    } else {
      this.window = window;
    }
  }
}

module.exports = new TransparentManager();
