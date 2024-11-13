<template>
  <div class="home-banner banner">
    <div>
<!--      <carousel  :autoplay="true" :loop="true" :autoplayTimeout="3600" :nav="false" :dots="false"-->
<!--                 :items="1" >-->
<!--        <img class="bg" src="@/assets/img/home/banner-bg.jpg" alt="bg">-->
<!--        <img class="bg"  src="@/assets/img/gallery/16.JPG" alt="bg">-->
<!--        <img class="bg"  src="@/assets/img/gallery/4.JPG" alt="bg">-->
<!--      </carousel>-->


        <v-carousel hide-delimiters :cycle="true"  :interval=3500 :show-arrows="false" height="auto">
          <v-carousel-item>
            <img class="bg" src="@/assets/img/home/banner-bg.webp" alt="bg">
          </v-carousel-item>
          <v-carousel-item>
            <img class="bg" src="@/assets/img/home/17.JPG" alt="bg">
          </v-carousel-item>
          <v-carousel-item>
            <img class="bg" src="@/assets/img/home/2.JPG" alt="bg">
          </v-carousel-item>
        </v-carousel>

    </div>

    <div class="container pa-0">
      <div class="banner-text-wrap">
        <v-row>
          <v-col md="9" sm="8" cols="11" class="">
            <div class="banner-text">
              <h2 class="white--text">We got your electrical needs covered</h2>
              <v-row>
                <v-col md="10" sm="8" cols="12">
                  <v-card href="tel:529-4433" color="primary" elevation="0" class="pa-5 mt-5 card">
                    <div class="d-flex">
                      <v-icon size="30" color="#fff">mdi-phone-in-talk</v-icon>
                      <h3 class="white--text ml-2">Call Now</h3>
                    </div>
                    <h3 class="white--text mt-4 text-h4">(206) 529-4433</h3>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div><!--/. banner-text-wrap-->
    </div>

  </div>
</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "home-banner",
    components: { carousel },
  }
</script>

<style scoped lang="scss">
  .home-banner{
    position: relative;
    .bg{
      height: 80vh;
      object-fit: cover;
      width: 100%!important;
    }
    @media only screen and (min-width: 1200px) {
      .bg{
        height: 650px;
        object-fit: cover;
      }
    }

    .banner-text-wrap{
      position: absolute;
      top: 15%;
      z-index: 3;

    }
    .banner-text{
      background: #403f3ee0;
      padding: 50px;
      margin: 50px 0;
      .card{
        transition: 0.4s ease;
        &:hover{
          opacity: 0.8;
        }
      }
    }
    @media only screen and (max-width: 320px) {
      .banner-text{
        padding: 20px;
        margin: 30px 0;
      }
    }
    .banner-text h2{
      font-weight: 600;
      font-size: 30px;
      line-height: 41px;
    }
    .banner-text p{
      font-size: 14px;
    }
  }

  .home-banner::after{
    content:'';
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    background-color: #00000040;
    z-index: -1;
  }


  .banner-bg{
    background-image: url("@/assets/img/home/banner-bg.jpg");
    height: 450px;
    object-fit: cover;
    z-index: 3;
    position: relative;
  }
  .banner-bg:after {
    content:'';
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    background-color: rgba(64, 63, 62, 0.4);

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
</style>
