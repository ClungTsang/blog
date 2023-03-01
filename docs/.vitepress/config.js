export default {
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present HIsheR'
    },
    siteTitle: "HIsheR",
    logo: "http://hisher.site/pic/star.webp",
    nav: [
      { text: "技术文章", link: "/book/index" },
      { text: "开发文档", link: "/tech/index" },
      { text: "一般日记", link: "/journal/index" },
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
                }
              ]
            }
          ],
        },
      ],
      "/tech/": [
        {
          text: "技术文档",
          link: "/tech/index",
          items: [
            {
              text: "chatGPT",
              link: "/tech/tech_chatGPT",
            }
          ]
        }
      ],
      "/journal/": [
        {
          text: "开发日记",
          link: "/journal/index",
          items: [
            {
              text: "3月日记",
              link: "/journal/march",
            }
          ]
        }
      ]
    },
  },
}
