module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'de',
    },
    title: 'HELLA STUDIO',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'HELLA STUDIO',
        name: 'HELLA STUDIO',
        content: 'HELLA STUDIO official site'
      },
      {
        name: 'Description',
        content: 'HELLA STUDIO official site'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  manifest: {
    name: 'Hellastudio',
    short_name: 'Hellastudio',
    start_url: '/',
    theme_color: '#ffffff',
    background_color: '#505050'
  
},	  
  /*
   ** Customize the progress bar color
   */
  loading: false,

  
  /*
   ** Build configuration
   */
  
  build: {
    /*
     ** Run ESLint on save
     */
    styleResources: {
      stylus: './assets/styles/main.styl'
    },
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: [
    ['storyblok-nuxt', {accessToken: 'hkfmsXBsZZcwty7Vk4C5kQtt', cacheProvider: 'memory'}], 
    ['@nuxtjs/markdownit']
  ],
  markdownit: {
    injected: true,
    breaks: true,
    html: true
  },
  
  plugins: [
    '~/plugins/components'
  ]
};

