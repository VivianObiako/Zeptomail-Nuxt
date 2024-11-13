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
                  <p class="mt-4">We take pride in our team work and
                    transparency, and we communicate with
                    our electricians and clients effectively to
                    ensure that each project is completed
                    successfully. Rest assured that when you
                    choose our commercial electrical services,
                    you are in good hands..</p>
                </div>
              </v-col>
              <v-col md="6" cols="12" class="text-center">
                <div class="clients-value-box">
                  <img src="@/assets/img/services/commercial/commercial-value-2.png">
                  <h3>We respect your time</h3>
                  <p class="mt-4">Time is Money. We complete our projects
                    on or before deadlines—always. In fact, we
                    have promised N5000 cash back on time
                    guarantee. Prompt and successful delivery
                    is the name of the game, and we make sure
                    to stay on top of things. </p>
                </div>
              </v-col>
              <v-col md="6" cols="12" class="text-center">
                <div class="clients-value-box">
                  <img src="@/assets/img/services/commercial/commercial-value-3.png">
                  <h3>No cutting corners</h3>
                  <p class="mt-4">Quality is our priority, always. We don’t
                    rush projects or skimp on resources. We
                    take pride in our workmanship, and our
                    repeat clients can attest to that. In fact, we
                    offer full extended warranty on all our

                    repairs and installations. We ensure all of
                    our commercial electricians comply with
                    Workplace Health and Safety Standards.</p>
                </div>
              </v-col>
              <v-col md="6" cols="12" class="text-center">
                <div class="clients-value-box">
                  <img src="@/assets/img/services/commercial/commercial-value-4.png">
                  <h3>You’re never just a number</h3>
                  <p class="mt-4">Our business is all about fostering long-
                    term connections and relationships. Every
                    transaction is different and personal. And
                    not considered a mere ‘Sale’. We consider
                    every encounter as a form of trust that the
                    clients have graced us. We strive to not let
                    clients down by offering the best electrical

                    services in Nigeria.
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

    <div class="sec-padding pb-0">
      <v-container>
        <div class="text-center mb-6">
          <h2 class="sec-title">Your Best Electricians in Nigeria</h2>
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
            <h2 class="sec-title text-md-left text-center">The Go-To Electrical Services in Nigeria</h2>
            <div class="bg text-center">
              <img class="w-full" src="@/assets/img/services/commercial/bonus-bg.png" alt="bg">
            </div>
          </v-col>
          <v-col md="6">
            <v-card elevation="0">
              <h3 class="mb-3">Regular maintenance program</h3>
              <p>Our automated maintenance program will
                send you an email reminding you that areas
                of your business are due for maintenance.
                This gives you peace of mind that your
                business is being proactively maintained
                and minimizes the risk of emergency
                repairs.</p>
            </v-card>
            <v-divider class="mt-5 mb-5"></v-divider>
            <v-card elevation="0">
              <h3 class="mb-3">A Wider Coverage and Support</h3>
              <p>With our electricians all over, we can
                provide support for your business in most

                states in Nigeria If you have multiple
                locations, we can take care of them all,
                which saves you time and money on
                sourcing and handling numerous electrical
                organizations.</p>
            </v-card>
            <v-divider class="mt-5 mb-5"></v-divider>
            <v-card elevation="0">
              <h3 class="mb-3">Emergency rapid response</h3>
              <p>If you experience an electrical emergency or
                breakdown, Jacob Electric offers an
                emergency rapid response that will send an
                electrician on-site within two hours.</p>
            </v-card>
            <v-divider class="mt-5 mb-5"></v-divider>
            <v-card elevation="0">
              <h3 class="mb-3">Jacob Live</h3>
              <p>Jacob Technology ensures you are aware of
                every steps of the job and you will receive
                notification in rea- time all your quotes,
                jobs, invoices and general information.</p>
            </v-card>
            <v-divider class="mt-5 mb-5"></v-divider>
            <v-card elevation="0">
              <h3 class="mb-3">24/7 Support</h3>
              <p>We have electricians on call 7 days a week,
                365 days a year. So if you urgently need an
                electrician outside of business hours, you
                can call our emergency line and be
                transferred to an electrician on-call.</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div><!--/. bonus-options -->


      <div class="sec-padding light-bg">
        <div class="electric-team d-flex justify-center flex-column">
          <v-container>
            <v-row>
              <v-col md="5" cols="12" class="ma-auto">
                <div class="mr-lg-8 mr-0">
                  <h2>Your satisfaction is our priority</h2>
                  <p class="mt-5">We only work with the most experienced
                    and qualified electricians that can pull off
                    even the most difficult electrical work. We
                    offer an extended warranty on all of our
                    electrical repairs and installations. That
                    reflects our confidence in what we do. Our
                    team is also welcoming and helpful and will
                    go the extra mile to give you the best
                    commercial electrical services and customer
                    experience.
                    experience.</p>
                </div>
              </v-col>
              <v-col md="7" cols="12">
                <v-row>
                  <v-col md="12">
                    <v-row>
                      <v-col md="3">
                        <div class="feature-item text-center">
                          <img src="@/assets/img/services/feature-icon-1.svg" alt="feature">
                          <p class="mt-7">Join thousands of satisfied customers<p/>
                        </div>
                      </v-col>

                      <v-col md="3">
                        <div class="feature-item text-center">
                          <img src="@/assets/img/services/feature-icon-2.svg" alt="feature">
                          <p class="mt-7">Upfront pricing<p/>
                        </div>
                      </v-col>

                      <v-col md="3">
                        <div class="feature-item text-center">
                          <img src="@/assets/img/services/feature-icon-3.svg" alt="feature">
                          <p class="mt-7">Licensed, Bonded & Insured<p/>
                        </div>
                      </v-col>

                      <v-col md="3">
                        <div class="feature-item text-center">
                          <img src="@/assets/img/services/feature-icon-4.svg" alt="feature">
                          <p class="mt-7">Expert Advice & Smart Solutions<p/>
                        </div>
                      </v-col>

                    </v-row>

                  </v-col>
                  <v-col md="12" cols="12" class="d-md-block d-none">
                    <v-divider></v-divider>
                  </v-col>
                  <v-col md="8" cols="12">
                    <v-row>

                      <v-col md="4">
                        <div class="feature-item text-center">
                          <img src="@/assets/img/services/feature-icon-5.svg" alt="feature">
                          <p class="mt-7">5 Star Service<p/>
                        </div>
                      </v-col>

                      <v-col md="4">
                        <div class="feature-item text-center">
                          <img src="@/assets/img/services/feature-icon-6.svg" alt="feature">
                          <p class="mt-7">Lifetime Warranty<p/>
                        </div>
                      </v-col>

                      <v-col md="4">
                        <div class="feature-item text-center">
                          <img src="@/assets/img/services/feature-icon-7.svg" alt="feature">
                          <p class="mt-7">Available on your schedule<p/>
                        </div>
                      </v-col>

                    </v-row>

                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>

        </div>
      </div>


    <div class="sec-padding">
      <v-container>
        <v-row>
          <v-col md="8" cols="12" class="ma-auto">
            <h2 class="text-md-left text-center">We are one of Nigeria’s triple endorsed
              teams in terms of Quality, Environment, Health, &amp; Safety</h2>
            <img class="w-full d-md-none d-block" src="@/assets/img/services/residential/amarican-triphone.png" alt="feature">
            <p class="mt-7">As a quality endorsed electrical company,
              you don’t have to worry about risks and
              glitches. We have earned this high-quality
              endorsement due to our commitment to
              delivering quality services and maximum
              safety. We are available 7 days a week for
              all your commercial electrical needs.</p>
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
  import locationCard from '~/components/static/ng-version/location-card';
  import testimonial from '~/components/static/services/testimonial';
  import electricTeam from '~/components/static/services/electric-team';
  import serviceForm from '~/components/static/services/service-form';

  export default {
    name: "service-commercial",
    layout: 'ngStatic',
    ssr: true,
    head: {
      title: 'Jacob Electric | Commercial Electrical Contractor in Nigeria\n',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Jacob Electric offers sought-after commercial electrical services in Nigeria. We help businesses operate seamlessly round the clock.\n'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'electrical services Nigeria, Nigeria electrical services, \n' +
            'Emergency electrical service Nigeria, \n' +
            'Nigeria electricians, electricians in Nigeria, best electricians Nigeria, commercial electrical services in Nigeria, commercial electricians in' +
            ' Nigeria"\n Commercial Electrician 9802, Commercial Electrical Installation 98021, Commercial Electrical Wiring Service Bothell WA, Commercial Electrical' +
            ' Installation Service Bothell WA, Commercial Wiring Service Bothell WA, Commercial Electrical Systems Bothell WA, ' +
            ' Electrical Service Bothell WA\n'
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
        residentialBannerDesc:'We have your business covered. Our skilled electricians in Nigeria offer 5-star service every time.'
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
