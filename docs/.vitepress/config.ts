import type { UserConfig } from 'vitepress'
import { sidebars } from "./config/sidebars";

export const config: UserConfig = {
  title: 'Vitepress Test',
  description: 'a Vue 3 based component library for designers and developers',
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Learn Vitepress",
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/index' },
      { text: 'Component', link: '/component/index' },
    ],
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/MissFlower/ai-vue-next'
    }, ],
    sidebars,
    // sidebar: {
    //   '/guide/': [
    //     {
    //       text: 'Guide',
    //       items: [
    //         // This shows `/guide/index.md` page.
    //         { text: 'Index', link: '/guide/' }, // /guide/index.md
    //         { text: 'One', link: '/guide/one' }, // /guide/one.md
    //         { text: 'Two', link: '/guide/two' } // /guide/two.md
    //       ]
    //     }
    //   ],
    //   '/component/': [
    //     {
    //       text: 'Component',
    //       items: [
    //         { text: 'Index', link: '/component/' },
    //         { text: 'Button', link: '/component/button' }, 
    //       ]
    //     }
    //   ]
    // },
    algolia: {
      appId: 'RVMP1DL10N',
      apiKey: 'b6698444fb6414c2328728cdbc9eb681',
      indexName: 'just-vim-it',
      debug: false
    },
    // agolia: {
    //   appId: 'SQ585TTU6V',
    //   apiKey: '7aa7dc946c70bbf3f748b6e8eda2f687',
    //   indexName: 'just-vim-it',
    //   debug: false
    // },
    laslltUpdatedText: "最后更新",
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Nauxscript'
    }
  }
}

export default config