
// 返回带有语言配置的侧边栏。
// 这可能会创建重复的数据，但开销是可以忽略的
const getSidebars = () => {
  return {
    '/guide/': '123',
    '/component/': '22',
  }
}

// type Item = {
//   text: string
//   children?: Item[]
//   link?: string
// }

export const sidebars = getSidebars()
