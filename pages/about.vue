<template>
  <div class="about">
    <div class="about-top-content">
      <v-container>
        <v-row>
          <v-col md="7" cols="12" class="">
            <div class="text pt-md-15 mb-md-15 pt-0 pb-5">
              <h2 class="sec-title mb-4">Jacob Electric Group </h2>
              <p class="mb-2">In 1969, the founding father of Jacob Electric (JE) began his Electrical contractor career
                in Jerusalem with a fervent passion and clear vision. After serving 25 years as Chief Electrical Inspector at
                The Jerusalem District Electricity Company (JDECO) in Israel, his dream was to launch a business founded in value, quality, and trust.
                These values served as the main foundation for Jacob Electric and have been the key driver of its success today.</p>
              <p class="mb-2"> During the past half-century, JE has established outstanding expertise and reputation in
                all emerging electrical technologies, as well as their applications. This determination to lead has been the cornerstone
                of the growth and success of Jacob Electric throughout our long and distinguished history.
              </p>
              <p class="mb-3">JE is not only leading the market locally, but has also successfully completed projects internationally,
                including within: Singapore, Malaysia, Jordan and Dubai.
              </p>
              <p class="mb-2"> In 2019, the founder’s son had the vision to establish a branch within the United States, alongside a
                talented British entrepreneur. Both parties agreed to locate their base in the state of Washington to serve the Puget
                Sound region both residentially, commercially and industrially.
              </p>
              <p class="mb-2">The JE team consists of professional individuals, engineers, and electricians,
                who work alongside  a leader with solid experience in growing large companies internationally.</p>
              <p class="mb-2">Jacob Electric is all about quality, innovation, and trust. It has endured decades of existence in the
                industry because of how it stays true to its promise—quality services every time.</p>

            </div>
          </v-col>
          <v-col md="5" class="d-flex justify-center flex-column">
            <img class="w-full d-md-block d-none" src="@/assets/img/about/about-bg.png" alt="feature">
          </v-col>
        </v-row>

      </v-container>
    </div><!--/. about-top-content-->

    <div class="about-bottom-card sec-padding" style="background-color: #F9F9F9">
      <v-container>
        <v-row>
          <v-col md="4" cols="12" class="text-center ma-auto">
            <h2>Our Philosophy</h2>
          </v-col>
          <v-col md="8" cols="12">
            <v-row>
              <v-col md="6" cols="12">
                <div class="about-bottom-box d-flex justify-center flex-column ">
                  <p>At Jacob Electric, we strive to always meet or even exceed customer expectations.
                    We develop our services by investing
                    in training and technology while creating the safest work environment possible.</p>
                </div>
              </v-col>
              <v-col md="6" cols="12">
                <div class="about-bottom-box d-flex justify-center flex-column ">
                  <p>JE sticks to its core values: safety, professional development, confidence, innovation,
                    and community. We are ever improving by keeping
                    up-to-date with the latest industry trends and listening to what the customers need and want. </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

    </div><!-- /. about-bottom-card -->


    <section class="more-about-sec sec-padding d-flex justify-center flex-column">
      <v-container>
        <v-row>
          <v-col md="6" offset-md="3" class="text-center">
            <h2 class="sec-title white--text">Enjoy Peace of Mind: America’s Best Got Your Back</h2>
            <p class="white--text mt-5">Our team is composed of double certified electricians in Washington.
              You can rest easy knowing that quality is warranted, risks are abolished, and satisfaction is
              guaranteed. We exist to help you receive the best electrical services that you deserve.
              Our seasoned electricians in
              Washington are equipped and ready to get any electrical job done the best way possible.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section><!--/. more-about-sec -->



  </div>
</template>

<script>
  import '~/assets/css/reset.css';
  import banner from '~/components/static/home/banner';
  import locationCard from '~/components/static/cards/location-card';
  import serviceCard from '~/components/static/cards/service-card';
  export default {
    name: "index",
    layout: 'static',
    ssr: true,
    head: {
      title: 'Jacob Electric | Expert Electrical Services  in Washington\n',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Jacob Electric offers topnotch electrical services washington. Our washington electricians are trained, experienced, and equipped to do an awesome job every time.\n'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '"electrical services washington, washington electrical services, \n' +
            'Emergency electrical service washington, \n' +
            'washington electricians, electricians in washington, best electricians washington"\n Professional Electrician 98021, ' +
            ' Professional Electrical Company 98021, Electrical Service Professional 98021, House Electrical Wiring Service Bothell ' +
            'WA,  Electrical Systems Bothell WA,' +
            ' Electrical Master Bothell WA, Affordable Electrician 98021\n'
        },
      ],
    },
    components:{
      banner,
      locationCard,
      serviceCard
    },
  }
</script>

<style scoped>
  @media only screen and (min-width: 992px) {
    .about-top-content{
      /*background: url("assets/img/about/about-bg.png");*/
    }
  }
  .about-top-content{
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .about-top-content .text{
    background: linear-gradient(90deg, #FFFFFF 61.32%, rgb(249 249 249 / 19%) 100%);
  }
  .about-bottom-box{
    height: 250px;
    padding: 70px 50px 50px 50px;
    background-color: white;
    display: flex;
    align-content: center;
    vertical-align: center;
  }
  @media only screen and (min-width: 950px) and (max-width: 1265px) {
    .about-bottom-box{
      height: 300px;
    }
  }
  .about-bottom-box p{
    position: relative;
  }
  .about-bottom-box p::after{
    position: absolute;
    top: -30px;
    left: 0;
    content: "";
    width: 36px;
    height: 7px;
    background-color: #e54f1d;
  }


  /*-- more-about-sec --*/
  .more-about-sec{
    background-image: url("assets/img/home/more-about-us.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 450px;
    align-items: center;
    z-index: 3;
    position: relative;
  }
  @media only screen and (max-width: 500px) {
    .more-about-sec{
      height: auto;
    }
  }
  .more-about-sec h2{
    text-shadow: 1px 1px 10px #000000!important;
  }
  .more-about-sec p{
    text-shadow: 1px 1px 10px #000000!important;
    font-size: 18px;
    line-height: 28px;
  }
  .more-about-sec:after {
    content:'';
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    background: rgb(0 0 0 / 59%);
    z-index: -1;
  }

</style>
