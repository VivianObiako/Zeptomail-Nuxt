<template>
  <div class="footer">
    <div class="footer-left pb-md-0 pb-10">
      <img class="footer-logo" src="@/assets/img/main-logo.png" />
      <h3 class="mt-7 mb-5">Join Jacob</h3>

      <div class="footer-navs">
        <div>
          <v-btn to="/career" class="pa-0" color="white" plain>Employment-opportunities</v-btn>
        </div>
        <div>
          <v-btn class="pa-0" color="white" plain>Partnership</v-btn>
        </div>
      </div>
      <!--/. footer-navs-->

      <div class="footer-social-links ml-0">

        <v-btn
          color="transparent"
          elevation="0"
          class="pa-0 mr-2"
          min-width="auto"
          plain
          href="//www.facebook.com/JacobElectricGroup" target="_blank"
        >
          <v-icon color="white" size="25">mdi-facebook</v-icon>
        </v-btn>

        <v-btn
          color="transparent"
          elevation="0"
          class="pa-0 mr-2"
          min-width="auto"
          plain
          href="https://www.instagram.com/jacobelectricgroup/" target="_blank"
        ><v-icon color="white" size="25">mdi-instagram</v-icon>
        </v-btn>

        <v-btn
          color="transparent"
          elevation="0"
          class="pa-0 mr-2"
          min-width="auto"
          plain
          href="https://twitter.com/jacob_electric" target="_blank"
        >
          <v-icon color="white" size="25">mdi-twitter</v-icon>
        </v-btn>

        <v-btn
          color="transparent"
          elevation="0"
          class="pa-0 mr-2"
          min-width="auto"
          plain
          href="https://www.linkedin.com/company/jacob-electric-group/" target="_blank"
        >
          <v-icon color="white" size="25">mdi-linkedin</v-icon>
        </v-btn>



      </div>

      <v-card class="mt-5" href="https://www.google.com/search?q=jacobelectricgroup&oq=jacobelectricgroup&aqs=chrome.0.69i59l2j69i60l5.456j0j4&sourceid=chrome&ie=UTF-8#lrd=0x549011636cc84c0d:0x87ee8223c449c1ec,1,,,"
              target="_blank" style="width: 250px;" color="transparent" elevation="0">
        <img class="footer-logo" src="@/assets/img/google-review-logo.png" />
      </v-card>
    </div>

    <div class="footer-right">
      <v-row>
        <v-col md="7" cols="12">
          <div class="footer-navs">
            <v-row>
              <v-col md="5" cols="12" class="footer-nav-item">
                <h3 class="mb-6">Company</h3>
                <div class="nav d-flex flex-column align-start">
                    <v-btn min-width="auto" class="pa-0" to="/service-residential" color="white" plain>Residential</v-btn>
                    <v-btn min-width="auto" class="pa-0" to="/service-commercial" color="white" plain>commercial</v-btn>
                    <v-btn min-width="auto" class="pa-0" to="/service-industrial" color="white" plain>Industrial</v-btn>
                    <v-btn min-width="auto" class="pa-0 text-right" to="/blog" color="white" plain>Blog</v-btn>
                    <v-btn min-width="auto" class="pa-0 text-right" to="/franchise-expression-interest-form" color="white" plain>Franchise Expression Form</v-btn>
                </div>
              </v-col>
              <!--/. footer-nav-item" -->

              <v-col md="6" cols="12" class="footer-nav-item">
                <h3 class="mb-6">Services</h3>
                <div class="footer-navs">
                  <v-btn class="pa-0" to="/about" color="white" plain>About Us</v-btn>

                  <div>
                    <v-btn class="pa-0" color="white" plain>Why Us?</v-btn>
                  </div>

                  <v-btn to="/testimonials" class="pa-0" color="white" plain>Client Testmonials</v-btn>
                  <div>
                    <v-btn to="/gallery" class="pa-0" color="white" plain>Gallery</v-btn>
                  </div>
                  <v-btn class="pa-0" color="white" plain>Projects</v-btn>
                </div>
              </v-col>
              <!--/. footer-nav-item -->

              <v-col md="3">
                <div class="d-flex justify-center flex-column">
                  <img width="50" src="@/assets/img/footer-24.png" alt="24/7" />
                  <a href="tel:206 529-4433">206 529-4433</a>
                </div>
              </v-col>
              <v-col>
                <a
                  href="http://www.homeadvisor.com/rated.JACOBELECTRICLLC.107170745.html"
                  style="display: block; margin: 0 auto;"
                >
                  <img
                    width="80"
                    style="display:block;"
                    src="@/assets/img/soap-solid-border.webp" alt="24/7" />

                </a>
              </v-col>
            </v-row>
          </div>
          <!-- /. footer-navs-->
        </v-col>
        <v-col md="5" cols="12">
          <div class="footer-contact-form">
            <ValidationObserver ref="form" v-slot="{ invalid }">
              <ValidationProvider vid="name" name="Name" rules="required" v-slot="{ errors }">
                <v-text-field
                  dense
                  outlined
                  dark
                  light
                  background-color="#5f5d5c"
                  placeholder="NAME"
                  required
                  hide-details="auto"
                  class="mb-2"
                  v-model="data.name"
                  :error="!!errors[0]"
                  :error-messages="errors[0]"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                vid="email"
                name="Email"
                rules="required|email"
                v-slot="{ errors }"
              >
                <v-text-field
                  dense
                  outlined
                  dark
                  light
                  background-color="#5f5d5c"
                  placeholder="E-MAIL"
                  required
                  hide-details="auto"
                  class="mb-2"
                  v-model="data.email"
                  :error="!!errors[0]"
                  :error-messages="errors[0]"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider vid="phone" name="Phone" rules="required" v-slot="{ errors }">
                <v-text-field
                  dense
                  outlined
                  dark
                  light
                  background-color="#5f5d5c"
                  placeholder="PHONE"
                  required
                  hide-details="auto"
                  class="mb-2"
                  v-model="data.phone"
                  :error="!!errors[0]"
                  :error-messages="errors[0]"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider vid="address" name="Address" v-slot="{ errors }">
                <v-text-field
                  dense
                  outlined
                  dark
                  light
                  background-color="#5f5d5c"
                  placeholder="ADDRESS"
                  required
                  hide-details="auto"
                  class="mb-2"
                  v-model="data.address"
                  :error="!!errors[0]"
                  :error-messages="errors[0]"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider vid="help" name="Help" rules="required" v-slot="{ errors }">
                <v-textarea
                  outlined
                  dense
                  dark
                  background-color="#5f5d5c"
                  height="80"
                  placeholder="HOW WE CAN HELP YOU?"
                  hide-details="auto"
                  maxlength="120"
                  full-width
                  single-line
                  v-model="data.help"
                  :error="!!errors[0]"
                  :error-messages="errors[0]"
                ></v-textarea>
              </ValidationProvider>
              <v-btn
                color="primary"
                width="100%"
                height="45"
                class="mt-2"
                :loading="loading"
                @click="submit()"
              >Send</v-btn>
            </ValidationObserver>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>


