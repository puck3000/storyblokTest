<template>
  <p class="lapcenter lead bmarg2" v-editable="blok" v-html="$md.render(blok.agenturtext)"></p>
</template>

<script>
export default {
  props: ['blok']
}
</script>