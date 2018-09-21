<template>
    <picture>
        <source media="(max-width: 768px)" :srcset="resize(bild.portrait, '768x0')">
        <source media="(min-width: 769px)" :srcset="resize(bild.portrait, '1440x0')">
        <source media="(min-width: 1441px)" :srcset="resize(bild.portrait, '2010x0')">

        <img :src="bild.portrait" :alt="blok.titel">
</picture>
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

<style>

</style>
