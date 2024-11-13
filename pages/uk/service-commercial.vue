<template>
  <div class="service-commercial">
    <div class="commercial-banner">
      <banner
        :serviceBannerTitle="residentialBannerTitle"
        :serviceBannerDesc="residentialBannerDesc"
      >
      </banner>
    </div><!-- end banner -->
    <div class="clients-value sec-padding">
      <h2 class="sec-title text-center">Enjoy superb service and value</h2>
      <v-container>
        <v-row class="mt-10">
          <v-col md="10" offset-md="1">
            <v-row>
              <v-col md="6" cols="12" class="text-center">
                <div class="clients-value-box">
                  <img src="@/assets/img/services/commercial/commercial-value-1.png">
                  <h3>Communication is our strong suit</h3>
                  <p class="mt-4">We take pride in our team work and transparency, and we communicate with our electricians
                    and clients effectively to ensure that each project is completed successfully.
                    Rest assured that when you choose our commercial electrical services, you are in good hands.</p>
                </div>
              </v-col>
              <v-col md="6" cols="12" class="text-center">
                <div class="clients-value-box">
                  <img src="@/assets/img/services/commercial/commercial-value-2.png">
                  <h3>We respect your time</h3>
                  <p class="mt-4">We are known for completing projects on or before deadlines—always.
                    In fact, we have promised a £50 cash back on time guarantee.
                    Prompt and successful delivery is the name of the game, and we make sure to stay on top of things.  </p>
                </div>
              </v-col>
              <v-col md="6" cols="12" class="text-center">
                <div class="clients-value-box">
                  <img src="@/assets/img/services/commercial/commercial-value-3.png">
                  <h3>No cutting corners</h3>
                  <p class="mt-4">Quality is our priority, always. We don’t rush projects or skimp on
                    resources. We take pride in our workmanship, and our repeat clients can attest to that.
                    In fact, we offer full lifetime warranty on all our repairs and installations.
                    All of our commercial electricians comply with Workplace Health and safety standards as well.</p>
                </div>
              </v-col>
              <v-col md="6" cols="12" class="text-center">
                <div class="clients-value-box">
                  <img src="@/assets/img/services/commercial/commercial-value-4.png">
                  <h3>You’re never just a number</h3>
                  <p class="mt-4">We consider doing business as all about fostering relationships,
                    long-term connections at that. We never treat every transaction like it’s a mere
                    ‘sale’. We consider every encounter as a form of trust that the clients
                    have graced us. We strive to not let clients down by offering the best electrical services in Britain.
                  </p>
                </div>
              </v-col>

            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div> <!-- /. clients-value -->

    <div class="services-sec">
      <h2 class="sec-title text-center mb-10">Commercial Service</h2>
      <v-container>
        <div class="services-item-box">
          <v-row>
            <v-col md="1" cols="12" class="ma-auto">
              <h3 class="text-center">01</h3>
            </v-col>
            <v-col md="4" cols="12" class="ma-auto text-center">
              <img src="@/assets/img/services/commercial/commercial-service-1.png">
            </v-col>
            <v-col md="7" cols="12" class="ma-auto pl-5">
              <v-row>
                <v-col md="12" cols="12" class="pb-0 text-md-left text-center d-none">
                  <h3>Electrical Safety</h3>
                </v-col>
                <v-col md="5" cols="12">
                  <ul>
                    <li>Diagnosis and Repair</li>
                    <li>Code updates and corrections</li>
                    <li>Installations and Panel Upgrades</li>
                    <li>Offices/Buildings Remodeling</li>
                  </ul>
                </v-col>
                <v-col md="7" cols="12">
                  <ul>
                    <li>Energy Saving Utility Rebates</li>
                    <li>Electrical and Tenant Improvements</li>
                    <li>Full and Partial Rewiring</li>
                    <li>Energy Savings and Audits</li>
                    <li>Generator and Transformers</li>
                  </ul>
                </v-col>

              </v-row>
            </v-col>
          </v-row>
        </div><!-- /.  services-item-box -->
        <div class="services-item-box">
          <v-row>
            <v-col md="1" cols="12" class="ma-auto">
              <h3 class="text-center">02</h3>
            </v-col>
            <v-col md="4" cols="12" class="ma-auto text-center">
              <img src="@/assets/img/services/commercial/commercial-service-2.png">
            </v-col>
            <v-col md="7" class="ma-auto pl-5">
              <v-row>
                <v-col md="12" cols="12" class="pb-0 text-md-left text-center d-none">
                  <h3>Installations</h3>
                </v-col>
                <v-col md="5" cols="12">
                  <ul>
                    <li>General Electrical Maintenance</li>
                    <li>Three-Phase Power and Control</li>
                    <li>All Types of Lighting/LEDs Installation</li>
                    <li>All Types of Fluorescent and Ballast Installation</li>
                  </ul>
                </v-col>
                <v-col md="7" cols="12">
                  <ul>
                    <li>Testing, Safety and Inspection</li>
                    <li>Installation Low-voltage Applications</li>
                    <li>Customization Electrical Control Panel</li>
                    <li>Machines or Equipment Hook-ups</li>
                    <li>Data Cable/Network, CCTV and Fire Alarm</li>
                  </ul>
                </v-col>

              </v-row>
            </v-col>
          </v-row>
        </div><!-- /.  services-item-box -->
      </v-container>
    </div><!-- /. services-sec -->

    <div class="sec-padding">
      <v-container>
        <div class="text-center mb-7">
          <h2 class="sec-title">The go-to electrical services in England</h2>
          <p class="mt-4">Here are the cities we proudly serve.</p>
        </div>
        <locationCard/>
      </v-container>
    </div>

    <div class="sec-padding">
      <testimonial/>
    </div><!-- /. testimonial -->

    <div class="bonus-options sec-padding pt-0">
       <v-container>
          <v-row>
            <v-col md="5" cols="12">
              <h2 class="sec-title text-md-left text-center">The go-to electrical services in England</h2>
              <div class="bg text-center">
                <img class="w-full" src="@/assets/img/services/commercial/bonus-bg.png" alt="bg">
              </div>
            </v-col>
            <v-col md="6">
              <v-card elevation="0">
                <h3 class="mb-3">Regular maintenance program</h3>
                <p>Our automated maintenance program will send you an email reminding you that areas of your
                  business are due for maintenance.
                  This gives you peace of mind that your business is being proactively maintained and minimizes
                  the risk of emergency repairs.</p>
              </v-card>
              <v-divider class="mt-5 mb-5"></v-divider>
              <v-card elevation="0">
                <h3 class="mb-3">A Wider coverage and Support</h3>
                <p>With our electricians all over, we can provide support for your business in Greater
                  London, East of England, South East, South West, East Midlands and West Midlands.
                  If you have multiple locations,
                  we can take care of them all, which saves you time and money on sourcing and handling
                  numerous electrical organizations..</p>
              </v-card>
              <v-divider class="mt-5 mb-5"></v-divider>
              <v-card elevation="0">
                <h3 class="mb-3">Emergency rapid response</h3>
                <p>If you experience an electrical emergency or breakdown, Jacob Electric
                  offers an emergency rapid response that will send an electrician on-site
                  within two hours.</p>
              </v-card>
              <v-divider class="mt-5 mb-5"></v-divider>
              <v-card elevation="0">
                <h3 class="mb-3">Jacob Technology</h3>
                <p>Jacob Technology ensures you are aware of every
                  steps of the job and you will receive notification
                  in rea- time all your quotes, jobs, invoices and general information.</p>
              </v-card>
              <v-divider class="mt-5 mb-5"></v-divider>
              <v-card elevation="0">
                <h3 class="mb-3">24/7 Support</h3>
                <p>We have electricians on call 24 hours a day, 7 days a week, 365 days a year. So if you urgently
                  need an electrician outside of business hours,
                  you can call our emergency line and be transferred to the electrician on-call round the clock.</p>
              </v-card>
            </v-col>
          </v-row>
       </v-container>
    </div><!--/. bonus-options -->

    <div class="sec-padding light-bg">
      <electricTeam/>
    </div>

    <div class="sec-padding">
      <v-container>
        <v-row>
          <v-col md="8" cols="12" class="ma-auto">
            <h2 class="text-md-left text-center">We are one of American triple endorsed team Quality, Environment, Health & Safety</h2>
            <img class="w-full d-md-none d-block" src="@/assets/img/services/residential/amarican-triphone.png" alt="feature">
            <p class="mt-7">As a quality endorsed electrical company in Washington, you don’t have to worry about risks and glitches.
              We have earned this high-quality endorsement due to our
              commitment to delivering quality services and maximum safety. We are available 24/7 for all your commercial electrical needs.</p>
          </v-col>
          <v-col md="4">
            <img class="w-full d-md-block d-none" src="@/assets/img/services/residential/amarican-triphone.png" alt="feature">
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="requestConsultation">
      <serviceForm/>
    </div>

  </div>
