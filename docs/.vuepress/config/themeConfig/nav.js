// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '博客专栏',
    link: '/blog/',
    // items: [
    //   { text: '文章列表', link: ' /pages/23088e/' }
    // ]
  },
  {
    text: '学习笔记',
    link: '/corehub/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
        { text: ' 《Python编程》 ', link: '/corehub/python/' },
        { text: ' 《Go编程》', link: '/corehub/go/' },
        { text: ' 《软件工程》 ', link: '/corehub/project/' },
        { text: ' 《数据结构与算法》', link: '/corehub/datastruct/' },
        { text: ' 《设计模式》', link: '/corehub/design/' },
      ],
  },
  {
    text: '技术实践',
    link: '/thub/',
    items: [
      { text: ' 容器技术 ', link: '/pages/486e3f/' },
      { text: ' 计算存储 ', link: '/thub/stroage/' },
      { text: ' 机器学习 ', link: '/thub/ml/' },
      { text: ' 中间件 ', link: '/thub/middleware/' },
      { text: 'Linux相关', link: '/thub/linux/' },
      { text: 'Shell编程', link: '/thub/shell/' },
      { text: 'Vim笔记', link: '/thub/vim/' },
      { text: 'Git笔记', link: '/thub/git/' },
    ],
  },
  {
    text: '技术之外',
    link: '/outtech/',
    items: [
      { text: '关于学习', link: '/pages/974c9d/' },
      { text: '关于管理', link: '/outtech/manage/' },
    ],
  },
  {
    text: '迎刃而解',
    link: '/bugrecord/',
    items: [
      { text: '运维手记', link: '/pages/d60525/' },
      { text: 'Bug-Python栈', link: '/bugrecord/pybug/' },
      { text: 'Go-Python栈', link: '/bugrecord/gobug/' },
      { text: 'Bug-Linux栈', link: '/bugrecord/linuxbug/' },
    ],
  },
  {
    text: '甄选收藏',
    link: '/collection/',
    items: [
      { text: '优质博客', link: '/collection/blog/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
