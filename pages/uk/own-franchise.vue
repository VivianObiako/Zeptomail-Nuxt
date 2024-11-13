<template>
  <div class="own-franchise">

   <div class="franchise-banner d-flex justify-center flex-column">
     <v-container>
       <v-row>
         <v-col md="5" class="white--text">
           <h2 class="sec-title">Start an Electrical Service Franchise with Jacob Electric</h2>
           <p class="pt-5">Platinum developed a model to fit the government’s requirements of being a franchise, however we want
             to be a franchise that’s not a franchise. Joshua and the team didn’t want to work with disgruntled tradesmen that wanted to buy
             ‘a job’. They wanted to work with likeminded people that believed in a process and wanted to grow professionally and personally.
             This is how Platinum now operates – a personal approach to franchising that teaches all the hidden ways to grow your business
             using our systems and procedures, while living our 10 core values.
           </p>
         </v-col>
       </v-row>
     </v-container>
   </div><!--/. own-franchise -->

    <div class="WhyChooseJacob sec-padding light-bg">
       <v-container>
          <v-row>
            <v-col md="5" cols="12">
               <h2 class="sec-title fw-bold">Why Choose Jacob Electric</h2>
               <p class="mt-4">There are so many reasons that yourself, your family and your business can benefit
                 from joining the Jacob Electric. The key reason is we support you to achieve YOUR
                 vision for your business and we provide you both the technology, training and back office
                 support that you need in other to make your business run smoothly. We’ll help you achieve your vision by providing;
              </p>
              <img class="w-full mt-15 d-md-block d-none" src="@/assets/img/own-franchise/why-choose.jpg" alt="feature">
            </v-col>
            <v-col md="7" class="pl-md-15 pl-3">
              <div>
                <h3 class="fs-20">Technology</h3>
                <p>At Jacob Electric, we believe that technology is changing the way every business is done. We have
                  invested heavily on technology platform that will simplify our everyday activities. We will provide you our in-house
                  technology to support your business. From HR, Job & customer management to sales reporting and accounting- its all here
                  waiting for you. We are a turnkey solution to make your vision reality.
                </p>
              </div>
              <v-divider
                class="mt-5 mb-5"
              ></v-divider>
              <div>
                <h3 class="fs-20">Low Cost Entry</h3>
                <p>We want to make Jacob Electric affordable for the right people. For less than $40k we can set you up
                  and running and get you on your way to start your journey of owning an electrical contractor company.
                  Our ongoing royalty fees are fixed and don’t start till year 1 and even then, they are affordable.
                  We want you to be part of the family for a long time, our model is about sustainable growth and support, your success is our goal.
                </p>
              </div>
              <v-divider
               class="mt-5 mb-5"
              ></v-divider>
              <div>
                <h3 class="fs-20">Marketing</h3>
                <p>One of the biggest challenges for any small business is – “How do I reach my market?” - “How do I become visible and get work?”.
                  With Jacob, we have a national brand with an ‘always on’ marketing strategy that includes digital, social and other media. We also teach and support you
                  to grow your local area marketing with templates, group discounts and advice from our in-house marketing team. We don’t walk away,
                  we ensure you are very busy making sales
                </p>
              </div>
              <v-divider
                class="mt-5 mb-5"
              ></v-divider>
              <div>
                <h3 class="fs-20">Training and Support</h3>
                <p>We never want you to feel like you are alone, it’s a key reason why you are looking to join Jacob Electric.
                  We offer monthly one on one business coaching to achieve your vision, we have daily updates on our mobile app news feed,
                  state franchise catchups and our annual conference.
                  Even more than this we are only ever as far away as your phone - whatever you need your fellow owners and Head Office are always available to you.

                </p>
              </div>

            </v-col>
          </v-row>
       </v-container>
    </div><!-- WhyChooseJacob -->

    <div class="applicationProcess sec-padding">
      <v-container>
      <h2 class="sec-title">Our application process</h2>
      <p class="mt-3 mb-10">Four steps away from starting your own success stroy</p>

      <carousel :autoplay="true" :nav="false" :items="4"
                :responsive="{
                0:{items:1,nav:false},
                800:{items:2,nav:false},
                1265:{items:3,nav:false},
                1266:{items:4,nav:false}}">

           <div class="applicationProcessBox text-center">
              <h3>STEP 1</h3>
             <div class="bg-warf light-bg">
               <img  src="@/assets/img/own-franchise/applicationProces1.png" alt="feature">
             </div>
             <div class="pa-5 content">
               <h4>Submit an Expression ofInterest Form</h4>
               <p class="mt-5">We will review and then contact you</p>
             </div>
           </div><!-- /. applicationProcessBox -->

        <div class="applicationProcessBox text-center">
          <h3>STEP 2</h3>
          <div class="bg-warf light-bg">
            <img  src="@/assets/img/own-franchise/applicationProces2.png" alt="feature">
          </div>
          <div class="pa-5 content">
            <h4>First Meeting</h4>
            <p class="mt-5">A casual chat to gauge your suitability to the Jacob Electric brand and a full presentation of the
              ‘ins and outs’ of a Jacob Electric franchise.</p>
          </div>
        </div><!-- /. applicationProcessBox -->

        <div class="applicationProcessBox text-center">
          <h3>STEP 3</h3>
          <div class="bg-warf light-bg">
            <img  src="@/assets/img/own-franchise/applicationProces3.png" alt="feature">
          </div>
          <div class="pa-5 content">
            <h4>Receive the FranchiseAgreement</h4>
            <p class="mt-5">A copy of our disclosure document and franchise agreement will be issued at this stage</p>
          </div>
        </div><!-- /. applicationProcessBox -->

        <div class="applicationProcessBox text-center">
          <h3>STEP 4</h3>
          <div class="bg-warf light-bg">
            <img  src="@/assets/img/own-franchise/applicationProces4.png" alt="feature">
          </div>
          <div class="pa-5 content">
            <h4>Onboarding Meeting</h4>
            <p class="mt-5">Prior to this meeting you pay the franchise fee, both parties sign the franchise agreement
              and you officially become part of the Jacob Electric family. YAY!
              Now you'll be ready to start your Training Week!!
            </p>
          </div>
        </div><!-- /. applicationProcessBox -->

      </carousel>

      </v-container>
    </div><!-- /. WhyChooseJacob -->

    <div class="howLong sec-padding pt-0">
      <v-container>
         <v-row>
            <v-col md="8" offset-md="2" class="text-center">
              <h2 class="sec-title">How long does it take?</h2>
              <img  class="w-full mt-7" src="@/assets/img/own-franchise/howitlong.png" alt="feature">
              <p>From initial expression of interest through to starting work at your first customers premises
                can take as little as 6 weeks (depending on legal, financial and business roll out variables).</p>
            </v-col>
         </v-row>
      </v-container>
    </div>

    <div>
       <serviceForm/>
    </div><!--/. contact form -->

  </div>
