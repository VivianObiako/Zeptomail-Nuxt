<template>
  <div class="lead-collection light-bg py-16">
    <v-container>
      <v-row>
        <v-col md="6" offset-md="3">
          <v-stepper v-model="e1">
            <v-stepper-items class="pb-5">
              <v-stepper-content step="1">
                <v-card  elevation="0">
                  <div class="lead-step-box text-center">
                    <h3 class="text-h5 font-weight-bold">Jacob Electric marketplace connects you to highly training local electricians</h3>
                    <h4 class="mt-4">Enter the location of your project</h4>
                    <v-text-field dense class="mt-8 lc-field" outlined height="50px" width="200" placeholder="Your city/region or state">
                    </v-text-field>
                  </div>

                </v-card>
                <v-btn color="primary" @click="e1 = 2" width="150" height="40" class="text-center d-block ma-auto">
                  Next
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">

                  <div class="lead-step-box text-center">
                    <h3 class="text-h5 font-weight-bold">What kind of electrical work or installation do you need?</h3>
                    <v-row>
                      <v-col md="6" class="text-center">
                        <v-checkbox  label="Fixture(s)"  color="primary" value="Fixture(s)"  hide-details="auto" ></v-checkbox>
                        <v-checkbox  label="Outlet(s)"  color="primary" value="Outlet(s)"  hide-details="auto" ></v-checkbox>
                        <v-checkbox  label="Lighting"  color="primary" value="Lighting"  hide-details="auto" ></v-checkbox>
                        <v-checkbox  label="Switch(es)"  color="primary" value="Switch(es)"  hide-details="auto" ></v-checkbox>
                        <v-checkbox  label="Lightning protection"  color="primary" value="lightning_protection"  hide-details="auto" ></v-checkbox>
                      </v-col>
                      <v-col md="6">
                        <v-checkbox  label="Electrical systems"  color="primary" value="Electrical systems"  hide-details="auto" ></v-checkbox>
                        <v-checkbox  label="Electrical panel"  color="primary" value="Electrical panel"  hide-details="auto" ></v-checkbox>
                        <v-checkbox  label="Generator"  color="primary" value="Generator"  hide-details="auto" ></v-checkbox>
                        <v-checkbox  label="Electrical panel"  color="primary" value="Electrical panel"  hide-details="auto" ></v-checkbox>
                        <v-checkbox  label="Vehicle charger"  color="primary" value="Vehicle charger"  hide-details="auto" ></v-checkbox>
                      </v-col>

                    </v-row>
                  </div>
                   <div class="text-center pt-10 ma-auto">
                     <v-btn  color="primary" @click="e1 = 1" width="150" height="40"   class="mr-3">
                       Previous
                     </v-btn>
                     <v-btn  color="primary" @click="e1 = 3" width="150" height="40" class="ml-3">
                       Next
                     </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="3">

                <div class="lead-step-box text-center">
                  <h3 class="text-h5 font-weight-bold">What status best described this project?</h3>
                  <div class="ml-5">
                    <v-checkbox  label="Ready to Hire"  color="primary" value="ready-to-hire"  hide-details="auto"></v-checkbox>
                    <v-checkbox  label="Planning Stage"  color="primary" value="planning-stage"  hide-details="auto" ></v-checkbox>
                  </div>
                </div>
                <div class="text-center pt-10 ma-auto">
                  <v-btn  color="primary" @click="e1 = 2" width="150" height="40"   class="mr-3">
                    Previous
                  </v-btn>
                  <v-btn  color="primary" @click="e1 = 4" width="150" height="40" class="ml-3">
                    Next
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="4">
                <div class="lead-step-box text-center">
                  <h3 class="text-h5 font-weight-bold">What kind of location is this?</h3>
                  <div class="ml-5">
                    <v-checkbox  label="Residential / Home"  color="primary" value="residential-home"  hide-details="auto" ></v-checkbox>
                    <v-checkbox  label="commercial-business"  color="primary" value="commercial-business"  hide-details="auto" ></v-checkbox>
                    <v-checkbox  label="Industrial / Factory"  color="primary" value="industrial-factory"  hide-details="auto" ></v-checkbox>

                  </div>
                </div>
                <div class="text-center pt-10 ma-auto">
                  <v-btn  color="primary" @click="e1 = 3" width="150" height="40"   class="mr-3">
                    Previous
                  </v-btn>
                  <v-btn  color="primary" @click="e1 = 5" width="150" height="40" class="ml-3">
                    Next
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="5">
                <div class="lead-step-box text-center">
                  <h3 class="text-h5 font-weight-bold">Please tell us a little about your proposed project</h3>
                  <div class="mt-8">
                    <v-textarea
                      outlined
                      placeholder="A brief about what you want done (optional)"
                    ></v-textarea>
                  </div>
                </div>
                <div class="text-center pt-5 ma-auto">
                  <v-btn  color="primary" @click="e1 = 4" width="150" height="40"   class="mr-3">
                    Previous
                  </v-btn>
                  <v-btn  color="primary" @click="e1 = 6" width="150" height="40" class="ml-3">
                    Next
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="6">
                <div class="lead-step-box text-center">
                  <h3 class="text-h5 font-weight-bold">What's your name?</h3>
                  <div class="mt-8">
                    <v-text-field dense class="mt-8 lc-field" outlined height="45" width="200"
                                  placeholder="First Name" hide-details="auto">
                    </v-text-field>
                    <v-text-field dense class="mt-5 lc-field" outlined height="45" width="200"
                                  placeholder="Last Name" hide-details="auto">
                    </v-text-field>
                  </div>
                </div>
                <div class="text-center pt-10 ma-auto">
                  <v-btn  color="primary" @click="e1 = 5" width="150" height="40"   class="mr-3">
                    Previous
                  </v-btn>
                  <v-btn  color="primary" @click="e1 = 7" width="150" height="40" class="ml-3">
                    Next
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="7">
                <div class="lead-step-box text-center">
                  <h3 class="text-h5 font-weight-bold">Give us your contact so that we can send you electrician!</h3>
                  <div class="mt-8">
                    <v-row>
                      <v-col cols="4">
                        <v-select outlined height="50px"
                                  :items="dialing_code"
                                  :placeholder=dialing_code[1]
                        ></v-select>
                      </v-col>
                      <v-col cols="8">
                        <v-text-field dense class="lc-field" outlined height="50px" width="200"
                                      placeholder="Phone" hide-details="auto">
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-text-field dense class="lc-field" outlined height="50px" width="200"
                                  placeholder="Email" hide-details="auto">
                    </v-text-field>
                    <v-checkbox  label="Yes, I would like to be contacted for estimate"  color="primary" value="agreed_kodkkk"
                                 hide-details="auto" ></v-checkbox>

                  </div>
                </div>
                <div class="text-center pt-5 ma-auto">
                  <v-btn  color="primary"  width="180" height="45" class="mr-3" to="/confirmation">
                    Submit
                  </v-btn>
                  <p class="mt-8">By clicking Submit, you affirm you have read and agree to the Jacob Electric a
                     <nuxt-link to="/terms">Terms</nuxt-link> and you agree Jacob Electric and its networks of <nuxt-link to="/terms">Service Professionals</nuxt-link>  may
                    use automated technology to deliver marketing calls, texts, or emails to the number
                    or email you provided regarding your project. You also agree Jacob Electric and its
                    franchisee may use automated technology to deliver marketing calls, texts, or emails
                    to you regarding offers. Consent is not a condition of purchase.
                  </p>
                </div>
              </v-stepper-content>



            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>

<script>
  export default {
    name: "lead-collection",
    layout: 'static',
    ssr: true,
    head: {
      title: 'Jacob Electric | Electrical Services Washington',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: ' '
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '  '
        },
      ],
    },
    data () {
      return {
        e1: 1,
        dialing_code: ['+44- United Kingdom', '+1- United States', '+880- Bangladesh', '+233- Ghana'],
      }
    },
    components:{
    },

  }
</script>

<style scoped>
.lead-collection .lead-step-box{
  padding: 35px 35px 5px 35px;
}
</style>
