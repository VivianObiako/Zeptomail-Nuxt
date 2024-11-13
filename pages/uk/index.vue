<template>
  <div>
    <div v-show="loading" class="preloader">
      <v-sheet
        class="pa-3"
      >
        <v-skeleton-loader
          class="mx-auto Loader"
          max-width="300"
          type="card"
        ></v-skeleton-loader>

      </v-sheet>
    </div>
    <div v-show="!loading">
      <div>
        <banner/>
      </div>
      <section class="service-sec pt-15 pb-15 light-bg">
        <h2 class="sec-title text-center mb-10">We’ll come to your rescue anytime you need our expert <br>
          electrical services in England. We’re open 24/7 to be at your service.</h2>
        <serviceCard
          :serviceCardBg1="serviceCardImg1"
          :serviceCardBg2="serviceCardImg2"
          :serviceCardBg3="serviceCardImg3"
          :serviceCardTitle1="serviceCardTitle1"
          :serviceCardTitle2="serviceCardTitle2"
          :serviceCardTitle3="serviceCardTitle3"
          :serviceCardDesc1="serviceCardDesc1"
          :serviceCardDesc2="serviceCardDesc2"
          :serviceCardDesc3="serviceCardDesc3"
          :serviceBtn1="serviceBtn1"
          :serviceBtn2="serviceBtn2"
          :serviceBtn3="serviceBtn3"
        >
        </serviceCard>


      </section><!--/. service-sec -->

      <section class="feature-sec sec-padding">
        <v-container>
          <h2 class="sec-title text-center mb-15 pb-2">More reasons to use Jacob Electric</h2>
          <v-row>
            <v-col md="10" offset-md="1" cols="12" offset="0">
              <v-row>
                <v-col md="4" cols="4">
                  <v-card to="#" elevation="0" class="feature-item text-center">
                    <img src="@/assets/img/home/feature-icon-3.svg" alt="feature">
                    <h3 class="mt-7 fs-16 fw-500">Scheduled Appointment Times</h3>
                  </v-card>
                </v-col>

                <v-col md="4" cols="4">
                  <v-card to="#" elevation="0" class="feature-item text-center">
                    <img src="@/assets/img/home/feature-icon-5.svg" alt="feature">
                    <h3 class="mt-7 fs-16 fw-500">Expert Advice & Smart Solutions</h3>
                  </v-card>
                </v-col>

                <v-col md="4" cols="4" class="text-center">
                  <v-card to="#" elevation="0" class="feature-item text-center">
                    <img src="@/assets/img/home/feature-icon-6.svg" alt="feature">
                    <h3 class="mt-7 fs-16 fw-500">Courteous, Uniformed professionals</h3>
                  </v-card>
                </v-col>

              </v-row>
            </v-col>
          </v-row>

          <v-row class="mt-15">
            <v-col md="8" offset-md="2" cols="12" offset="0">
              <v-row>
                <v-col md="4" cols="4">
                  <v-card to="#" elevation="0" class="feature-item text-center">
                    <img src="@/assets/img/home/feature-icon-1.svg" alt="feature">
                    <h3 class="mt-7 fs-16 fw-500">Insured Electricians</h3>
                  </v-card>
                </v-col>

                <v-col md="4" cols="4">
                  <v-card to="#" elevation="0" class="feature-item text-center">
                    <img src="@/assets/img/home/feature-icon-2.svg" alt="feature">
                    <h3 class="mt-7 fs-16 fw-500">Licensed Experts</h3>
                  </v-card>
                </v-col>

                <v-col md="4" cols="4" class="text-center">
                  <v-card to="#" elevation="0" class="feature-item text-center">
                    <img src="@/assets/img/home/feature-icon-4.svg" alt="feature">
                    <h3 class="mt-7 fs-16 fw-500">Wider Coverage</h3>
                  </v-card>
                </v-col>

              </v-row>
            </v-col>
          </v-row>

        </v-container>
      </section><!-- /. feature-sec -->

