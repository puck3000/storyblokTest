<template>
  <section class="util__container">
    <div :key="arbeit.content._uid" v-for="arbeit in data.stories" >
      <h2>
        <nuxt-link :to="'/' + arbeit.full_slug">
          {{ arbeit.content.titel }}
        </nuxt-link>
      </h2>

    </div>
  </section>
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
