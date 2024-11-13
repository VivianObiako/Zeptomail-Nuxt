<template>
  <div class="franchise-expression-interest-form">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col md="6" offset-md="3" cols="12" offset="0">
            <h1 class="text-md-h4 text-h5 text-center mb-2">FRANCHISE EXPRESSION OF INTEREST FORM</h1>
          </v-col>
          <v-col md="10" offset-md="1" cols="12">
            <template>
              <v-stepper v-model="e1">
                <v-stepper-items class="stepperContent">

                  <v-stepper-content step="1">
                    <ValidationObserver ref="step1" v-slot="{ invalid }">
                      <v-row>
                        <v-col cols="12">
                          <h2>1.Personal Details</h2>
                        </v-col>
                        <v-col cols="12" md="6"  >
                          <ValidationProvider  name="First Name" rules="required" v-slot="{ errors }">
                            <v-text-field
                              outlined
                              dense
                              height="45px"
                              v-model="form.first_name"
                              label="First Name:"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                              hide-details="auto"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="6"  >
                          <ValidationProvider  name="Family Name" rules="required" v-slot="{ errors }">

                            <v-text-field
                              outlined
                              dense
                              height="45px"
                              v-model="form.family_name"
                              label="Family Name:"
                              required
                              hide-details="auto"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="6"  >
                          <ValidationProvider  name="Gender" rules="required" v-slot="{ errors }">
                            <v-text-field
                              outlined
                              dense
                              height="45px"
                              v-model="form.gender"
                              label="Gender:"
                              required
                              hide-details="auto"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-text-field>

                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="6"  >
                          <ValidationProvider  name="Phone Number" rules="required" v-slot="{ errors }">

                            <v-text-field
                              outlined
                              dense
                              height="45px"
                              type="number"
                              v-model="form.phone_number"
                              label="Phone Number :"
                              required
                              hide-details="auto"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="12"  >
                          <ValidationProvider  name="Job Title" rules="required" v-slot="{ errors }">

                            <v-text-field
                              outlined
                              dense
                              height="45px"
                              v-model="form.job_title"
                              label="Job Title:"
                              required
                              hide-details="auto"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="6"  >
                          <ValidationProvider  name="E-mail" rules="required|email" v-slot="{ errors }">
                            <v-text-field
                              outlined
                              dense
                              height="45px"
                              v-model="form.official_email"
                              label="Official E-mail"
                              required
                              hide-details="auto"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="6"  >
                          <v-text-field
                            outlined
                            dense
                            height="45px"
                            v-model="form.alternate_email"
                            label="Alternate Email:"
                            required
                            hide-details="auto"
                          ></v-text-field>
                        </v-col>
                        <v-row>
                          <v-col cols="12" sm="12" md="12" >
                            <v-menu
                              ref="menu"
                              v-model="menu"
                              :close-on-content-click="false"
                              :return-value.sync="form.date_of_birth"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <ValidationProvider  name="Date of Birth" rules="required" v-slot="{ errors }">

                                  <v-text-field
                                    outlined
                                    dense
                                    height="45px"
                                    class="mx-3 mt-4"
                                    v-model="form.date_of_birth"
                                    label="Date of Birth :"
                                    prepend-inner-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :error="!!errors[0]"
                                    :error-messages="errors[0]"
                                  ></v-text-field>
                                </ValidationProvider>
                              </template>
                              <v-date-picker
                                v-model="form.date_of_birth"
                                no-title
                                scrollable
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="menu = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.menu.save(form.date_of_birth)"
                                >
                                  OK
                                </v-btn>
                              </v-date-picker>
                            </v-menu>
                          </v-col>

                        </v-row>
                        <v-col cols="12" md="12"  >
                          <ValidationProvider  name="Poster Address" rules="required" v-slot="{ errors }">

                            <v-text-field
                              outlined
                              dense
                              height="45px"
                              v-model="form.postel_address"
                              label="Poster Address :"
                              required
                              hide-details="auto"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="12" >
                          <label>1.1.	How will your past experience help you to succeed as a Jacob Electric franchisee?
                            Amongst any other information you may wish to provide, please describe
                            any business experience you have had, and any current involvement in service industry.
                          </label>
                          <ValidationProvider name="Past experience" rules="required" v-slot="{ errors }">
                            <v-textarea
                              outlined
                              name="input-7-4"
                              placeholder="Click here to enter text."
                              required
                              v-model="form.past_exp"
                              hide-details="auto"
                              height="100"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="12">
                          <label>
                            1.2 What are the personal strengths and qualities you would bring as a Jacob Electric franchisee?
                          </label>
                          <ValidationProvider  rules="required" v-slot="{ errors }">

                            <v-textarea
                              outlined
                              name="input-7-4"
                              placeholder="Click here to enter text."
                              v-model="form.personal_strength"
                              hide-details="auto"
                              height="100"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="12"  >
                          <label >
                            1.3. Why are you interested in becoming a Jacob Electric franchisee?
                          </label>
                          <ValidationProvider  rules="required" v-slot="{ errors }">

                            <v-textarea
                              outlined
                              name="input-7-4"
                              placeholder="Click here to enter text."
                              v-model="form.interest_fa"
                              hide-details="auto"
                              height="100"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="12"  >
                          <label >
                            1.4	What do you expect Jacob Electric will do for you as a Jacob Electric Franchisee?
                          </label>
                          <ValidationProvider  rules="required" v-slot="{ errors }">

                            <v-textarea
                              outlined
                              name="input-7-4"
                              placeholder="Click here to enter text."
                              v-model="form.expectation"
                              hide-details="auto"
                              height="100"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>

                      </v-row>

                      <div class="mt-10">
                        <v-btn
                          color="primary"
                          @click="e1 = 2"
                          :disabled="invalid"
                        >
                          Continue
                        </v-btn>


                      </div>
                      <!--/. buttons -->

                    </ValidationObserver>
                  </v-stepper-content>

                  <v-stepper-content step="2">
                    <ValidationObserver ref="step2" v-slot="{ invalid }">
                      <v-row>
                        <v-col md="12" cols="12" class="ma-0 pb-0">
                          <h3>2. Territory or territories of interest</h3>
                        </v-col>
                        <v-col cols="12" md="12"  >
                          <label class="mb-2">Please describe or list the specific territory that you are interested in,
                            and what connection (if any) you have in the relevant area. Any information you are able to provide as to why
                            the particular territory is of interest to you would be helpful in Jacob Electric assessment: </label>
                          <ValidationProvider  rules="required" v-slot="{ errors }">

                            <v-textarea
                              outlined
                              name="input-7-4"
                              placeholder="Click here to enter text."
                              v-model="form.territories"
                              hide-details="auto"
                              height="100"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>
                      </v-row>

                      <div class="mt-10">

                        <v-btn
                          color="primary"
                          @click="e1 = 3"
                          :disabled="invalid"
                        >
                          Continue
                        </v-btn>

                        <v-btn text   @click="e1 = 1">

                          Cancel
                        </v-btn>
                      </div>
                    </ValidationObserver>
                  </v-stepper-content>

                  <v-stepper-content step="3">
                    <ValidationObserver ref="step3" v-slot="{ invalid }">
                      <v-row>
                        <v-col md="12" cols="12" class="ma-0 pb-0">
                          <h3>3. Other Financial Information</h3>
                        </v-col>
                        <v-col cols="12" md="12"  >
                          <label>What capital do you have available for this franchise?
                            in service industry.</label>
                          <ValidationProvider  rules="required" v-slot="{ errors }">

                            <v-textarea
                              outlined
                              name="input-7-4"
                              placeholder="Click here to enter text."
                              v-model="form.capital_cash"
                              hide-details="auto"
                              height="100"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="12"  >
                          <label>If needed, what would you convert into cash to pay for the franchise?</label>
                          <ValidationProvider  rules="required" v-slot="{ errors }">

                            <v-textarea
                              outlined
                              name="input-7-4"
                              placeholder="Click here to enter text."
                              v-model="form.convert_to_cash"
                              hide-details="auto"
                              height="100"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" md="12"  >
                          <label>If your present funds are insufficient for the purchase of the franchise,
                            how do you propose to finance the acquisition of the franchise?</label>
                          <ValidationProvider  rules="required" v-slot="{ errors }">

                            <v-textarea
                              outlined
                              name="input-7-4"
                              placeholder="Click here to enter text."
                              v-model="form.acquisition_finance"
                              hide-details="auto"
                              height="100"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-textarea>
                          </ValidationProvider>
                        </v-col>

                      </v-row>

                      <div class="mt-10">

                        <v-btn
                          color="primary"
                          @click="e1 = 4"

                          :disabled="invalid"
                        >
                          Continue
                        </v-btn>

                        <v-btn text  @click="e1 = 2">
                          Cancel
                        </v-btn>
                      </div>
                    </ValidationObserver>
                  </v-stepper-content>

                  <v-stepper-content step="4">

                    <v-row>
                      <v-col md="12" cols="12" class="ma-0 pb-0">
                        <h3>4. Declaration</h3>
                      </v-col>
                      <v-col cols="12" md="12">
                        <p>In providing us with the information in this Expression of Interest form, including the Statement of Financial Position: </p>
                        <ul>
                          <li>1.	You consent to us conducting further enquiries about you and in relation to such information
                            as may be necessary to assist us in evaluating
                            your Expression of Interest (including your company/business and other proposed principals in the franchise).
                          </li>How will your past experience help you to succeed as a Findadmission fran
                          <li>2.	You confirm that all the information you provide in this form or in the course of your interest
                            in acquiring a Jacob Electric franchise is true and correct
                            in all respects and not misleading by inclusion or omission.
                          </li>
                          <li>3.You acknowledge that Jacob Electric has not represented that
                            in accepting and considering your expression of
                            interest Jacob Electric will necessarily consider you a suitable candidate for a Jacob Electric franchise.
                          </li>
                        </ul>
                      </v-col>
                    </v-row>

                    <div class="mt-10">
                      <v-btn
                        width="180px"
                        height="45px"
                        color="primary"
                        @click="submit"
                        :loading="loading"
                      >
                        Submit
                      </v-btn>
                    </div>

                  </v-stepper-content>

                </v-stepper-items>
              </v-stepper>
            </template>

          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="franchise-expression-faq py-16">
      <v-container>
        <v-row>
          <v-col md="8" offset-md="2" cols="12" offset="0">
            <h2 class="text-center display-1 mb-5">Frankly Asked Questions</h2>
            <v-expansion-panels>
              <v-expansion-panel >
                <v-expansion-panel-header>
                  <h3>Who is Jacob Electric?</h3>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  At Jacob Electric, we are and electrical contractor company dedicated to exceeding residential,
                  commercial and industrial customer electrical service expectations, growing our
                  services through both technology and training, as well as creating the safest work environment possible.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <!--/.  tab item -->
              <v-expansion-panel >
                <v-expansion-panel-header>
                  <h3>What does Jacob Electric offer the franchise?</h3>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ul>
                    <li>1.	A chance to run your own business </li>
                    <li>2.	Being part of an international network  </li>
                    <li>3.	Established brand name in the market place </li>
                    <li>4.	National advertising and marketing program </li>
                    <li>5.	Use of the Jacob Electric wealth of experience </li>
                    <li>6.	Complete training and induction program </li>
                    <li>7.	Marketing support </li>
                    <li>8.	Technology platform to manage operations and payment</li>
                    <li>9.	Live sales monitoring IT system </li>
                    <li>10.	A mobile app technology that allow Franchisor to run freelance electrician services</li>
                    <li>11.	Regular training by Jacob Electric team to ensure quality services </li>
                    <li>12.	Staff exchange program</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <!--/.  tab item -->
              <v-expansion-panel >
                <v-expansion-panel-header>
                  <h3>What does Jacob Electric look for in a franchise?</h3>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ul>
                    <li>1.	Business experience </li>
                    <li>2.	Desire to succeed </li>
                    <li>3.	Willingness to participate </li>
                    <li>4.	Positive attitude and mind set </li>
                    <li>5.	Financially strong </li>
                    <li>6.	Customer focused </li>
                    <li>7.	Ability to motivate and coach a team of people </li>
                    <li>8.	Ability to work within a franchise system </li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <!--/.  tab item -->
              <v-expansion-panel >
                <v-expansion-panel-header>
                  <h3>Fees and costs:</h3>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>If you acquire a Jacob Electric franchise you will be subject
                    to certain initial and on-going fees payable to Jacob Electric LLC, including the following:</p>
                  <ul class="listStyle pl-0 mt-3">
                    <li><b>Initial franchise fee:</b>   subject to territory or location but starting from $35,000</li>
                    <li><b>Royalty fees:</b>   subject to territory or location but minimum of 15%</li>
                    <li><b>	Marketing fees:</b> A commitment to local marketing support  </li>
                  </ul>
                  <p class="mt-4">Additional cost to be taken into account by you when considering the acquisition of Jacob Electric franchise include:</p>
                  <ul class="listStyle pl-0">
                    <li class="mt-2">1.	Office rent and other occupation costs are the responsibility of the franchise </li>
                    <li>2.	Location set up, including all office furniture, equipment such as computers, tools for electrician,
                      letterhead and branding in accordance with the operations manual </li>
                    <li>3.	Vans for the electrician </li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <!--/.  tab item -->

            </v-expansion-panels>

          </v-col>
        </v-row>
      </v-container>
    </div>
    <!--/. franchise-expression-faq-->
  </div>
