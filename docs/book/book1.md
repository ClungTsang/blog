---
title: 基于若依系统框架的开发遇到的问题
lang: en-US
---

文章目的
===
>记录若依系统开发的到部署的过程细节
::: tip 
本文档是基于若依配套的[前端项目](https://github.com/yangzongzhuan/RuoYi-Vue3)  对应的[后端项目](https://gitee.com/y_project/RuoYi-Vue)
:::
# 问题1：记录Vue3中引入Tailwind css和antDesign Vue，使用message出现的样式问题

>框架中同时引入了Tailwind CSS和ElementPlus第三方组件。会出现样式污染的问题
>是被引入的Tailwind CSS 的样式影响了

``` js
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 解决方法：
方式1：禁用Tailwind CSS的 Preflight
``` js
// tailwind.config.js
module.exports = {
  ...
 
  corePlugins: {
    preflight: false,
  },
}
```

方式2：可以在引入的Tailwind CSS样式中，覆盖掉影响Element Plus 样式的Tailwind CSS的一些基本样式。
``` js
@tailwind base;
@tailwind components;
@tailwind utilities;
 
// 覆盖影响antd的样式
svg {
  vertical-align: initial;
}
```
