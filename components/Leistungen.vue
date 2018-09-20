<template>
<div class="leistung">
    <div class="lapcenter lead bmarg2" v-html="$md.render(blok.leistungentext)"></div>
    <div class="liste" v-html="$md.render(blok.liste)"></div>
</div>
    
</template>

<script>
export default {
props: [
   'blok'
]
}
</script>

<style lang="stylus">
.liste 
    p 
        margin-bottom: 2em
    +lap()
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 4em
    

</style>
