# hyper-transparent-vibrancy

Dynamically set the backgroundColor with transparency and apply vibrancy.
Compatible with **any** theme, pulls in existing value and adds alpha.

![hyper-transparent-vibrancy-preview](preview.png)

**Note**: _See example below, load `hyper-transparent-vibrancy` *after* your theme plugin._
```
module.exports = {
  ...

  config: {
    ...

    hyperTransparentVibrancy: {
      alpha: 0.5, // default 50%
      vibrancy: 'dark'
    },

    ...
  },

  plugins: [
    'hyper-snazzy',
    'hyper-transparent-vibrancy',
  ],

  ...
}
```
