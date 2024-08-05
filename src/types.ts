import type { Options as SucraseOptions } from 'sucrase'

/**
 * A valid `picomatch` glob pattern, or array of patterns.
 */
export type FilterPattern = ReadonlyArray<string | RegExp> | string | RegExp | null

export interface Options extends Partial<SucraseOptions> {
  // define your plugin options here
  include?: FilterPattern
  exclude?: FilterPattern
}
