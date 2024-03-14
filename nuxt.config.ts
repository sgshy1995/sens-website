// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import {AxiosRequestConfig, AxiosResponse} from 'axios';

export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "赴康科技",
      meta: [
        { name: "description", content: "赴康科技" },
        { name: "keyword", content: "赴康科技 官网" },
        { name: "viewport", content: "width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: `/favicon.ico` },
        { rel: 'stylesheet', type: 'text/css', href: `${import.meta.env.VITE_CDN_URL}/css/swiper.min.css`},
        { rel: 'stylesheet', type: 'text/css', href: `${import.meta.env.VITE_CDN_URL}/css/animate.min.css`}
      ],
      script: [
        {
          type: 'text/javascript',
          src: `${import.meta.env.VITE_CDN_URL}/js/swiper.min.js`
        },
        {
          type: 'text/javascript',
          src: `${import.meta.env.VITE_CDN_URL}/js/lottie-player.min.js`
        },
        {
          type: 'text/javascript',
          src: `${import.meta.env.VITE_CDN_URL}/js/libpag.min.js`
        },
        {
          type: 'text/javascript',
          src: `//api.map.baidu.com/api?type=webgl&v=1.4&ak=${import.meta.env.VITE_BMAP_API_URL}`
        }
      ]
    }
  },
  router: {
    scrollBehavior() {
      return { top: 0 };
    }
  },
  modules: ['@element-plus/nuxt'],
  build: {
    transpile: [/vue-i18n/]
  },
  buildModules: ['@pinia/nuxt', '@nuxt/http'],
  http: {
    // 设置Axios实例的拦截器
    interceptors: {
      request: (config: AxiosRequestConfig) => {
        // 在请求前添加一些默认的请求头
        config.headers!.common['Authorization'] = 'Bearer token'
        return config
      },
      response: (response: AxiosResponse) => {
        // 在响应后对返回的数据进行处理
        return response.data
      }
    }
  },
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './i18n/*.ts')
        ],
        ssr: false
      })
    ],
    assetsInclude: ['**/*.pag', '**/*.wasm']
  },
  css: ['@/assets/css/base.ignore.scss', '@/assets/css/base.scss'],
  postcss: {
    plugins: {
      // 这个工具可以实现自动添加CSS3前缀
      "autoprefixer": {
        overrideBrowserslist: ["last 5 version", ">1%", "ie >=8"]
      },
      'postcss-pxtorem': {
        remUnit: 192,
        rootValue: 192,// 指定转换倍率，我现在设置这个表示1rem=37.5px;
        propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
        mediaQuery: true, // 是否允许使用媒体查询，false媒体查询的代码可用，true不可用
        exclude: 'ignore',
        replace: true, // 替换包含rem的规则，而不是添加回退
        minPixelValue: 1, // 需要转换的最小值，一般1px像素不转换，以上才转换
        unitPrecision: 6, // 转换成rem单位的小数点后的保留位数
        selectorBalckList: ["van"], // 匹配不被转换为rem的选择器
      },
    },
  },
  'cookie-universal-nuxt': {
    //  To make it work for SSR, remember to set `ssr: true` and `target: 'server'`
    ssr: true,
    target: 'server',
    modules: [
      // Simple usage
      'cookie-universal-nuxt',
      // With options
      ['cookie-universal-nuxt', { alias: 'cookiz' }],
    ]
  }
})
