<template>
  <div class="service-residential">
    <div>
      <freelance/>
    </div>

    <div class="different-approach sec-padding">
      <v-container>
        <v-row>
          <v-col md="5" cols="12">
            <h2>Our Approach</h2>
            <p class="mt-5"><b>Wakeup every day, going to the same location, reporting to the same boss, for the same
              job can equal boring , frustration and un-satisfaction.</b></p>
            <p class="mt-4">
              At Jacob Electric we aim to help licensed electricians to take charge of their career and enjoy better flexibility.
              Receive notifications for jobs available in your area, with freedom to either accept or decline each job invitation.
              Accept a job and work on a job, you get paid, simple.  Take another job or take a break, your choice. Determine your
              availability and income. More jobs more pay. This fresh system is designed to help licensed electricians improve their
              work conditions and their quality of life. Whether you want better pay or better work flexibility,
              the Jacob Electric app is the exact solution you’re looking for.
            </p>
          </v-col>
          <v-col md="7" class="d-md-block d-none">
            <img class="w-full" src="@/assets/img/freelance/different-approach-bg.jpg" alt="feature">
          </v-col>
        </v-row>
      </v-container>
    </div><!-- /. different-approach -->


    <div class="freelance-card sec-padding light-bg">
      <v-container>
        <h2 class="text-center mb-10">Enjoy rewarding work and a flexible schedule</h2>
        <serviceCard
          :serviceCardBg1="freelanceCardBG1"
          :serviceCardBg2="freelanceCardBG2"
          :serviceCardBg3="freelanceCardBG3"
          :serviceCardTitle1="freelanceCardTitle1"
          :serviceCardTitle2="freelanceCardTitle2"
          :serviceCardTitle3="freelanceCardTitle3"
          :serviceCardDesc1="freelanceCardDesc1"
          :serviceCardDesc2="freelanceCardDesc2"
          :serviceCardDesc3="freelanceCardDesc3"
        >
        </serviceCard>
      </v-container>
    </div><!--/. freelance-card -->

    <div class="app-process sec-padding">
      <v-container>
        <v-row>
          <v-col md="7" cols="12" order-md="0" order="1">
            <verticalBox
              :verticalBoxTitle1="diffAppTitle1"
              :verticalBoxTitle2="diffAppTitle2"
              :verticalBoxTitle3="diffAppTitle3"
              :verticalBoxDesc1="diffAppDesc1"
              :verticalBoxDesc2="diffAppDesc2"
              :verticalBoxDesc3="diffAppDesc3"
            >
            </verticalBox>
          </v-col>
          <v-col md="5" cols="12" order-md="1" order="0" class="text-md-left text-center">
            <div class="content">
              <h2 class="sec-title">Our Application Process</h2>
              <p class="mt-3">Work anytime you want and join the happy club at Jacob Electric licensed electricians in Nigeria</p>
              <img class="w-full mt-10" src="@/assets/img/freelance/different-approach.png" alt="feature">
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div><!-- /. app-process-->



    <div class="signup light-bg my-md-0 py-15">
      <v-container>
        <v-row>
          <v-col md="5" cols="12" class=" ma-auto text-center">
            <h2 class="sec-title text-h5 lh-base">
              Jacob Electric got you covered. We’re here to bring more opportunities your way while
              making sure that you stay in charge of your schedule and of your life.
            </h2>
            <h2 class="mt-3">Download My Jacob App.<br> We’ve got jobs.</h2>

            <div class="jacob-joining-btn">
              <v-row class="mt-2">
                <v-col md="4" offset-md="2" sm="4" offset-sm="2" cols="6">
                  <v-card elevation="0" href="https://play.google.com/store/apps" target="_blank">
                    <img class="w-full" src="@/assets/img/freelance/playstore.png" alt="feature">
                  </v-card>
                </v-col>
                <v-col md="4" sm="4" cols="6">
                  <v-card elevation="0" color="transparent" href="https://www.apple.com/app-store/" target="_blank">
                    <img class="w-full" src="@/assets/img/freelance/appstore.png" alt="feature">
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col md="7" class="d-md-block d-none">
            <img class="w-full" src="@/assets/img/freelance/signup-bg.png" alt="feature">
          </v-col>

        </v-row>


      </v-container>
    </div>

  </div>
