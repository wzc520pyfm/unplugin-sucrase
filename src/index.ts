import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { transform } from 'sucrase'
import { createFilter } from '@rollup/pluginutils'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options = {} as any) => {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'unplugin-sucrase',
    resolveId(importee, importer) {
      if (importer && /^[./]/.test(importee)) {
        const resolved = path.resolve(importer ? path.dirname(importer) : process.cwd(), importee)
        // resolve in the same order that TypeScript resolves modules
        const resolvedFilenames = [
          `${resolved}.ts`,
          `${resolved}.tsx`,
          `${resolved}/index.ts`,
          `${resolved}/index.tsx`,
        ]
        if (resolved.endsWith('.js')) {
          resolvedFilenames.splice(
            2,
            0,
            `${resolved.slice(0, -3)}.ts`,
            `${resolved.slice(0, -3)}.tsx`,
          )
        }
        const resolvedFilename = resolvedFilenames.find(filename => fs.existsSync(filename))

        if (resolvedFilename)
          return resolvedFilename
      }
    },
    transform(code, id) {
      if (!filter(id))
        return null

      const result = transform(code, {
        transforms: options.transforms!,
        jsxPragma: options.jsxPragma,
        jsxFragmentPragma: options.jsxFragmentPragma,
        enableLegacyTypeScriptModuleInterop: options.enableLegacyTypeScriptModuleInterop,
        enableLegacyBabel5ModuleInterop: options.enableLegacyBabel5ModuleInterop,
        production: options.production,
        disableESTransforms: options.disableESTransforms,
        filePath: id,
        sourceMapOptions: {
          compiledFilename: id,
        },
      })
      return {
        code: result.code,
        map: result.sourceMap,
      }
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
