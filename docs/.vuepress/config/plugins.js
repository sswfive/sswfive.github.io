// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: 'https://sswfive.github.io',
  count: 5000,
};

const autometa_options = {
  site: {
    name: 'sswfive',
  },
  canonical_base: 'https://sswfive.github.io',
};

// 插件配置
module.exports = [
  // 百度自动推送
  'vuepress-plugin-baidu-autopush',
  // 鼠标点击后散开小星星
  'cursor-effects',
  // 全文搜索插件
  'fulltext-search',
  // 阅读顶部进度条
  'reading-progress',

  // 自定义插件
  [
    {
      name: 'custom-plugins',
        globalUIComponents: ["PageInfo","BlockToggle"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

  // rss 配置
  [ 'feed', feed_options ],

  // [
  //   'vuepress-plugin-rss',
  //       {
  //         base_url: '/', // required
  //         copyright: '二丫讲梵', // optional
  //         // filter some post
  //         filter: (frontmatter) => { return [true] },
  //         // How much articles
  //         count: 20,
  //   }
  // ],

  // 首页公告提示--暂时去掉了
  // ["@vuepress-yard/vuepress-plugin-window",{
  //   title: "欢迎",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
  //   contentInfo: {
  //     title: "",
  //     needImg: false, // 不展示图片，展示如下的content
  //     imgUrl: "https://reinness.com/avatar.png",
  //     content: "世事细探看，我辈赛仙神。形胜痴迷中，自成画中人。",
  //     contentStyle: ""
  //   },
  //   windowStyle: {
  //     right: '20px',
  //     top: '72px',
  //     width: '135px'
  //   },
  //   bottomInfo: {
  //     btnText: '当赏',
  //     linkTo: 'https://wiki.eryajf.net/reward/'
  //   },
  //   closeOnce: true
  // }],

  // meta优化 https://github.com/webmasterish/vuepress-plugin-autometa
  ['autometa',autometa_options],

  // 代码块复制按钮
  [
    'one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功 🎉', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],

  // 代码块儿演示
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],

  // 放大图片
  [
    'vuepress-plugin-zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],

  // 百度统计
  [
    'vuepress-plugin-baidu-tongji',
    {
      hm: 'f8fd5c4e21ca384b4785396a87bcc468',
    },
  ],

  // 提供mermaid图表支持
  'vuepress-plugin-mermaidjs',
  // [
  //   'sitemap', {
  //     hostname: 'https://sswtk.github.io',
  //     exclude: ["/404.html"],
  //   },
  // ],

  // // 站点地图
  // 'robots', {
  //   host: "https://sswtk.github.io",
  //   disallowAll: false,
  //   allowAll: true,
  //   sitemap: "https://sswtk.github.io/sitemap.xml",
  // },

  // gitalk评论
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk',
      options: {
        clientID: '6379e12325ba2211c9f1',
        clientSecret: 'ef1a74332c1ca9b132574350c979abb35cf6dd37',
        repo: 'sswfive.github.io', // GitHub 仓库
        owner: 'sswfive', // GitHub仓库所有者
        admin: ['sswfive'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],

  // "上次更新"时间格式
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      // transformer: (timestamp, lang) => {
      //     return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