</template>

<script>
  import '~/assets/css/reset.css';
  import banner from '~/components/static/services/banner';
  import testimonial from '~/components/static/services/testimonial';
  import electricTeam from '~/components/static/services/electric-team';
  import serviceCard from '~/components/static/cards/service-card';
  import verticalBox from '~/components/static/cards/vertical-box';
  import freelanceCardBgSrc1 from "~/assets/img/freelance/service-bg1.png";
  import freelanceCardBgSrc2 from "~/assets/img/freelance/service-bg2.png";
  import freelanceCardBgSrc3 from "~/assets/img/freelance/service-bg3.png";
  import freelance from "~/components/static/ng-version/freelance";

  export default {
    name: "freelance-electrician",
    layout: 'ngStatic',
    ssr: true,
    head: {
      title: 'Jacob Electric  | Become a Freelance Journeyman Electrician in Nigeria \n',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Wondering how to become an electrician in Nigeria? Check out Jacob Electric\'s Freelance ' +
            'Journeyman program and start' +
            ' a flexible and rewarding career as a freelance electrician in Nigeria.\n'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'how to start electrical contractor, how to become electrical company, own electrical company, run' +
            ' electrical firm, electrical services Nigeria, how to become an electrician in Nigeria state, Electrician Jobs Nigeria \n'
        },
      ],
    },
    components:{
      banner,
      testimonial,
      electricTeam,
      freelance,
      serviceCard,
      verticalBox

    },

    data() {
      return {
        residentialBannerTitle: 'Need An Electrician for your home?',
        residentialBannerDesc:'You’ll receive amazing 5 start service and consistently fair pricing, everytime.',
        diffAppTitle1:'Download app and sign up',
        diffAppTitle2:'Receive Job Alert',
        diffAppTitle3:'Get paid',
        diffAppDesc1:'Simply download the Jacob Electric app and fill in the form to apply. Our team will review your application,' +
          ' and you can start working as soon as the application is approved.',
        diffAppDesc2:'You will be notified whenever there’s a job available for you in your area. ' +
          'If you want to book it, just accept it, go to the customer’s home, and complete the work.',
        diffAppDesc3:'The more gigs you accept; the more money you get paid. After getting the job done and notifying our ' +
          'office via the app, your fee will be credited to your preferred payment option. ',
        freelanceCardBG1:freelanceCardBgSrc1,
        freelanceCardBG2:freelanceCardBgSrc2,
        freelanceCardBG3:freelanceCardBgSrc3,
        freelanceCardTitle1:'Make money on your own terms',
        freelanceCardTitle2:'Set your own schedule',
        freelanceCardTitle3:'Let the JE app lead the way',
        freelanceCardDesc1:'Work whenever you want and choose how you want to get paid. Here, you’re the boss.\n',
        freelanceCardDesc2:'Start working and stop working whenever it works best for you. As long as you complete' +
          ' chosen bookings, you’re good to go.',
        freelanceCardDesc3:'The app notifies you whenever work is available in your area. You’re free to accept or' +
          ' decline each task. Upon account activation,' +
          ' you can readily begin working as a Jacob Electric Licensed electrician.',
      }
    }

  }
</script>

<style scoped>
  .signup{
    /*background-image: url("assets/img/freelance/signup-bg.png");*/
    background-repeat: no-repeat;
    background-position: right;
  }
  .different-approach img{
    height: 350px;
    object-fit: cover;
    opacity: .7;
  }
  .app-process .content{
    position: relative;
    overflow: hidden;
    padding-left: 50px;
  }
  .app-process .content::after{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width:100%;
    height: 100px;
    border-left: 2px solid #e54f1d;
  }
  @media only screen and (max-width: 960px) {
    .app-process img{
      width: 58%!important;
    }
    .app-process .content{
      padding-left: 0px;
    }
  }

  /*-- service-residential --*/
  .feature-item h3{
    font-size: 16px;
  }
  /* freelance-card --*/
  @media only screen and (min-width: 1266px) {
    .freelance-card h2{
      margin:0 300px;
    }
  }
  @media only screen and (min-width: 950px) and (max-width: 1265px) {
    .freelance-card h2{
      margin:0 100px;
    }
  }

  .jacob-joining-btn img{
    height: 40px;
  }

</style>
