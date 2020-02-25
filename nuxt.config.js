const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_PAGE_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const { createClient } = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const config = {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { loading: '~/components/Loading.vue' },
  loading: {
    color: '#00968894',
    height: '4px'
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }),
        config.devtool = 'inline-cheap-module-source-map'
      }
    }
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.scss',
    'swiper/dist/css/swiper.css',
    'animate.css'
  ],
  plugins: [
    { src: '~plugins/contentful' },
    { src: '~plugins/vue-awesome-swiper', ssr: false},
    { src: '~plugins/vueinview', ssr: false },
    { src: '~plugins/vue-lightbox-plugin', ssr: false}
  ],
  generate: {
    routes() {
      return cdaClient.getEntries({
        'content_type': ctfConfig.CTF_PAGE_TYPE_ID
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/portfolio/${entry.fields.path}`)
        ]
      })
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Noto+Serif+JP|Alata|Fredoka+One|Shadows+Into+Light']
    }
  },
  // 変数やmixinをグローバルで使用できるようにする
  styleResources: {
    scss: [
      '~/assets/css/foundation/_variables.scss',
    ]
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PAGE_TYPE_ID: ctfConfig.CTF_PAGE_TYPE_ID
  }
}
module.exports = config
