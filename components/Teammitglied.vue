<template>
<figure>     
    <img :src="blok.portrait" :alt="blok.alttext">
    <figcaption v-html="$md.render(blok.about)">
    </figcaption>
</figure>
</template>

<script>
export default {
  props: ['blok'],
}
</script>
<style lang="stylus" scoped>
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