</template>

<script>
  import '~/assets/css/reset.css';
  import banner from '~/components/static/services/banner';
  import testimonial from '~/components/static/services/testimonial';
  import electricTeam from '~/components/static/services/electric-team';
  import serviceCard from '~/components/static/cards/service-card';
  import verticalBox from '~/components/static/cards/vertical-box';
  import freelance from "~/components/static/freelance-electrician/freelance";
  import {extend, ValidationObserver, ValidationProvider} from "vee-validate";
  import {email, required} from "vee-validate/dist/rules";
  extend("email", email);
  extend("required", {
    ...required,
    message: 'Please fill the field'
  });

  export default {
    name: "franchise-expression-interest-form",
    layout: 'static',
    ssr: true,
    head: {
      title: 'Jacob Electric   \n',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Wondering how to become an electrician in Washington? Check out Jacob Electric\'s Freelance ' +
            'Journeyman program and start' +
            ' a flexible and rewarding career as a freelance electrician in Washington.\n'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'how to start electrical contractor, how to become electrical company, own electrical company, run' +
            ' electrical firm, electrical services Washington, how to become an electrician in Washington state, Electrician Jobs Washington \n'
        },
      ],
    },
    components:{
      banner,
      testimonial,
      electricTeam,
      freelance,
      serviceCard,
      verticalBox,
      ValidationObserver,
      ValidationProvider,


    },

    data: () => ({
      e1: 1,

      menu: false,
      valid:false,
      form: {
        first_name: "",
        family_name: "",
        gender: "",
        phone_number:"",
        job_title: "",

        official_email: "",
        alternate_email: "",
        date_of_birth: "",
        postel_address: "",
        past_exp: "",
        personal_strength: "",
        interest_fa: "",
        expectation: "",
        territories: "",
        capital_cash: "",
        convert_to_cash: "",
        acquisition_finance: "",

      },
      loading: false,
    }),
    methods: {
      submit(){
        let formDate = new FormData();
        formDate.append("jacob", true)
        for (const [key, value] of Object.entries(this.form)) {
          formDate.append(key, value)
          console.log(`${key}: ${value}`);
        }
        this.loading = true;
        this.$axios.post("https://apidev.jacobelectricgroup.com/api/v1/website/mail/franchise-expression", formDate).then(res => {
          this.loading = false;
          this.$router.push('/thankYou')
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .franchise-expression-interest-form{

    form{
      padding: 50px 0;
      background-color: #f0f1f3;


      label{
        font-size: 14px;
        font-weight: 600;
      }

    }

    .stepperContent{
      padding: 50px;
      border-radius: 15px;
    }

    @media only screen and (max-width: 768px) {
      .stepperContent{
        padding: 10px;
      }
    }


  }
  .franchise-expression-faq{
    .listStyle{
      list-style: none;
    }
  }
</style>
