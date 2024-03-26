// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '提供专业的人工智能、数字孪生、元宇宙、三维可视化应用解决方案',

      charset: 'utf-8',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, minimum-scale=1.0,maximum-scale=5.0, viewport-fit=cover',
        },
        {
          name: 'description',
          content:
            '致力于为多行业企业、文化旅游（展馆）产业、大中专院校等 多类型客户，打造结合自身行业特点、需求和体验的一站式数 字孪生方案与服',
        },
        {
          name: 'keywords',
          content:
            '提供专业的人工智能、数字孪生、元宇宙、三维可视化应用解决方案, 虚拟现实（XR）,数字孪生 ,工农业元宇宙 ,AI+数字人 ,软件开发',
        },
        {
          name: 'og:title',
          content: '提供专业的人工智能、数字孪生、元宇宙、三维可视化应用解决方案',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/fav.svg' }],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'fade', mode: 'out-in' },
  },
  srcDir: 'src/',
  typescript: {
    typeCheck: false,
  },
  modules: ['nuxt-svgo'],
  svgo: {
    defaultImport: 'component',
    global: false,
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: ['data-name', 'class', 'fill', 'svg:width', 'svg:height'],
            preserveCurrentColor: true,
          },
        },
        {
          name: 'removeXMLNS',
          params: true,
        },
        {
          name: 'convertStyleToAttrs',
          params: true,
        },
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [{ fill: 'currentColor' }],
          },
        },
      ],
    },
  },
});