<!--      <section>-->
<!--        <freelanceElectrician/>-->
<!--      </section>-->

      <section class="sec-padding locationSec">
        <v-container>
          <div class="text-center">
            <h2 class="sec-title">The Best Electricians in Town</h2>
            <p class="mt-3 mb-5">We are happy to serve the following regions</p>

            <carousel :autoplay="true" :nav="false"
                      :responsive="{
                0:{items:1,nav:false},
                800:{items:2,nav:true},
                1024:{items:4,nav:false}}">

              <div class="location-card-item text-center">
                <img src="@/assets/img/uk-version/index/Greater_London.jpg" alt="feature">
                <h3 class="mt-4">GREATER LONDON</h3>
              </div><!-- /. service-card-item -->

              <div class="location-card-item text-center">
                <img src="@/assets/img/uk-version/index/East_of_England.jpg" alt="feature">
                <h3 class="mt-4"> EAST OF ENGLAND</h3>
              </div><!-- /. service-card-item -->

              <div class="location-card-item text-center">
                <img src="@/assets/img/uk-version/index/South_East.jpg" alt="feature">
                <h3 class="mt-4">SOUTH EAST</h3>
              </div><!-- /. service-card-item -->

              <div class="location-card-item text-center">
                <img src="@/assets/img/uk-version/index/West_Midlands.jpeg.jpg" alt="feature">
                <h3 class="mt-4">EAST MIDLANDS</h3>
              </div><!-- /. service-card-item -->

              <div class="location-card-item text-center">
                <img src="@/assets/img/uk-version/index/West_Midlands.jpeg.jpg" alt="feature">
                <h3 class="mt-4">WEST MIDLANDS</h3>
              </div><!-- /. service-card-item -->

            </carousel>

            <div class="text-center mt-5">
              <v-btn color="primary" height="45" to="#requestConsultation" elevation="0">
                REQUEST FREE COUNSULATION
              </v-btn>
            </div>

          </div>
        </v-container>

      </section>


      <div class="testimonials d-flex justify-center ma-auto align-center">
        <v-container>
          <v-col md="8" offset-md="2">
            <carousel  :autoplay="true" :loop="true" :autoplayTimeout="3600" :nav="false" :dots="false"
                       :items="1" >
              <div class="test_items">
                <h2 class="sec-title">Peace of mind you’re choosing America’s best</h2>
                <p class="mt-4">We are one of America’s only double certified electricians. As a double certified,
                  quality endorsed company, you can rest assure there is no risk with choosing us. This
                  high quality endorsement guarantees we will always deliver on what we promise, you will not be
                  disappointed. Our business systems are extremely thorough
                  to ensure you’re receiving the best possible service</p>
                <v-rating class="mt-5" color="yellow"  :value="5" ></v-rating>
              </div>
            </carousel>
          </v-col>
          <v-col md="12" class="mt-5">
            <v-btn class="ma-auto pt-3 d-block" color="primary" elevation="0" height="45" width="220" to="/uk/testimonials">View More Feedback</v-btn>
          </v-col>
        </v-container>
      </div><!--/. testimonials -->

    </div>
  </div>
</template>

