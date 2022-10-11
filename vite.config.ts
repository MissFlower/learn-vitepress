import path from 'path'
// import Inspect from 'vite-plugin-inspect'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
// import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'
// import mkcert from 'vite-plugin-mkcert'
// import glob from 'fast-glob'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'
// import {
//   docPackage,
//   epPackage,
//   getPackageDependencies,
//   projRoot,
// } from '@element-plus/build-utils'
import { MarkdownTransform } from './docs/.vitepress/plugins/markdown-transform'
console.log(MarkdownTransform);


import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
  },
]
// if (process.env.DOC_ENV !== 'production') {
//   alias.push(
//     {
//       find: /^element-plus(\/(es|lib))?$/,
//       replacement: path.resolve(projRoot, 'packages/element-plus/index.ts'),
//     },
//     {
//       find: /^element-plus\/(es|lib)\/(.*)$/,
//       replacement: `${path.resolve(projRoot, 'packages')}/$2`,
//     }
//   )
// }

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // const { dependencies: epDeps } = getPackageDependencies(epPackage)
  // const { dependencies: docsDeps } = getPackageDependencies(docPackage)

  // const optimizeDeps = [...new Set([...epDeps, ...docsDeps])].filter(
  //   (dep) =>
  //     !dep.startsWith('@types/') &&
  //     !['@element-plus/metadata', 'element-plus'].includes(dep)
  // )

  // optimizeDeps.push(
  //   ...(await glob(['dayjs/plugin/*.js'], {
  //     cwd: path.resolve(projRoot, 'node_modules'),
  //     onlyFiles: true,
  //   }))
  // )

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      // fs: {
      //   allow: [projRoot],
      // },
    },
    resolve: {
      alias,
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      // vueJsx(),
      // DefineOptions(),
      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        // global imports to register
        dirs: ['.vitepress/vitepress/**'],
        imports: ['vue'],
        vueTemplate: true,
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          // IconsResolver(),
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-icons
      // Icons({
      //   autoInstall: true,
      // }),
      UnoCSS(),
      MarkdownTransform(),
      // Inspect(),
      // mkcert(),
    ],
    optimizeDeps: {
      // include: optimizeDeps,
    },
  }
})
