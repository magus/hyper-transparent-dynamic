const CONFIG_KEY = 'hyperTransparentVibrancy';

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
}

module.exports = new VibrancyManager();
