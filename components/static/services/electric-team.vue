<template>
  <div class="electric-team d-flex justify-center flex-column">
    <v-container>
       <v-row>
         <v-col md="5" cols="12" class="ma-auto">
           <div class="mr-lg-8 mr-0">
             <h2>Your satisfaction is our priority</h2>
             <p class="mt-5">We only work with the most experienced and qualified electricians in Washington that can pull
               off even the most difficult electrical work. We offer a lifetime warranty on all of our electrical repairs
               and installations. That reflects our confidence in what we do. Our team is also welcoming and helpful
               and will go the extra mile to give you the best commercial electrical services and customer experience. </p>
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


</template>

<script>

  export default {
    name: "electric-team",
  }
</script>


<style scoped>
  .feature-item img{
       width: 80px;
  }
</style>
