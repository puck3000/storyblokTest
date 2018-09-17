<template>
  <div id="mainWrapper">
    <hella-header/>
    <nuxt/>
    <hella-footer/>
  </div>
</template>

<script>
import HellaHeader from '@/components/HellaHeader';
import HellaFooter from '@/components/HellaFooter';

export default{
  components: {
    HellaHeader,
    HellaFooter
  }
} 

</script>



<style lang="stylus">


</style>