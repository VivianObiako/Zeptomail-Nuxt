<template>
  <div class="homeAdvisor light-bg">
    <v-container>
      <div class="banner my-5">
        <v-row>
          <v-col md="8" cols="12">
            <div class="text d-flex align-start flex-column justify-center">
              <h2 class="sec-title text-white">
                Looking for a trusted Electrical, Plumbing, HVAC company for your home project?
              </h2>
              <ValidationObserver ref="form" v-slot="{ invalid }">
                <div class="search-field d-flex mt-10 align-center">
                  <ValidationProvider
                    vid="looking"
                    name="Plumbing"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <v-autocomplete
                      background-color="white"
                      prepend-inner-icon="mdi-magnify"
                      v-model="data.work_types"
                      :items="inputForms"
                      item-text="name"
                      item-value="name"
                      multiple
                      filled
                      placeholder="Plumbing"
                      hide-details="auto"
                      :auto-select-first="true"
                      :error="!!errors[0]"
                      :error-messages="errors[0]"
                    ></v-autocomplete>
                  </ValidationProvider>
                  <v-btn
                    :disabled="!data.work_types || data.work_types.length == 0"
                    height="55"
                    color="primary"
                    elevation="0"
                    @click="dialog = true"
                    class="ml-2"
                  >
                    Find Company
                  </v-btn>

                  <v-dialog v-model="dialog" width="800" persistent>
                    <v-card class="stepper_for_lead">
                      <v-stepper v-model="e1" class="py-15 px-10">
                        <v-stepper-items class="pb-5">
                          <v-stepper-content step="1">
                            <v-card elevation="0">
                              <div class="lead-step-box text-center">
                                <h3 class="text-h5 font-weight-bold">
                                  Jacob Electric marketplace connects you to
                                  highly training local electricians
                                </h3>
                                <h4 class="mt-4">
                                  Enter the location of your project
                                </h4>
                                <ValidationProvider
                                  vid="state_id"
                                  name="State"
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <v-autocomplete
                                    v-if="states"
                                    :items="states"
                                    v-model="data.state_id"
                                    :item-text="stateName"
                                    item-value="id"
                                    class="mt-8 lc-field"
                                    label="Your city/region or state"
                                    dense
                                    outlined
                                    single-line
                                    :error="!!errors[0]"
                                    :error-messages="errors[0]"
                                  ></v-autocomplete>
                                </ValidationProvider>
                              </div>
                            </v-card>
                            <v-btn
                              :disabled="!data.state_id"
                              color="primary"
                              @click="e1 = 2"
                              width="150"
                              height="40"
                              class="text-center d-block ma-auto"
                            >
                              Next
                            </v-btn>
                          </v-stepper-content>

                          <v-stepper-content step="2">
                            <div class="lead-step-box text-center">
                              <h3 class="text-h5 font-weight-bold">
                                What kind of electrical work or installation do
                                you need?
                              </h3>
                              <v-radio-group v-model="data.category_id">
                                <v-row class="mt-2">
                                  <v-col
                                    v-for="(category, index) in categories"
                                    :key="index"
                                    xs="12"
                                    sm="6"
                                    md="6"
                                    class="text-left"
                                  >
                                    <v-radio
                                      :label="category.name"
                                      :value="category.id"
                                      class="mt-0"
                                    ></v-radio>
                                  </v-col>
                                </v-row>
                              </v-radio-group>
                            </div>
                            <div class="text-center pt-6 ma-auto">
                              <v-btn
                                color="primary"
                                @click="e1 = 1"
                                width="150"
                                height="40"
                                class="text-left mr-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Previous
                              </v-btn>
                              <v-btn
                                :disabled="!data.category_id"
                                color="primary"
                                @click="e1 = 3"
                                width="150"
                                height="40"
                                class="ml-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Next
                              </v-btn>
                            </div>
                          </v-stepper-content>

                          <v-stepper-content step="3">
                            <div class="lead-step-box text-center">
                              <h3 class="text-h5 font-weight-bold">
                                What status best described this project?
                              </h3>
                              <div class="ml-5 mt-5">
                                <v-radio-group v-model="data.status">
                                  <v-radio
                                    label="Ready to Hire"
                                    value="Ready to Hire"
                                    hide-details="auto"
                                  ></v-radio>
                                  <v-radio
                                    label="Planning Stage"
                                    value="Planning Stage"
                                    hide-details="auto"
                                  ></v-radio>
                                </v-radio-group>
                              </div>
                            </div>
                            <div class="text-center pt-5 ma-auto">
                              <v-btn
                                color="primary"
                                @click="e1 = 2"
                                width="150"
                                height="40"
                                class="mr-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Previous
                              </v-btn>
                              <v-btn
                                :disabled="!data.status"
                                color="primary"
                                @click="e1 = 4"
                                width="150"
                                height="40"
                                class="ml-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Next
                              </v-btn>
                            </div>
                          </v-stepper-content>

                          <v-stepper-content step="4">
                            <div class="lead-step-box text-center">
                              <h3 class="text-h5 font-weight-bold">
                                What kind of location is this?
                              </h3>
                              <div class="ml-5 mt-5">
                                <v-radio-group v-model="data.location_type">
                                  <v-radio
                                    label="Residential / Home"
                                    value="Residential / Home"
                                    hide-details="auto"
                                  ></v-radio>
                                  <v-radio
                                    label="Commercial / Business"
                                    value="Commercial / Business"
                                    hide-details="auto"
                                  ></v-radio>
                                  <v-radio
                                    label="Industrial / Factory"
                                    value="Industrial / Factory"
                                    hide-details="auto"
                                  ></v-radio>
                                </v-radio-group>
                              </div>
                            </div>
                            <div class="text-center pt-5 ma-auto">
                              <v-btn
                                color="primary"
                                @click="e1 = 3"
                                width="150"
                                height="40"
                                class="mr-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Previous
                              </v-btn>
                              <v-btn
                                :disabled="!data.location_type"
                                color="primary"
                                @click="e1 = 5"
                                width="150"
                                height="40"
                                class="ml-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Next
                              </v-btn>
                            </div>
                          </v-stepper-content>

                          <v-stepper-content step="5">
                            <div class="lead-step-box text-center">
                              <h3 class="text-h5 font-weight-bold">
                                Please tell us a little about your proposed
                                project
                              </h3>
                              <div class="mt-8">
                                <ValidationProvider
                                  vid="project_description"
                                  name="Brief"
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                <v-textarea
                                  v-model="data.project_description"
                                  outlined
                                  :error="!!errors[0]"
                                  :error-messages="errors[0]"
                                  placeholder="A brief about what you want done (optional)"
                                ></v-textarea>
                                </ValidationProvider>
                              </div>
                            </div>
                            <div class="text-center pt-5 ma-auto">
                              <v-btn
                                color="primary"
                                @click="e1 = 4"
                                width="150"
                                height="40"
                                class="mr-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Previous
                              </v-btn>
                              <v-btn
                                :disabled="!data.project_description"
                                color="primary"
                                @click="e1 = 6"
                                width="150"
                                height="40"
                                class="ml-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Next
                              </v-btn>
                            </div>
                          </v-stepper-content>

                          <v-stepper-content step="6">
                            <div class="lead-step-box text-center">
                              <h3 class="text-h5 font-weight-bold">
                                What's your name?
                              </h3>
                              <div class="mt-8">
                                <ValidationProvider
                                  vid="first_name"
                                  name="First Name"
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <v-text-field
                                    v-model="data.first_name"
                                    dense
                                    class="mt-8 lc-field"
                                    outlined
                                    height="45"
                                    width="200"
                                    placeholder="First Name"
                                    hide-details="auto"
                                    :error="!!errors[0]"
                                    :error-messages="errors[0]"
                                  >
                                  </v-text-field>
                                </ValidationProvider>
                                <ValidationProvider
                                  vid="last_name"
                                  name="Last Name"
                                  rules="required"
                                  v-slot="{ errors }"
                                >
                                  <v-text-field
                                    v-model="data.last_name"
                                    dense
                                    class="mt-5 lc-field"
                                    outlined
                                    height="45"
                                    width="200"
                                    placeholder="Last Name"
                                    hide-details="auto"
                                    :error="!!errors[0]"
                                    :error-messages="errors[0]"
                                  >
                                  </v-text-field>
                                </ValidationProvider>
                              </div>
                            </div>
                            <div class="text-center pt-10 ma-auto">
                              <v-btn
                                color="primary"
                                @click="e1 = 5"
                                width="150"
                                height="40"
                                class="mr-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Previous
                              </v-btn>
                              <v-btn
                                :disabled="!data.first_name && !data.last_name"
                                color="primary"
                                @click="e1 = 7"
                                width="150"
                                height="40"
                                class="ml-md-3 ml-auto mt-md-auto mt-3"
                              >
                                Next
                              </v-btn>
                            </div>
                          </v-stepper-content>

                          <v-stepper-content step="7">
                            <div class="lead-step-box text-center">
                              <h3 class="text-h5 font-weight-bold">
                                Give us your contact so that we can send you
                                electrician!
                              </h3>
                              <div class="mt-8">
                                <v-row>
                                  <v-col md="4" cols="12">
                                    <ValidationProvider
                                      vid="phone_code_id"
                                      name="Country code"
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <v-autocomplete
                                        v-if="codes"
                                        :items="codes"
                                        v-model="data.phone_country_id"
                                        :item-text="countryCode"
                                        item-value="id"
                                        label="Country Code"
                                        outlined
                                        single-line
                                        :error="!!errors[0]"
                                        :error-messages="errors[0]"
                                      ></v-autocomplete>
                                    </ValidationProvider>
                                  </v-col>
                                  <v-col md="8" cols="12">
                                    <ValidationProvider
                                      vid="phone"
                                      name="Phone"
                                      rules="required"
                                      v-slot="{ errors }"
                                    >
                                      <v-text-field
                                        v-model="data.phone"
                                        dense
                                        class="lc-field"
                                        outlined
                                        height="50px"
                                        width="200"
                                        placeholder="Phone"
                                        :error="!!errors[0]"
                                        :error-messages="errors[0]"
                                      >
                                      </v-text-field>
                                    </ValidationProvider>
                                  </v-col>
                                </v-row>
                                <ValidationProvider
                                  vid="email"
                                  name="Email"
                                  rules="required|email"
                                  v-slot="{ errors }"
                                >
                                  <v-text-field
                                    v-model="data.email"
                                    type="email"
                                    dense
                                    class="lc-field"
                                    outlined
                                    height="50px"
                                    width="200"
                                    placeholder="Email"
                                    :error="!!errors[0]"
                                    :error-messages="errors[0]"
                                  >
                                  </v-text-field>
                                </ValidationProvider>
                                <ValidationProvider
                                  vid="contacted_estimate"
                                  name="Contacted estimate"
                                  v-slot="{ errors }"
                                >
                                  <v-checkbox
                                    v-model="data.contacted_estimate"
                                    label="Yes, I would like to be contacted for estimate"
                                    color="primary"
                                  ></v-checkbox>
                                </ValidationProvider>
                              </div>
                            </div>
                            <div class="text-center pt-5 ma-auto">
                              <v-btn
                                color="primary"
                                width="180"
                                height="45"
                                class="mr-3"
                                :disabled="invalid"
                                :loading="loading"
                                @click="submit()"
                              >
                                Submit
                              </v-btn>
                              <p class="mt-8">
                                By clicking Submit, you affirm you have read and
                                agree to the Jacob Electric a  <nuxt-link
                                  to="/terms"
                                  >Terms</nuxt-link
                                > and you agree Jacob Electric and its networks
                                of
                                <nuxt-link to="/terms"
                                  >Service Professionals</nuxt-link
                                >  may use automated technology to deliver
                                marketing calls, texts, or emails to the number
                                or email you provided regarding your project.
                                You also agree Jacob Electric and its franchisee
                                may use automated technology to deliver
                                marketing calls, texts, or emails to you
                                regarding offers. Consent is not a condition of
                                purchase.
                              </p>
                            </div>
                          </v-stepper-content>
                        </v-stepper-items>
                      </v-stepper>
                    </v-card>
                  </v-dialog>
                </div>
              </ValidationObserver>
            </div>

          </v-col>
          <v-col md="6">

          </v-col>
        </v-row>
      </div>
    </v-container>

    <div class="browse-category my-16">
       <v-container>
         <v-row>
           <v-col md="12">
             <h2 class="sec-title">Browse by category</h2>
               <v-card color="transparent" elevation="0" class="mt-6">

                 <v-row>
                   <v-col md="6">

                     <v-tabs class="mt-4"
                             v-model="tab"
                             background-color="transparent"
                             color="basil"
                             grow
                     >
                       <v-tab class="category-tabs" min-width="25" color="primary"
                              v-for="item in items"
                              :key="item"
                       >
                         {{ item }}
                       </v-tab>
                     </v-tabs>

                   </v-col>
                 </v-row>

                 <v-tabs-items v-model="tab"  >

                   <v-tab-item>
                     <div class="category-column">
                       <carousel :autoplay="true" :nav="false"
                               :responsive="{
                                 0:{items:1,nav:false},
                                 800:{items:2,nav:false},
                                 1024:{items:5,nav:false}}">

                            <v-card class="category-column" to="#">
                               <h3>Roof replacement and repair</h3>
                              <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                            </v-card>

                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                       </carousel>
                     </div>
                   </v-tab-item>

                   <v-tab-item>
                     <div class="category-column">
                       <carousel :autoplay="true" :nav="false"
                                 :responsive="{
                                 0:{items:1,nav:false},
                                 800:{items:2,nav:false},
                                 1024:{items:5,nav:false}}">

                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>

                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                       </carousel>
                     </div>
                   </v-tab-item>

                   <v-tab-item>
                     <div class="category-column">
                       <carousel :autoplay="true" :nav="false"
                                 :responsive="{
                                 0:{items:1,nav:false},
                                 800:{items:2,nav:false},
                                 1024:{items:5,nav:false}}">

                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>

                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                       </carousel>
                     </div>
                   </v-tab-item>

                   <v-tab-item>
                     <div class="category-column">
                       <carousel :autoplay="true" :nav="false"
                                 :responsive="{
                                 0:{items:1,nav:false},
                                 800:{items:2,nav:false},
                                 1024:{items:5,nav:false}}">

                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>

                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                       </carousel>
                     </div>
                   </v-tab-item>

                   <v-tab-item>
                     <div class="category-column">
                       <carousel :autoplay="true" :nav="false"
                                 :responsive="{
                                 0:{items:1,nav:false},
                                 800:{items:2,nav:false},
                                 1024:{items:5,nav:false}}">

                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>

                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                         <v-card class="category-column" to="#">
                           <h3>Roof replacement and repair</h3>
                           <img src="@/assets/img/homeadvisor/item-bg-1.png" alt="bg">
                         </v-card>


                       </carousel>
                     </div>
                   </v-tab-item>

                 </v-tabs-items>
               </v-card>
           </v-col>
         </v-row>
       </v-container>
    </div>

    <div class="project-type pb-16">
      <v-container>
        <v-row>
          <v-col md="12">
            <h2 class="sec-title">Most Popular Projects</h2>
          </v-col>

          <v-col md="2">
            <div class="project-box">
              <a href="#">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8887 24.9648H20.6177V21.3298C20.6177 15.3168 25.5097 10.4238 31.5247 10.4238H40.0067V17.6938H31.5247C29.5197 17.6938 27.8887 19.3248 27.8887 21.3298V24.9648Z" fill="#D5DBF1"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8887 24.9648H20.6177V21.3298C20.6177 15.3168 25.5097 10.4238 31.5247 10.4238H40.0067V17.6938H31.5247C29.5197 17.6938 27.8887 19.3248 27.8887 21.3298V24.9648Z" stroke="#10103F" stroke-linejoin="round"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9825 39.5068H8.50049V32.2358H16.9825C18.9865 32.2358 20.6185 30.6048 20.6185 28.6008V24.9648H27.8885V28.6008C27.8885 34.6138 22.9965 39.5068 16.9825 39.5068Z" fill="#D5DBF1"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9825 39.5068H8.50049V32.2358H16.9825C18.9865 32.2358 20.6185 30.6048 20.6185 28.6008V24.9648H27.8885V28.6008C27.8885 34.6138 22.9965 39.5068 16.9825 39.5068Z" stroke="#10103F" stroke-linejoin="round"></path>
                <path d="M40.0068 20.1181V8.00009" stroke="#10103F" stroke-linejoin="round"></path>
                <path d="M8.5 29.8124V41.9294" stroke="#10103F" stroke-linejoin="round"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6321 26.701H27.7711V23.235H20.6321V26.701Z" fill="#10103F"></path>
               </svg>
              </a>
              <h3 class="mt-8">Electrician</h3>
            </div><!--/. project-box -->
          </v-col>

          <v-col md="2">
            <div class="project-box">
              <a href="#">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8887 24.9648H20.6177V21.3298C20.6177 15.3168 25.5097 10.4238 31.5247 10.4238H40.0067V17.6938H31.5247C29.5197 17.6938 27.8887 19.3248 27.8887 21.3298V24.9648Z" fill="#D5DBF1"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8887 24.9648H20.6177V21.3298C20.6177 15.3168 25.5097 10.4238 31.5247 10.4238H40.0067V17.6938H31.5247C29.5197 17.6938 27.8887 19.3248 27.8887 21.3298V24.9648Z" stroke="#10103F" stroke-linejoin="round"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9825 39.5068H8.50049V32.2358H16.9825C18.9865 32.2358 20.6185 30.6048 20.6185 28.6008V24.9648H27.8885V28.6008C27.8885 34.6138 22.9965 39.5068 16.9825 39.5068Z" fill="#D5DBF1"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9825 39.5068H8.50049V32.2358H16.9825C18.9865 32.2358 20.6185 30.6048 20.6185 28.6008V24.9648H27.8885V28.6008C27.8885 34.6138 22.9965 39.5068 16.9825 39.5068Z" stroke="#10103F" stroke-linejoin="round"></path>
                  <path d="M40.0068 20.1181V8.00009" stroke="#10103F" stroke-linejoin="round"></path>
                  <path d="M8.5 29.8124V41.9294" stroke="#10103F" stroke-linejoin="round"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6321 26.701H27.7711V23.235H20.6321V26.701Z" fill="#10103F"></path>
                </svg>
              </a>
              <h3 class="mt-8">Plumbing</h3>
            </div><!--/. project-box -->
          </v-col>

          <v-col md="2">
            <div class="project-box">
              <a href="#">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8887 24.9648H20.6177V21.3298C20.6177 15.3168 25.5097 10.4238 31.5247 10.4238H40.0067V17.6938H31.5247C29.5197 17.6938 27.8887 19.3248 27.8887 21.3298V24.9648Z" fill="#D5DBF1"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8887 24.9648H20.6177V21.3298C20.6177 15.3168 25.5097 10.4238 31.5247 10.4238H40.0067V17.6938H31.5247C29.5197 17.6938 27.8887 19.3248 27.8887 21.3298V24.9648Z" stroke="#10103F" stroke-linejoin="round"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9825 39.5068H8.50049V32.2358H16.9825C18.9865 32.2358 20.6185 30.6048 20.6185 28.6008V24.9648H27.8885V28.6008C27.8885 34.6138 22.9965 39.5068 16.9825 39.5068Z" fill="#D5DBF1"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9825 39.5068H8.50049V32.2358H16.9825C18.9865 32.2358 20.6185 30.6048 20.6185 28.6008V24.9648H27.8885V28.6008C27.8885 34.6138 22.9965 39.5068 16.9825 39.5068Z" stroke="#10103F" stroke-linejoin="round"></path>
                  <path d="M40.0068 20.1181V8.00009" stroke="#10103F" stroke-linejoin="round"></path>
                  <path d="M8.5 29.8124V41.9294" stroke="#10103F" stroke-linejoin="round"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6321 26.701H27.7711V23.235H20.6321V26.701Z" fill="#10103F"></path>
                </svg>
              </a>
              <h3 class="mt-8">Heating & Coolin </h3>
            </div><!--/. project-box -->
          </v-col>

        </v-row>
      </v-container>
    </div><!--/. project-type-->


    <div class="fixed-price-service py-16">
       <v-container>
         <v-row>
           <v-col md="10" offset-md="1" cols="12">
             <v-row>
               <v-col md="6">
                 <div class="bg">
                   <img src="@/assets/img/homeadvisor/fied-price-bg.webp" alt="fied-price-bg">
                 </div>
               </v-col>
               <v-col md="6" class="ma-auto">
                 <div class="pl-15">
                   <h3>Fixed Price Service</h3>
                   <div  class="d-flex mt-5">
                     <div>
                       <v-icon>mdi-tag</v-icon>
                       <span>See your price</span>
                     </div>
                     <div>
                       <v-icon>mdi-av-timer</v-icon>
                       <span>Book a time</span>
                     </div>
                     <div>
                       <v-icon>mdi-dolly</v-icon>
                       <span>Pay online</span>
                     </div>
                   </div>

                   <h2 class="display-2 mt-10">Looking to book a fixed price service?</h2>
                   <p class="mt-5">Plumbing, Handyman, House Cleaning, and more...</p>
                   <v-btn color="primary" class="mt-10" height="45">Shop Services</v-btn>
                 </div>

               </v-col>

             </v-row>

           </v-col>
         </v-row>
       </v-container>
    </div><!--/. fixed-price-service-->

  </div>
