/* eslint-disable @typescript-eslint/no-var-requires */
import {promises as fs} from 'fs'
import imagemin from 'imagemin'

module.exports = function plugin(
  _: any,
  {include, plugins}: SnowpackPluginImageminOptions = {
    include: ['*.jpg'],
    plugins: [],
  }
) {
  return {
    name: 'snowpack-plugin-imagemin',
    async optimize({buildDirectory}: {buildDirectory: string}) {
      const files = await imagemin(
        include.map((i) => `${buildDirectory}/${i}`),
        {
          destination: 'build/images',
          plugins,
        }
      )

      const result = []

      for (const file of files) {
        result.push(fs.writeFile(file.sourcePath, file.data))

        if (result.length === 8) {
          await Promise.all(result)
          result.length = 0
        }
      }

      await Promise.all(result)
    },
  }
}

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
