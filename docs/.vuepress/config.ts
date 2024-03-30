import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
const { path } = require('@vuepress/utils');

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '归零@you',
  description: '带着疑问抬头望天,繁星点点. 就像我曾追逐的梦,忽隐忽现.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    logo: '../images/FE.jpeg',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '我的博客',
        link: '/pages',
      },
      {
        text: '个人简历',
        link: '/images/resume-latest.html',
      },
      // {
      //   text: '导航中心',
      //   link: 'https://cookies-lgl.github.io/',
      // },
      {
        text: '摸鱼棋盘',
        link: 'http://html5.huceo.com/wzq/',
      },
      {
        text: '在线工具',
        children: [
          {
            text: 'Code Pen',
            link: 'https://codepen.io/pen/',
          },
          {
            text: '格式图片获取',
            link: 'https://placeholder.com/',
          },
        ],
      },
      {
        text: '实用收藏',
        children: [
          {
            text: '站长工具',
            link: 'https://tool.chinaz.com/',
          },
          {
            text: '牛客练习',
            link: 'https://www.nowcoder.com/intelligentTest',
          },
          {
            text: '掘金社区',
            link: 'https://juejin.cn/frontend',
          },
          {
            text: '阮一峰日志',
            link: 'https://www.ruanyifeng.com/blog/',
          },
        ],
      },
      {
        text: '官方文档',
        children: [
          {
            text: 'Vue3中文文档',
            link: 'https://vue3js.cn/docs/zh/',
          },
          {
            text: 'Vuex4中文文档',
            link: 'https://next.vuex.vuejs.org/zh/index.html',
          },
          {
            text: 'Vue Router4中文文档',
            link: 'https://next.router.vuejs.org/zh/guide/index.html',
          },
          {
            text: 'Webpack中文文档',
            link: 'https://www.webpackjs.com/concepts/',
          },
          {
            text: 'Uni-app文档',
            link: 'https://uniapp.dcloud.io/',
          },
          {
            text: 'React文档',
            link: 'https://zh-hans.reactjs.org/docs/getting-started.html',
          },
          {
            text: 'Kafka官方文档',
            link: 'https://kafka.apachecn.org/intro.html',
          },
          {
            text: 'Vue-ssr文档',
            link: 'https://cn.vitejs.dev/guide/',
          },
          {
            text: 'Vite文档',
            link: 'https://cn.vitejs.dev/guide/',
          },
          {
            text: 'Rollup文档',
            link: 'https://www.rollupjs.com/',
          },
        ],
      },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
  ],
  // theme: path.resolve(__dirname, './theme'),
});
