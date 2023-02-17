export default {
  themeConfig: {
    siteTitle: "HIsheR",
    logo: "/star.png",
    nav: [
      { text: "文章", link: "/book/index" },
    ],
    socialLinks: [{ icon: "github", link: "https://clungtsang.github.io/" }],
    sidebar: {
      "/book/": [
        {
          text: "文章列表",
          items: [
            {
              text: "目录",
              link: "/book/index",
              items: [
                {
                  text: "Tailwind和框架内组件样式产生样式污染",
                  link: "/book/book1",
                }
              ]
            }
          ],
        },
      ],
    },
  },
}
