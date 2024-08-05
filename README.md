# unplugin-sucrase

[![NPM version](https://img.shields.io/npm/v/unplugin-sucrase?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-sucrase)

🍣 A universal bundler plugin which compiles TypeScript, Flow, JSX, etc with Sucrase.

## Install

```bash
npm i unplugin-sucrase
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginSucrase from 'unplugin-sucrase/vite'

export default defineConfig({
  plugins: [
    UnpluginSucrase({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginSucrase from 'unplugin-sucrase/rollup'

export default {
  plugins: [
    UnpluginSucrase({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-sucrase/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      'unplugin-sucrase/nuxt',
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-sucrase/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginSucrase from 'unplugin-sucrase/esbuild'

build({
  plugins: [UnpluginSucrase()],
})
```

<br></details>

## Usage

### Options

For all options please refer to [docs](https://github.com/rollup/plugins/tree/master/packages/sucrase#options).

This plugin accepts all [@rollup/plugin-sucrase](https://github.com/rollup/plugins/tree/master/packages/sucrase#options) options.
