<template>
    <ul class="projects">
      <li :key="arbeit.content._uid" v-for="arbeit in data.stories">
        <nuxt-link tag="a" :to="'/' + arbeit.full_slug">
        <p>{{arbeit.content.titel}}</p>
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

<style>

</style>
