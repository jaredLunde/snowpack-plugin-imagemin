<hr/>

# snowpack-plugin-imagemin

> Use [imagemin](https://github.com/imagemin/imagemin) to optimize your images in [Snowpack](https://snowpack.dev). This plugin will only compress
> images in `production` after your build finishes.

```sh
npm i snowpack-plugin-imagemin
```

<p>
  <!--
  <a aria-label="Code coverage report" href="https://codecov.io/gh/jaredLunde/snowpack-plugin-imagemin">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/jaredLunde/snowpack-plugin-imagemin?style=for-the-badge&labelColor=24292e">
  </a>
  -->
  <a aria-label="Build status" href="https://travis-ci.com/jaredLunde/snowpack-plugin-imagemin">
    <img alt="Build status" src="https://img.shields.io/travis/com/jaredLunde/snowpack-plugin-imagemin?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/snowpack-plugin-imagemin">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/snowpack-plugin-imagemin?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/snowpack-plugin-imagemin?style=for-the-badge&labelColor=24292e">
  </a>
</p>

---

## Quick start

```js
// snowpack.config.js
module.exports = {
  plugins: [
    [
      'snowpack-plugin-imagemin',
      {
        /* see "Plugin Options" below */
        include: ['**/*.jpg', '**/*.png'],
        plugins: [
          require('imagemin-mozjpeg')({quality: 90, progressive: true}),
          require('imagemin-optipng')({optimizationLevel: 7}),
        ],
      },
    ],
  ],
}
```

#### Plugin Options

```typescript
export interface SnowpackPluginImageminOptions {
  /**
   * Includes only the specified globs. Globs should be relative
   * to the build directory, which is `build/` by default in Snowpack.
   * *
   * ! This option is required !
   */
  include: Parameters<typeof imagemin>[0]
  /**
   * Plugins to use.
   * @see https://www.npmjs.com/search?q=keywords:imageminplugin
   *
   * ! This option is required !
   */
  plugins: imagemin.Options['plugins']
}
```

## LICENSE

MIT