</template>

<script>
  import '~/assets/css/reset.css';
  import banner from '~/components/static/services/banner';
  import locationCard from '~/components/static/cards/location-card';
  import testimonial from '~/components/static/services/testimonial';
  import electricTeam from '~/components/static/uk-version/services/electric-team';
  import serviceForm from '~/components/static/services/service-form';

  export default {
    name: "service-commercial",
    layout: 'ukStatic',
    ssr: true,
    head: {
      title: 'Jacob Electric | Commercial Electrical Contractor in Washington',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Jacob Electric offers sought-after commercial electrical services in Washington. We help businesses operate seamlessly round the clock.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'electrical services washington, washington electrical services, Emergency electrical service washington, \n' +
            'washington electricians, electricians in washington, best electricians washington, commercial electrical services in Washington, commercial electricians in Washington'
        },
      ],
    },
    components:{
      banner,
      locationCard,
      testimonial,
      electricTeam,
      serviceForm
    },

    data() {
      return {
        residentialBannerTitle: 'Need an electrician for your commercial property?',
        residentialBannerDesc:'We have your business covered. Our skilled electricians in Washington offer 5-star service every time.'
      }
    }

  }
</script>

<style scoped>
  .commercial-banner{
    background-image: url("assets/img/services/commercial/banner.jpg");
    background-size: cover;

  }

  /*-- clients-value-box  --*/

  .clients-value-box{
    padding: 50px;
  }
  @media only screen and (max-width: 500px) {
    .clients-value-box{
      padding: 5px;
    }
  }
  .clients-value-box img{
    width: 100%;
    height: 250px;
    object-fit: contain;
  }
  .clients-value-box h3{
    margin-top: 25px;
  }



  /*-- service-residential --*/
  .services-item-box{
    padding: 30px 0;
    border: 1px solid #ADADAD;
  }
  .feature-item h3{
    font-size: 16px;
    margin-top: 15px;
  }
  /*-- bonus sec --*/
  .bonus-options .bg img{
    width: 90%!important;
    margin-top: 100px;
  }
  @media only screen and (max-width: 768px) {
    .bonus-options .bg img {
      width: 100% !important;
      margin-top: 10px;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 965px) {
    .bonus-options .bg img {

      margin-top: 40px;
      width: 70% !important;
    }
  }

</style>
