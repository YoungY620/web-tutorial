module.exports = {
  title: 'WEB Tutorial',
  description: 'web 零基础入门',
  dest: './dist',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: [
      {
        title: '前言',
        collapsable: false,
        children: [
          { title: '导语', path: '/intro/'},
          { title: '发展历史', path:'/intro/history'},
        ]
      },
    ],
    smoothScroll: true,
    repo: 'unbyte/web-tutorial',
    editLinks: true,
    editLinkText: '完善本文档',
  }
}