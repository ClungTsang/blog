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
                },
                {
                  text: "搭建基于Nuxt3的企业官网",
                  link: "/book/book2",
                },
                {
                  text: "Nuxt简介",
                  link: "/book/book3",
                },
                {
                  text: "服务器nginx配置",
                  link: "/book/book4",
                },
                {
                  text: "ref、reactive的使用",
                  link: "/book/book5",
                },
                {
                  text: "vue3拖动元素到图片任意位置",
                  link: "/book/book6",
                },
                {
                  text: "人手一个chatGPT",
                  link: "/book/book7",
                }
              ]
            }
          ],
        },
      ],
    },
  },
}
