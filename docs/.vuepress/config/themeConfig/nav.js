// nav
module.exports = [
  {
    text: 'Python编程实践',
    link: '/pycore/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
        { text: ' 《 Python语法规范 》 ', link: '/pycore/basic/' },
        { text: ' 《 Python每日一库 》 ', link: '/pycore/pylibs/' },
        { text: ' 《 PyWeb系列 》', link: '/pycore/pyweb/' },
        { text: ' 《 Python工程系列 》', link: '/pycore/pyproject/' },
      ],
  },
  {
    text: ' 容器技术',
    link: '/container/',
  },
  {
    text: ' 分布式技术',
    link: '/distributed/',
  },
  {
    text: ' 工具箱',
    link: '/tools/',
  },
  {
    text: ' ARTS',
    link: '/arts/',
  },
  {
    text: '更多...',
    link: '/more/',
    items: [
      { text: '关于我', link: '/myself/' },
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
