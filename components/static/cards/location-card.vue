<template>
  <div>
      <carousel :autoplay="true" :nav="false"
                :responsive="{
                0:{items:1,nav:false},
                800:{items:2,nav:true},
                1024:{items:3,nav:false}}">

        <div class="location-card-item text-center">
          <img src="@/assets/img/home/location-bg-1.webp" alt="feature">
          <h3 class="mt-4">KING COUNTY, WA</h3>
        </div><!-- /. service-card-item -->

        <div class="location-card-item text-center">
          <img src="@/assets/img/home/location-bg-2.webp" alt="feature">
          <h3 class="mt-4">SNOHOMISH COUNTY, WA</h3>
        </div><!-- /. service-card-item -->

        <div class="location-card-item text-center">
          <img src="@/assets/img/home/location-bg-3.webp" alt="feature">
          <h3 class="mt-4">PIERCE COUNTY, WA</h3>
        </div><!-- /. service-card-item -->

      </carousel>

      <div class="text-center mt-5">
        <v-btn color="primary" height="40" to="#">
          REQUEST FREE COUNSULATION
        </v-btn>
      </div>


  </div>


</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "location-card",
    components: { carousel },
    // props: [
    //   'locationCardBg1',
    //   'locationCardBg2',
    //   'locationCardBg3',
    //   'locationCardTitle1',
    //   'locationCardTitle2',
    //   'locationCardTitle3',
    // ]
  }
</script>


<style scoped lang="scss">
  .location-card-item{
    padding: 15px;
  }

</style>
