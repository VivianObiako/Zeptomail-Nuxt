<template>
  <div class="text-center">
    <carousel :autoplay="true" :nav="false"
              :responsive="{
                0:{items:1,nav:false},
                800:{items:2,nav:true},
                1024:{items:3,nav:false}}">

      <div class="location-card-item text-center">
        <img src="@/assets/img/home/location-bg-4.jpg" alt="feature">
        <h3 class="mt-4">Durumi District</h3>
      </div><!-- /. service-card-item -->

      <div class="location-card-item text-center">
        <img src="@/assets/img/home/location-bg-5.jpg" alt="feature">
        <h3 class="mt-4">Gwarimpa District</h3>
      </div><!-- /. service-card-item -->

      <div class="location-card-item text-center">
        <img src="@/assets/img/home/ng-location-3.jpg" alt="feature">
        <h3 class="mt-4">Jabi District</h3>
      </div><!-- /. service-card-item -->

      <div class="location-card-item text-center">
        <img src="@/assets/img/home/ng-location-4.jpg" alt="feature">
        <h3 class="mt-4">Asokoro District</h3>
      </div><!-- /. service-card-item -->

      <div class="location-card-item text-center">
        <img src="@/assets/img/home/ng-location-5.jpg" alt="feature">
        <h3 class="mt-4">Wuse District</h3>
      </div><!-- /. service-card-item -->

      <div class="location-card-item text-center">
        <img src="@/assets/img/home/ng-location-7.jpg" alt="feature">
        <h3 class="mt-4">Garki District</h3>
      </div><!-- /. service-card-item -->

    </carousel>
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
