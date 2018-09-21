<template>
<div class="leistung">
    <p class="lapcenter lead bmarg2" v-html="$md.render(blok.leistungentext)"></p>
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
    +lap()
        margin-top: 6em
    p 
        margin-bottom: 2em
    +lap()
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-row-gap: 4em
        p 
            grid-column: span 2
            &:first-child
                grid-column-start: 2
            &:nth-child(2)
                grid-column-start: 4
            &:nth-child(3)
                grid-column-start: 6
            &:nth-child(4)
                grid-column-start: 8
    

</style>