<script>

  const carousel = process.client ? require('vue-owl-carousel') : undefined;
  import '~/assets/css/reset.css';
  import banner from '~/components/static/uk-version/home-banner';
  import locationCard from '~/components/static/cards/location-card';
  import serviceCard from '~/components/static/cards/service-card';
  import freelanceElectrician from '~/components/static/uk-version/freelance';
  import serviceImgSrc1 from "~/assets/img/home/service-bg-1.png";
  import serviceImgSrc2 from "~/assets/img/home/service-bg-2.png";
  import serviceImgSrc3 from "~/assets/img/home/service-bg-3.png";


  export default {
    name: "index",
    layout: 'ukStatic',
    ssr: true,
    head: {
      title: 'Jacob Electric | Electrical Services Washington',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: 'Hire only the best electrical services in Washington. Our Washington electricians are ready' +
            ' to offer residential, commercial, and industrial electrical services.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'electrical services washington, washington electrical services, \n' +
            'Emergency electrical service washington, \n' +
            'washington electricians, electricians in washington, best electricians washington, electrical contractor Electrical Service 98021, ' +
            ' Professional Electrical Installation Bothell WA, Professional Electrical Installation Company Bothell WA, House Wiring Bothell WA,' +
            ' Professional Electrical Wiring Bothell WA, Electrical Wiring Service Bothell WA, House Wiring 98021\n'
        },
      ],
    },
    components: {
      banner,
      carousel,
      locationCard,
      serviceCard,
      freelanceElectrician
    },
    data() {
      return {
        serviceCardImg1: serviceImgSrc1,
        serviceCardImg2: serviceImgSrc2,
        serviceCardImg3: serviceImgSrc3,
        serviceCardTitle1: 'DOMESTIC',
        serviceCardTitle2: 'COMMERCIAL                                         ',
        serviceCardTitle3: 'INDUSTRIAL',
        serviceCardDesc1: 'We serve domestic (residential) areas to help you keep your home safe and functional.',
        serviceCardDesc2: 'We extend our expertise to commercial spaces and help businesses operate seamlessly.',
        serviceCardDesc3: 'Should your industrial enterprise experience emergency breakdowns, we can help 24/7.',
        serviceBtn1: '/uk/service-domestic',
        serviceBtn2: '/uk/service-commercial',
        serviceBtn3: '/uk/service-industrial',
        loading: true,

      }
    },
    methods: {
      afterLoad() {
        this.loading = false;
      },
    },
    mounted() {
      this.afterLoad()
    },


  }


</script>

<style scoped lang="scss">
  .preloader{
    display: grid;
    height: 100vh;
    justify-content: center;
    vertical-align: center;
    width: 100%;
    align-items: center;
    .Loader{
      width: 300px;
    }
  }

  /*-- feature sec --*/
  .serviceBtn{
    display: block;
  }
  .service-sec .sec-title{
    font-size: 25px;
  }
  .feature-item{
    transition: 0.4s;
    &:hover{
      opacity: 0.8;
    }
    img{
      width: 120px;
    }
  }
  .feature-item h3{
    font-size: 16px;
  }
  @media only screen and (max-width: 768px) {
    .service-sec .sec-title{
      font-size: 24px;
      line-height: 35px;
    }
    .feature-item img{
      width: 60px;
    }
    .feature-item h3{
      font-size: 14px!important;
    }
  }

  /*-- location--*/
  .location{
    position: relative;
  }
  .locationSec{
    .location-card-item{
      padding: 15px;
      img{
        width: 100%;
        height:220px;
        object-fit: cover;
      }

    }
  }


  .social-section{
    background-color: #7f828b;
    position: absolute;
    a{
      padding-top: 5px!important;
    }
    .fb{
      background-color: #4867aa;
      color: white;
    }
    .google{
      background-color: #de453d;
      color: white;
    }
    .pinterest{
      background-color: #e11a21;
      color: white;
    }
    .linkedin{
      background-color: #0077b5;
      color: white;
    }
  }
  @media only screen and (max-width: 767px) {
    .social-section{
      display: none;
    }
  }

  .testimonials{
    background-image: url("@/assets/img/home/testimonails-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    height: 500px;
    position: relative;
    z-index: 2;

    .test_items{
      text-align: center;
      color: white;
    }

    &:after{
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: #0000004d;
    }
  }


</style>

<style>
  .service-sec p {
    height: 50px;
    overflow: hidden;
  }
  .service-sec .serviceBtn{
    display: block !important;
    margin: 0 auto;
  }
</style>
