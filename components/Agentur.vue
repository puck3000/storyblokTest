<template>
  <div v-editable="blok" v-html="$md.render(blok.agenturtext)"></div>
</template>

<script>
export default {
  props: ['blok']
}
</script>