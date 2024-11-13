<template>
  <section class="service-banner  text-center d-flex justify-center flex-column">
    <v-container>
      <h2 class="sec-title fw-bold">{{serviceBannerTitle}}</h2>
      <p class="mt-5 fs-16">{{serviceBannerDesc}}</p>
       <v-btn color="primary" class="mt-10" height="50" elevation="0"
       to="#requestConsultation"
       >
         REQUEST FREE COUNSULATION
       </v-btn>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: "service-banner",

    props: [
      'serviceBannerTitle',
      'serviceBannerDesc',
    ]

  }
</script>

<style scoped>
  .service-banner{
    height: 450px;
  }
  .service-banner h2{
    color: white;
    text-shadow: 1px 1px 10px #000000;
  }
  .service-banner p{
    font-size: 16px;
    line-height: 25px;
    color: white;
    text-shadow: 1px 1px 10px #000000;

  }
</style>
