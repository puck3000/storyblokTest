<template>
<div class="leistung">
    <p class="lapcenter lead bmarg2" v-html="$md.render(blok.leistungentext)"></p>
    <ul v-html="$md.render(blok.liste)"></ul>
</div>
    
</template>

<script>
export default {
props: [
   'blok'
]
}
</script>

<style scoped>

.leistng ul, .leistung p {
    margin-bottom: 1em;
}


</style>
