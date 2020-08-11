import imagemin from 'imagemin'
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
