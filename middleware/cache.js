export default function ({ app, route, store, isDev }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published'

  if (process.server) { 
    store.commit('setCacheVersion', app.$storyapi.cacheVersion)
  }
}