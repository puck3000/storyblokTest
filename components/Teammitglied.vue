<template>
<figure>    
    <picture>
      <source media="(max-width: 768px)" :srcset="resize(teammitglied.portrait, '768x0')">
      <source media="(max-width: 1440px)" :srcset="resize(teammitglied.portrait, '500x0')">
      <source media="(min-width: 1441px)" :srcset="resize(teammitglied.portrait, '700x0')">
      <img :src="teammitglied.portrait" :alt="blok.titel">
    </picture>
    <figcaption class="figcaption" v-html="$md.render(blok.about)">
    </figcaption>
</figure>
</template>

<script>
import { isEditMode, resize } from '@/plugins/helper'
export default {
  props: ['blok'],
  methods: {
    resize
  },
  data(){
    return {
      teammitglied: this.blok
  }
}
}
</script>
<style lang="stylus" >
#agentur
    #weareGrid 
        display: grid 
        +lap()
            grid-template-columns: repeat(3, 1fr)
            grid-gap: 1em
        img 
          margin-bottom .5em
          // +lap()
          //   margin-bottom 1em
        figcaption 
          +mobile()
            margin-bottom 2em
</style>