<script>
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";

extend("email", email);
extend("required", required);

export default {
  name: "Footer",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      data: {
        name: null,
        email: null,
        phone: null,
        address: null,
        help: null,
      },
    };
  },
  methods: {
    async submit() {
      var self = this;
      this.loading = true;
      this.$axios
        .$post("/zeptomail/contactus", self.data, {
          baseURL: '',
         })
        .then((res) => {
          self.loading = false;
          self.data = {
            name: '',
            email: '',
            phone: '',
            address: '',
            help: '',
          };
          this.$refs.form.reset();
          this.$toast.success("Sent successfully", {});
          console.log(res.message);
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
};
</script>

<style scoped>
.footer {
  /*background: url("assets/img/home/banner-shape.svg");*/
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left;
  display: flex;
}
.footer h3 {
  color: white;
  font-size: 16px;
}
.footer-left {
  width: 30%;
  background-color: #403f3e;
  padding-top: 50px;
  padding-left: 10%;
}


.footer-social-links {
  margin-left: -25px;
  margin-top: 25px;
}
.footer-right {
  width: 70%;
  background-color: #403f3e;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 100px;
  padding-right: 10%;
}
@media only screen and (max-width: 991px) {
  .footer {
    display: grid;
  }
  .footer-left {
    width: 100%;
  }
  .footer-right {
    width: 100%;
    padding-left: 50px;
  }
}

.footer-logo {
  width: 120px;
}

.footer-contact-form input::placeholder {
  color: #00000052 !important;
}
</style>
