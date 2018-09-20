<template>
    <ul class="projects" id="arbeitenListe">
      <li :key="arbeit.content._uid" v-for="arbeit in data.stories">
        <nuxt-link tag="a" :to="'/' + arbeit.full_slug">
        {{arbeit.content.titel}}
        </nuxt-link>
      </li>
    </ul>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  data () {
    return { total: 0, data: { stories: [] } }
  },
  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: `arbeiten/`, // needs trailing / - will have a look if we can get rid of that as well.
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style lang="stylus" scoped>
#arbeitenListe 
  li  
    margin-bottom: 1em;
    text-transform: uppercase
  +tab()
    text-align: center;
    li  
      font-size: 2em;

</style>