</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  import { ValidationObserver, ValidationProvider } from "vee-validate";
  export default {
    name: "homeadvisor",
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
          content: ''
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ' '
        },
      ],
    },
    components:{
      carousel,
      ValidationObserver,
      ValidationProvider,
    },
    data () {
      return {
        tab: null,
        items: [
          'Electrician', 'plumbing', 'Heating & Coolin',
        ],
        inputForms: [
        { name: "Plumbing" },
        { name: "HVAC" },
        { name: "Electric" },
      ],
         e1: 1,
      loading: false,
      states: null,
      codes: null,
      categories: null,
      value: null,
      data: {
        state_id: null,
        category_id: null,
        status: null,
        location_type: null,
        project_description: null,
        first_name: null,
        last_name: null,
        email: null,
        phone_country_id: null,
        phone: null,
        contacted_estimate: false,
        work_types: [],
      },
      dialog: false,
      }
    },
      methods: {
    submit() {
      this.loading = true;
      var self = this;
      this.$axios
        .$post("customer/leads/insert", this.data, {})
        .then((res) => {
          self.loading = false;
          self.data = {
            state_id: null,
            category_id: null,
            status: null,
            location_type: null,
            project_description: null,
            first_name: null,
            last_name: null,
            email: null,
            phone_country_id: null,
            phone: null,
            contacted_estimate: false,
            work_types: [],
          };
          self.$refs.form.reset();
          self.$router.push("/thankyou");
        })
        .catch((error) => {
          if (error.response) {
            self.loading = false;
            self.$refs.form.setErrors(error.response.data.errors);
            if (error.response.data.errors) {
              self.$toast.error(error.response.data.errors.message[0], {});
            } else {
              self.$toast.error(error.response.data.message, {});
            }
          }
        });
    },
    stateName: function (item) {
      return item.name;
    },
    countryCode: function (item) {
      return "(+" + item.phonecode + ") " + item.name;
    },
    getCodes() {
      this.$axios.$get("app/country/codes").then((res) => {
        this.codes = res.data.countries;
      });
    },
    getStates() {
      this.$axios.$get("app/country/get/existing/states").then((res) => {
        this.states = res.data;
      });
    },
    getCategories() {
      this.$axios.$get("customer/leads/category/get").then((res) => {
        this.categories = res.data;
      });
    },
  },
  beforeMount() {
    this.getCodes();
    this.getStates();
    this.getCategories();
  },

  }
