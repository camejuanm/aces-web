import axios from 'axios'
const AxiosInstance = {
  baseURL: process.env.BASE_URL,
  withCredentials: false,
  retry: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ACES UMN',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  target: 'static',
  ssr: false,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/helpers.js' },
    { src: './plugins/vue-slick-carousel.js' },
    { src: './plugins/v-waypoint.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    'nuxt-animejs'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-lazy-load'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true,
    AxiosInstance
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  proxy: {
    '/api': {
      target: process.env.API_URL,
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
      onProxyReq(request) {
        request.setHeader('origin', process.env.API_URL)
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizecss: true,
    splitChunks: {
      pages: true,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: false
    },
    optimization: {
      splitChunks: {
        minSize: 20000,
        maxSize: 500000
      }
    },
  },

  styleResources: {
    scss: ['./assets/scss/partials/_variables.scss']
  },


  dotenv: {}
}
