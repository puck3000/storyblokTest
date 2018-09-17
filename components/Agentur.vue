<template>
  <div v-editable="blok">
    {{ blok.agenturtext }}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>