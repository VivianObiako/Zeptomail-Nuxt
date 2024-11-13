<template>
  <div>
    <div class="banner d-flex justify-center align-center">
        <v-container>
          <v-row>
            <carousel :autoplay="true" :nav="false"
                      :responsive="{
                0:{items:1,nav:false}, }">

              <div class="banner-item">
                <v-row>
                  <v-col md="6" class="ma-auto">
                    <h2 class="sec-title display-2">Focus on your business. We'll crunch the numbers.</h2>
                    <h3 class="text-h6 mt-5 font-weight-normal">Simple, smart accounting software and expert support – all in one place.
                      From invoices and expenses to VAT, taxes and time tracking, we’ve got you
                      covered.</h3>
                    <div class="banner-btns mt-5">
                      <v-btn color="primary" height="45">
                        See plans & pricing
                      </v-btn>
                    </div>
                    <p class="mt-5">No contracts, cancel anytime - Making Tax Digital ready - HMRC recognised</p>

                  </v-col>
                  <v-col md="6" class="text-center">
                    <img class="offer" src="@/assets/img/uk-version/index/tab-save-90-12-july.png" alt="features">
                    <video width="100%" autoplay muted loop  src="@/assets/img/uk-version/index/tab-1e.mp4" ref="video"></video>
                  </v-col>

                </v-row>
              </div><!-- /. service-card-item -->

            </carousel>

          </v-row>
        </v-container>
    </div><!--/.  banner -->


    <div class="features-sec sec-padding">
      <v-container>
        <v-row>
          <v-col md="4">
             <div class="features-box">
               <img src="@/assets/img/uk-version/index/features-bg-1.webp" alt="features">
               <h2>Stay on top of taxes</h2>
               <p class="mt-2">Self Assessment, VAT, payroll and construction taxes (CIS) -
                 there’s no drama about deadlines when all your info’s already
                 in QuickBooks.</p>
               <v-btn color="primary" height="40" class="mt-3">
                 Learn more
               </v-btn>
             </div>
          </v-col>
          <v-col md="4">
            <div class="features-box">
              <img src="@/assets/img/uk-version/index/features-bg-2.webp" alt="features">
              <h2>Stay on top of taxes</h2>
              <p class="mt-2">Self Assessment, VAT, payroll and construction taxes (CIS) -
                there’s no drama about deadlines when all your info’s already
                in QuickBooks.</p>
              <v-btn color="primary" height="40" class="mt-3">
                Learn more
              </v-btn>
            </div>
          </v-col>
          <v-col md="4">
            <div class="features-box">
              <img src="@/assets/img/uk-version/index/features-bg-3.webp" alt="features">
              <h2>Stay on top of taxes</h2>
              <p class="mt-2">Self Assessment, VAT, payroll and construction taxes (CIS) -
                there’s no drama about deadlines when all your info’s already
                in QuickBooks.</p>
              <v-btn color="primary" height="40" class="mt-3">
                Learn more
              </v-btn>
            </div>
          </v-col>

        </v-row>
      </v-container>

    </div><!--/. features-sec-->


    <div class="spend-with-admin light-bg py-16">
      <v-container>
        <v-row>
          <v-col md="6" class="d-flex justify-center flex-column">
            <h2 class="sec-title">Spend less time on <br> admin</h2>
            <p>Find more time for yourself and your business.</p>

            <v-expansion-panels accordion class="mt-5"  v-model="SpenFaq" multiple  >

                  <v-expansion-panel class="SpendFaqPanel">
                    <v-expansion-panel-header>Bring in your bank data</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      End hours of data entry when you connect your banks and credit cards.
                      See transactions in real-time for a clear view of cash flow.
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel class="SpendFaqPanel">
                    <v-expansion-panel-header>Bring in your bank data</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      End hours of data entry when you connect your banks and credit cards.
                      See transactions in real-time for a clear view of cash flow.
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel class="SpendFaqPanel">
                    <v-expansion-panel-header>Bring in your bank data</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      End hours of data entry when you connect your banks and credit cards.
                      See transactions in real-time for a clear view of cash flow.
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel class="SpendFaqPanel">
                    <v-expansion-panel-header>Bring in your bank data</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      End hours of data entry when you connect your banks and credit cards.
                      See transactions in real-time for a clear view of cash flow.
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel class="SpendFaqPanel">
                    <v-expansion-panel-header>Bring in your bank data</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      End hours of data entry when you connect your banks and credit cards.
                      See transactions in real-time for a clear view of cash flow.
                    </v-expansion-panel-content>
                  </v-expansion-panel>


                </v-expansion-panels>


          </v-col>
          <v-col md="6">
            <div class="bg">
              <img src="@/assets/img/uk-version/index/feature-bg-1.webp" alt="features">
            </div>
          </v-col>
        </v-row>

      </v-container>
    </div><!-- /. spend-with-admin-->


    <div class="type-business">
      <v-container>
        <v-row>
          <v-col md="12">
            <v-row>
              <v-col md="4">
                <h2 class="sec-title text-center">For your type of business</h2>
              </v-col>
            </v-row>
          </v-col>

          <v-col md="4">
            <div class="type-business-box">
              <img src="@/assets/img/uk-version/index/type-of-business-1.jpg" alt="typ of business">
              <h3>Sole trader</h3>
              <p class="mt-4">Self-employed? We can help you stay on top of your income, expenses, mileage, invoices and taxes to keep HMRC happy.</p>
              <v-btn color="primary" height="40" class="mt-5">Find out how we can help</v-btn>
            </div>
          </v-col>

          <v-col md="4">
            <div class="type-business-box">
              <img src="@/assets/img/uk-version/index/type-of-business-1.jpg" alt="typ of business">
              <h3>Sole trader</h3>
              <p class="mt-4 white--text">Self-employed? We can help you stay on top of your income, expenses, mileage, invoices and taxes to keep HMRC happy.</p>
              <v-btn color="primary" height="40" class="mt-5">Find out how we can help</v-btn>
            </div>
          </v-col>

          <v-col md="4">
            <div class="type-business-box">
              <img src="@/assets/img/uk-version/index/type-of-business-1.jpg" alt="typ of business">
              <h3>Sole trader</h3>
              <p class="mt-4">Self-employed? We can help you stay on top of your income, expenses, mileage, invoices and taxes to keep HMRC happy.</p>
              <v-btn color="primary" height="40" class="mt-5">Find out how we can help</v-btn>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </div>


    <div class="business-apps">
      <v-container>
         <v-row>
            <v-col md="6">
              <h2>Join the dots with business apps and bank connections</h2>
              <p>Fire up the power of QuickBooks when you link and sync with all your favourite business apps.</p>
              <p>Bring in your bank and credit card details too and enjoy game-changing automation.</p>
              <v-btn>Browse our supported apps</v-btn>
              <v-btn>Browse our supported apps</v-btn>

            </v-col>
         </v-row>
      </v-container>

    </div><!--/. business-apps -->



  </div>
</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "uk-site---ll",
    components: { carousel },
    data: () => ({
      SpenFaq: [0,],
    }),

  }
</script>


<style scoped>
  .banner{
    height: 600px;
  }
  .banner-item .offer{
    height: 280px;
    width: 280px;
    position: absolute;
    right: 0;
    top: 50px;
  }

  .banner-item h2{
    line-height: 65px;
    font-weight: bold;
  }
  .location-card-item{
    padding: 15px;
  }


  /*-- features-box --*/

 .features-sec .features-box img{

   height: 200px;
   object-fit: contain;
  }


  /*-- spend-with-admin --*/

  .spend-with-admin .bg img{
     width: 500px;
    height: 500px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }
  .spend-with-admin .v-expansion-panel-header--active{
    color: red;
  }
  .spend-with-admin .SpendFaqPanel{
     box-shadow: 0 0 transparent;
  }
  .spend-with-admin  .v-expansion-panel::before{
    box-shadow: 0px 0px transparent;
  }

  /*-- type-business --*/
  .type-business{
    background-color: #403f3e;
    color: white;
  }
  .type-business .type-business-box img{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .type-business .type-business-box p{
    color: #fff;
  }
</style>
