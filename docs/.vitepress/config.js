export default {
  themeConfig: {
    siteTitle: "HIsheR",
    logo: "/public/star.png",
    // head: [
    //   ['link', { rel: 'icon', href: '/public/star.png' }]
    // ],
    nav: [
      { text: "仓库", link: "/guild/installation" },
      { text: "文章", link: "/book/book1" },
    ],
    socialLinks: [{ icon: "github", link: "https://clungtsang.github.io/" }],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
      ],
      "/book/": [
        {
          text: "文章列表",
          items: [
            {
              text: "若依管理系统的开发与细节",
              link: "/book/book1",
            }
          ],
        },
      ],
    },
  },
}
