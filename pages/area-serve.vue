<template>
  <section class="area-serve">


    <v-container>
  <h2 class="pa-3">area-serve</h2>
    </v-container>


  </section>
</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "area-serve",
    layout: 'static',
    ssr: true,
    components: { carousel },
  }
</script>

<style scoped lang="scss">

</style>
