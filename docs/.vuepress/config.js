module.exports = {
  title: 'WEB Tutorial',
  description: 'web 零基础入门',
  dest: './dist',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/unbyte/web-tutorial' },
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
    ]
  }
}