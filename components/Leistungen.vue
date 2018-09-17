<template>
<div>
    <p v-html="$md.render(blok.leistungentext)"></p>
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

<style>

</style>
