<template>
<div>
    <h1 class="lapcenter lead bmarg1">{{blok.titel}}</h1>
    <figure>
        <picture>
            <source media="(max-width: 768px)" :srcset="resize(bild.mainpic, '768x0')">
            <source media="(max-width: 1440px)" :srcset="resize(bild.mainpic, '1440x0')">
            <source media="(min-width: 1441px)" :srcset="resize(bild.mainpic, '2010x0')">
            <img :src="bild.mainpic" :alt="blok.titel">
        </picture>
        <figcaption v-editable="blok" v-html="$md.render(blok.beschreibung)"></figcaption>
    </figure>
         
    <div class="casepicGrid">
      <ul>
          <li v-for="pic in blok.Bilder" :key="pic.uid" :class="{ half: pic.name}">
            <picture>
                <source media="(max-width: 768px)" :srcset="resize(pic.filename, '768x0')">
                <source media="(max-width: 1440px)" :srcset="resize(pic.filename, '1440x0')">
                <source media="(min-width: 1441px)" :srcset="resize(pic.filename, '2010x0')">
                <img :src="pic.filename" :alt="blok.titel">
            </picture>
          </li>
      </ul>
    </div>
</div>

</template>

<script>
import { isEditMode, resize } from '@/plugins/helper'
export default {
props: [
   'blok'
],
methods: {
    resize
  },
    data(){
    return {
      bild: this.blok
        }
    }
}
</script>

<style lang="stylus" scoped>
.arbeit-detail {
    margin: 0 0.5rem 3rem;
}

+lap()
    .arbeit-detail {
        max-width: 1200px;
        margin: 0 auto 3rem;

        article {
            text-align: center;
            margin: auto;
        }
    }
    .casepicGrid ul
        display: grid 
        grid-template-columns: repeat(2, 1fr)
        grid-gap: 1em
        li 
            grid-column-start: span 2;
        .half
            grid-column-start: span 1;
    figcaption 
        max-width: 60%;
        text-align: left;
        margin: 2em 0 
+mobile()
    h1.lead 
        font-weight: bold 
    li 
        margin-bottom: .5em
</style>