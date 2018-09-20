<template>
  <section>
    <ul class="projects">
      <li :key="arbeit.content._uid" v-for="arbeit in data.stories">
        <nuxt-link tag="a" :to="'/' + arbeit.full_slug">
          <div class="overlay"></div>
            <img :src="arbeit.content.mainpic" alt="">
        <div class="details">
          <h4 class="projectMouseover">{{arbeit.content.mouseover}}</h4>
        </div>
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link tag="a" :to="'/arbeiten/liste'">
      <h4>Alle Arbeiten</h4>
    </nuxt-link>
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview";

export default {
  data() {
    return { total: 0, data: { stories: [] } };
  },
  asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";

    return context.app.$storyapi
      .get("cdn/stories", {
        version: version,
        starts_with: `arbeiten/`, // needs trailing / - will have a look if we can get rid of that as well.
        cv: context.store.state.cacheVersion
      })
      .then(res => {
        return res;
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      });
  }
};
</script>

<style lang="stylus" scoped>
ul.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.5em;
  grid-row-gap: 0.25em;
  margin-bottom: 4rem;
}

.projects > li {
  position: relative;
  overflow: hidden;

}

.overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.projects > li:hover .overlay {
  opacity: 1;
}

.details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.projects > li:hover .details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.details, .overlay {
  display: none;
}

.projectMouseover {
  color: white;
}

+lap() {
  .details, .overlay {
    display: inline;
  }

  ul.projects {
    grid-template-columns: repeat(5, 1fr);
    margin: 0 auto 4rem;
  }
}
</style>