</template>

<script>
  import '~/assets/css/reset.css';
  import banner from '~/components/static/services/banner';
  import electricTeam from '~/components/static/services/electric-team';
  import serviceCard from '~/components/static/cards/service-card';
  import verticalBox from '~/components/static/cards/vertical-box';
  import serviceForm from '~/components/static/services/service-form';
  import freelanceCardBgSrc1 from "~/assets/img/freelance/service-bg1.png";
  import freelanceCardBgSrc2 from "~/assets/img/freelance/service-bg2.png";
  import freelanceCardBgSrc3 from "~/assets/img/freelance/service-bg3.png";

  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "own-franchise",
    layout: 'ukStatic',
    ssr: true,
    head: {
      title: 'Jacob Electric | Franchise',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Wondering how to start a small electrical contractor business in Washington? You don\'t have to fly solo.' +
            ' Own a Jacob Electric franchise and enjoy a seamless and lucrative business in no time.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'how to start a small electrical contractor business, electrical business opportunities, how to start an electrical contracting business'
        },
      ],
    },
    components:{
      banner,
      electricTeam,
      serviceCard,
      verticalBox,
      serviceForm,
      carousel

    },

    data() {
      return {
        residentialBannerTitle: 'Need An Electrician for your home?',
        residentialBannerDesc:'You’ll receive amazing 5 start service and consistently fair pricing, everytime.',
        diffAppTitle1:'Download app and sign up',
        diffAppTitle2:'Receive Job Alert',
        diffAppTitle3:'Get paid',
        diffAppDesc1:'Download Jacob Electric app and submit you’re an expression ' +
          'of interest form. Our administrative team will review your' +
          ' application and approve you.',
        diffAppDesc2:'You will get notification of every job we have concluded in your area. All you need ' +
          'is to turn up at our customer home to get the job done.',
        diffAppDesc3:'The more work you accept, the more you get paid. Once you have ' +
          ' completed the job and notify the office via the app,' +
          ' your payment is credited into your preferred payment option.',
        freelanceCardBG1:freelanceCardBgSrc1,
        freelanceCardBG2:freelanceCardBgSrc2,
        freelanceCardBG3:freelanceCardBgSrc3,
        freelanceCardTitle1:'Make money on your own terms',
        freelanceCardTitle2:'Make money on your own terms',
        freelanceCardTitle3:'Make money on your own terms',
        freelanceCardDesc1:'Work when and where you want to. And choose how and when you want to get paid.',
        freelanceCardDesc2:'Work when and where you want to. And choose how and when you want to get paid.',
        freelanceCardDesc3:'Work when and where you want to. And choose how and when you want to get paid.',
      }
    }

  }
</script>

<style scoped>
  .franchise-banner{
    height: 500px;
    background-image: url("assets/img/own-franchise/banner-bg-svg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  /* applicationProcessBox --*/
  .applicationProcessBox{
    box-shadow: 3px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 0px 0 50px 0;
    margin: 10px;
  }
  .applicationProcessBox .bg-warf{
    padding: 35px;
    height: 260px;
    margin: 0 auto;

  }
  .applicationProcessBox .content{
     height: 180px;
  }
  .applicationProcessBox .bg-warf img{
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
  .applicationProcessBox h3{
    padding: 15px 0;
  }
  @media only screen and (min-width: 800px) and (max-width: 1265px) {
    .applicationProcessBox .bg-warf img{
      width: 50%;
      object-fit: contain;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 799px) {
    .applicationProcessBox .bg-warf img{
      width: 50%;
      object-fit: contain;
      margin: 0 auto;
    }
  }
  /*-- howLong --*/
  @media only screen  and (min-width: 991px) {
    .howLong img{
      width: 50%!important;
    }

  }
</style>
