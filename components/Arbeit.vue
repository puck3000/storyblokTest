<template>
<div>
    <h1 class="lapcenter lead bmarg1">{{blok.titel}}</h1>
    <figure>
        <img :src="blok.mainpic" :alt="blok.titel">
        <figcaption v-editable="blok" v-html="$md.render(blok.beschreibung)"></figcaption>
    </figure> 
    <div class="casepicGrid">
      <ul>
          <li v-for="pic in blok.Bilder" :key="pic.uid" :class="{ half: pic.name}">
            <img :src="pic.filename" alt="blok.titel">
          </li>
      </ul>
    </div>
</div>

</template>

<script>
export default {
props: [
   'blok'
]
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