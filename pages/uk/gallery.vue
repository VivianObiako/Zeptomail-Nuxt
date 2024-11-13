<template>
  <section class="gallery pt-5 mb-5 light-bg">
    <v-container>
      <lightBox/>
    </v-container>
  </section>
</template>

<script>
  import lightBox from '~/components/static/gallery/lightbox';

  export default {
    name: "gallery",
    layout: 'ukStatic',
    components: {
      lightBox,
    },
    ssr: true,
    data: () => ({
    }),
  }

</script>

<style scoped lang="scss">

</style>
