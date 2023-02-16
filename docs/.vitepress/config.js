export default {
  themeConfig: {
    siteTitle: "HIsheR",
    logo: "/public/star.png",
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/examples/button" },
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
      "/examples/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button按钮",
              link: "/examples/button",
            },
            {
              text: "Icon图标",
              link: "/examples/icon",
            },
          ],
        },
      ],
    },
  },
}
