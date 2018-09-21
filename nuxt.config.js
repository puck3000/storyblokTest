const axios = require('axios') 

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
    {
      src: '~/plugins/components'
    },
    {
      src: "~plugins/vue-scrollto.js"
    } 
  ],
  router: {
    middleware: 'cache'
  },
  generate: {
    routes: function (callback) {
      const token = `hkfmsXBsZZcwty7Vk4C5kQtt`
      const per_page = 1000
      const version = 'published'
      let cache_version = 0
      
      let page = 1

      // other routes that are not in Storyblok with their slug.
      let routes = []

      // Load space and receive latest cache version key to improve performance
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {

        // timestamp of latest publish
        cache_version = space_res.data.space.version
      
        // Call first Page of the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&per_page=${per_page}&page=${page}&cv=${cache_version}`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (res.data.links[key].slug != 'home') {
              routes.push('/' + res.data.links[key].slug)
            }
          })

          // Check if there are more pages available otherwise execute callback with current routes.
          const total = res.headers.total
          const maxPage = Math.ceil(total / per_page)
          if(maxPage <= 1) {
            callback(null, routes)
          }

          // Since we know the total we now can pregenerate all requests we need to get all Links
          let contentRequests = [] 
          for (let page = 2; page <= maxPage; page++) {
            contentRequests.push(axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&per_page=${per_page}&page=${page}`))
          }

          // Axios allows us to exectue all requests using axios.spread we will than generate our routes and execute the callback
          axios.all(contentRequests).then(axios.spread((...responses) => {
            responses.forEach((response) => {
              Object.keys(response.data.links).forEach((key) => {
                if (response.data.links[key].slug != 'home') {
                  routes.push('/' + response.data.links[key].slug)
                }
              })
            })
          
            callback(null, routes)
          })).catch(callback)
        })
      }) 
    }
  }
};

