<template>
  <article class="lapcenter lead bmarg2" v-editable="blok" v-html="$md.render(blok.agenturtext)"></article>
</template>

<script>
export default {
  props: ["blok"]
};
</script>