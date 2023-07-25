// nav
module.exports = [
  {
    text: '编程笔记',
    link: '/corehub/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
        { text: ' 《 Python编程 》 ', link: '/corehub/python/' },
        { text: ' 《 Go编程 》', link: '/corehub/go/' },
        { text: ' 《 数据结构与算法 》', link: '/corehub/algo/' },
        { text: ' 《 设计模式 》', link: '/corehub/design/' },
      ],
  },
  {
    text: '技术专题',
    link: '/tfocus/',
    items: [
      { text: ' WEB开发(软件工程）', link: '/tfocus/project/'},
      { text: ' 机器学习(AI应用) ', link: '/tfocus/ml/' },
      { text: ' 容器技术(云原生) ', link: '/tfocus/container/' },
      { text: ' 存储与计算(大数据) ', link: '/tfocus/bigdata/' },
    ],
  },
  {
    text: '技术视界',
    link: '/thub/',
  },
  {
    text: ' 技术管理',
    link: '/techm/'
  },
  {
    text: ' 技术周记',
    link: '/weeklog/'
  },

  {
    text: '迎刃而解',
    link: '/bugrecord/',
    items: [
      // { text: '运维手记', link: '/pages/d60525/' },
      // { text: 'Bug-Python栈', link: '/bugrecord/pybug/' },
      // { text: 'Go-Python栈', link: '/bugrecord/gobug/' },
      // { text: 'Bug-Linux栈', link: '/bugrecord/linuxbug/' },
    ],
  },
  {
    text: '更多...',
    link: '/more/',
    items: [
      { text: '关于我', link: '/myself/' },
      { text: '甄选', link: '/collections/' },
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
