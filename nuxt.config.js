
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'v81YAaax-y_9X7Jwx7LM2i2X_SnNVikpLROmlf5gxpk' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/piano.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/youtube.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    },
    '@nuxtjs/robots'],
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],
  i18n: {
    baseUrl: 'http://edna-stern.com',
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'fr',
        iso: 'fr-FR'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./lang/en-US.json'),
        fr: require('./lang/fr-FR.json')
      }
    }
  },
  sitemap: {
    hostname: 'http://edna-stern.com'
  },
  robots: {
    Sitemap: 'http://edna-stern.com/sitemap.xml'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
