<template>
  <div class="service-form-sec sec-padding">
    <v-container>
      <div class="service-form-box">
        <v-row>
          <v-col md="4" cols="12" class="text-center pa-0">
            <div class="form-text light-bg">
              <h3 class="fs-24">Free Consultation</h3>
              <p class="fs-20 line-h-32 mt-5">Just complete this form and our customer care advocate
                will get back to you as soon as possible. </p>
              <img class="mt-10" src="@/assets/img/services/sent-message.svg" alt="message">
            </div>
          </v-col>

          <v-col md="8" cols="12" class="ma-auto">
            <ValidationObserver ref="form" v-slot="{ invalid }">
              <v-form @submit.prevent="submit">
                <v-row>
                  <v-col md="6" cols="12">
                    <ValidationProvider vid="first_name" name="First Name" rules="required" v-slot="{ errors }">
                      <v-text-field
                        v-model="contact.first_name"
                        outlined dense hide-details="auto"
                        placeholder="First name"
                        :error="!!errors[0]"
                        :error-messages="errors[0]"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col md="6" cols="12">
                    <ValidationProvider vid="last_name" name="Last Name" rules="required" v-slot="{ errors }">
                      <v-text-field
                        v-model="contact.last_name"
                        outlined
                        dense
                        hide-details="auto"
                        placeholder="Last Name"
                        :error="!!errors[0]"
                        :error-messages="errors[0]"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col md="6" cols="12">
                    <ValidationProvider vid="email" name="Email" rules="email|required" v-slot="{ errors }">
                      <v-text-field
                        v-model="contact.email"
                        type="email"
                        outlined
                        dense
                        hide-details="auto"
                        placeholder="Email"
                        :error="!!errors[0]"
                        :error-messages="errors[0]"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col md="6" cols="12">
                    <ValidationProvider vid="phone" name="Phone" rules="required" v-slot="{ errors }">
                      <v-text-field
                        v-model="contact.phone"
                        outlined
                        dense
                        type="number"
                        hide-details="auto"
                        placeholder="Phone"
                        :error="!!errors[0]"
                        :error-messages="errors[0]"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col md="6" cols="12">
                    <ValidationProvider vid="city" name="City" rules="required" v-slot="{ errors }">
                    <v-text-field
                      v-model="contact.city"
                      outlined
                      dense
                      hide-details="auto"

                      placeholder="City"

                      :error="!!errors[0]"

                      :error-messages="errors[0]"
                    ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col md="6" cols="12">
                    <ValidationProvider vid="postal_code" name="Zip code" rules="required" v-slot="{ errors }">
                    <v-text-field
                      v-model="contact.postal_code"
                      outlined dense hide-details="auto"
                                  placeholder="Zip Code/Postal Code"
                                  :error="!!errors[0]"
                                  :error-messages="errors[0]"
                    ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col md="12" cols="12">
                    <ValidationProvider vid="help" name="Description" rules="required" v-slot="{ errors }">
                    <v-textarea
                      v-model="contact.help"
                      outlined
                      hide-details="auto"
                      auto-grow
                      placeholder="Your questions...."
                      :error="!!errors[0]"
                      :error-messages="errors[0]"
                    ></v-textarea>
                    </ValidationProvider>
                  </v-col>

                  <v-col md="6" cols="12">
                    <ValidationProvider vid="contact_method" name="Contact Method" rules="required" v-slot="{ errors }">
                    <v-text-field
                      v-model="contact.contact_method"
                      outlined dense hide-details="auto"
                                  placeholder="Preferred Method of Contact"
                                  :error="!!errors[0]"
                                  :error-messages="errors[0]"
                    ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col md="6" cols="12">
                    <ValidationProvider vid="hear_about_us" name="Where Did You Hear" rules="required" v-slot="{ errors }">
                    <v-text-field
                      v-model="contact.hear_about_us"
                      outlined dense hide-details="auto"
                                  placeholder="Where Did You Hear About Us?"
                                  :error="!!errors[0]"
                                  :error-messages="errors[0]"
                    ></v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col md="12" cols="12" class="text-center mt-5">
                    <v-btn class="service-form-btn"
                           width="200"
                           height="45"
                           type="submit"
                           :disabled="invalid">
                      SEND MESSAGE
                    </v-btn>
                  </v-col>

                </v-row>
              </v-form>
            </ValidationObserver>
          </v-col>

        </v-row>

      </div>
    </v-container>

  </div>


</template>

<script>
  import {extend, ValidationObserver, ValidationProvider} from "vee-validate";
  import {email, required} from "vee-validate/dist/rules";

  extend("email", email);
  extend("required", required);
  export default {
    name: "service-form",
    components: {
      ValidationObserver,
      ValidationProvider,
    },
    data() {
      return {
        contact: {
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          city: "",
          postal_code: "",
          help: "",
          contact_method: "",
          hear_about_us: "",
        },
        loading: false,
      }
    },
    methods: {
      submit() {
        var self = this;
        this.loading = true;
        this.$axios
          .$post("zeptomail/consultation", self.contact, { baseURL: '' })
          .then((res) => {
            self.loading = false;
            self.contact = {
              first_name: "",
                last_name: "",
                email: "",
                phone: "",
                city: "",
                postal_code: "",
                help: "",
                contact_method: "",
                hear_about_us: "",
            },
            this.$refs.form.reset();
            this.$toast.success("Sent successfully", {});
          })
          .catch((error) => {
            console.log(error);
            self.loading = false;
            if (error.response) {
              this.$refs.form.setErrors(error.response.data.errors);
            }
          });
      },
    },

  }
</script>


<style scoped>
  .service-form-sec {
    background-image: url("assets/img/services/message-shape-bg.svg");
    background-position: top center;
    background-size: cover;
  }

  .service-form-box {
    background: #FFFFFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);
  }

  .service-form-box .form-text.light-bg {
    height: 600px;
    padding: 50px;
  }

  .service-form-box form {
    padding: 0 50px;
  }

  @media only screen and (max-width: 768px) {
    .service-form-box form {
      padding: 30px 20px;
    }
  }

  .service-form-btn {
    background: linear-gradient(270deg, #FBCF5E 7.41%, #FB855E 60.19%);
    border-radius: 5px;
    color: white;
  }

</style>
