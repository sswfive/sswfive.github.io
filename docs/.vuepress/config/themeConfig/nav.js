// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '编程工匠',
    link: '/corehub/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
        { text: '【Python】', link: '/pages/409686/' },
        { text: '【数据结构与算法】', link: '/pages/ef2635/' }
      ],
  },
  {
    text: '技无止尽',
    link: '/thub/',
    items: [
      { text: '机器学习', link: '/ml/' },
      { text: 'Docker', link: '/pages/f36fc5' },
      { text: 'Kubernetes', link: '/k8s/' },
      { text: 'BigData', link: '/pages/52219d/' },
    ],
  },
  {
    text: '悟道习之',
    link: '/methods/',
    items: [
      { text: '微服务学习', link: '/miniservice/' },
      { text: 'DDD学习', link: '/structure/' },
    ],
  },
  {
    text: '迎刃而解',
    link: '/bugrecord/',
    items: [
      { text: 'Python栈', link: '/pybug/' },
      { text: 'Linux栈', link: '/linuxbug/' },
    ],
  },
  {
    text: '资源甄选',
    link: '/collection/',
    items: [
      { text: '技术选集', link: '/pages/60ad0d/' },
      { text: '工具选集', link: '/tcollection/' },
      { text: '一言选集', link: '/pages/902440/' },
    ],
  },
  // {
  //   text: '生活记忆',
  //   link: '/lifetime/',
  //   items: [
  //     { text: '阅读', link: '/read/' },
  //     { text: '随想', link: '/yiyan/' },
  //     { text: '观影', link: '/pages/37189e/' },
  //     { text: '音乐', link: '/yiyan/' },
  //     { text: '旅行', link: '/life/' },
  //   ],
  // },
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