</script>

<style scoped lang="scss">
  .banner{
    background-image: url("assets/img/homeadvisor/home-unsplash.webp");
    background-size: cover;
    overflow:hidden;
    height: 500px;
    border-radius: 35px;
    h2{
      width: 80%;
      line-height: 45px;
    }
  }
  .banner .text{
    background-image: url("assets/img/homeadvisor/banner-shape.svg");
    height: 500px;
    padding: 50px 50px 50px 80px;
    width: 100%;
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  }
  .banner .search-field{

  }
  .banner .text h2{
    color: white;
  }

  /*-- Browse category sec --*/

  .browse-category .category-tabs{
  background-color: #eee;
  }
  .category-tabs.v-tab.v-tab--active{
    background-color: #fb675e;
    color: white;
  }
  .category-column{
      overflow:hidden;
      margin:15px 10px 0 15px !important;
  }

  .category-column h3{
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    color: white;
  }
  .category-column img{
    width: 100%;
    height: 250px;
    background-size: cover;
  }

  /*--  roject-type --*/

  .project-type .project-box a{
    background-color: white;
    width: 58px;
    height: 59px;
    display: block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 1px 1px 50px #ddd;
  }

  .project-type .project-box a .icon svg{
    width: 50px;

  }

  /*--  fixed price project --*/
  .fixed-price-service{
    background-color: #ddd;
  }

  .fixed-price-service .bg img{
    width: 100%;
    height: 450px;
    object-fit: cover;
  }


  /*--more-projects */

  .more-projects .project-box a{

  }


  .more-projects .project-box{
   padding: 20px 15px;
  }
  .more-projects .project-box a .icon svg{
    width: 50px;
  }

</style>
