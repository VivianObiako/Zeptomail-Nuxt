<template>
  <div class="banner">
    <v-container>
      <div class="text-center">

      </div>
      <carousel :autoplay="true" :nav="false"
                :responsive="{
                0:{items:1,nav:false},
                800:{items:2,nav:false},
                1024:{items:3,nav:false}}">


        <div class="service-card-item text-center">
          <img  :src="serviceCardBg1" alt="services">
          <h3 class="mt-4">{{serviceCardTitle1}}</h3>
          <p class="mt-5">{{serviceCardDesc1}} </p>
           <v-btn class="serviceBtn mt-5" :to="serviceBtn1" height="40" color="primary">
             LEARN MORE
           </v-btn>
        </div><!-- /. service-card-item -->


        <div class="service-card-item text-center">
          <img  :src="serviceCardBg2" alt="services">
          <h3 class="mt-4">{{serviceCardTitle2}}</h3>
          <p class="mt-5">{{serviceCardDesc2}} </p>
          <v-btn class="serviceBtn mt-5" :to="serviceBtn2" height="40" color="primary">
            LEARN MORE
          </v-btn>
        </div><!-- /. service-card-item -->


        <div class="service-card-item text-center">
          <img  :src="serviceCardBg3" alt="services">
          <h3 class="mt-4">{{serviceCardTitle3}}</h3>
          <p class="mt-5">{{serviceCardDesc3}} </p>
          <v-btn class="serviceBtn mt-5" :to="serviceBtn3" height="40" color="primary">
            LEARN MORE
          </v-btn>
        </div><!-- /. service-card-item -->


      </carousel>
    </v-container>
  </div>


</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "service-card",
    components: { carousel },
    props: [
      'serviceCardBg1',
      'serviceCardBg2',
      'serviceCardBg3',
      'serviceCardTitle1',
      'serviceCardTitle2',
      'serviceCardTitle3',
      'serviceCardDesc1',
      'serviceCardDesc2',
      'serviceCardDesc3',
      'serviceBtn1',
      'serviceBtn2',
      'serviceBtn3'
    ]
  }
</script>


<style scoped>
  .service-card-item{
    text-align: center;
  }
  .service-card-item p{
    padding: 0 35px;
  }
  .service-card-item h3{
     font-size: 20px;
  }
  .service-card-item img{
    width: 50%!important;
    margin: 0 auto;
    height: 164px;
    object-fit: cover;
  }
  @media only screen and (min-width: 950px) and (max-width: 1265px) {
    .service-card-item img{
      width: 80%!important;
    }
  }
  @media only screen and  (max-width: 400px) {
    .service-card-item img{
      width: 80%!important;
    }
  }

  /*btn*/
  .serviceBtn{
     display: none;
  }
  .serviceBtn{
    width: 150px;
    padding: 10px 0!important;
  }

</style>
