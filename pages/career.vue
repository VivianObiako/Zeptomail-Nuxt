<template>
  <div class="career">
    <div
      class="career-top white--text text-center d-flex justify-center flex-column "
    >
      <v-container>
        <div class="text">
          <h2 class="sec-title">
            Join our brilliant team of skilled electricians
          </h2>
          <h3 class="mt-4">
            Looking for the best jobs for electricians in Washington? We are the
            right platform for you.
          </h3>
          <p class="mt-4">
            Help our Washington client base meet their electrical needs with
            your talent and expertise. Enjoy great professional development with
            our solid training and a rewarding career with our robust
            compensation plan.
          </p>
          <v-btn
            class="mt-5"
            width="200"
            height="45"
            color="primary"
            to="#JOINtheteam"
            >JOIN the team</v-btn
          >
        </div>
      </v-container>
    </div>
    <!-- /. career-top -->

    <div class="culture-attitude sec-padding">
      <v-container>
        <div class="text-center">
          <h2 class="sec-title">Culture & Attitude</h2>
          <p class="mt-4 ma-auto desc">
            On top of gathering amazing technical talents and skills, we also
            want to gather hard-working people with a great attitude and work
            ethics. We foster a culture of accountability and excellence, and we
            will be more than happy to welcome you to our growing team.
          </p>
        </div>
        <div class="culture-attitude-boxes mt-5">
          <v-card class="culture-attitude-box" color="#fdb813">
            <div class="culture-attitude-icon">
              <v-icon size="45">mdi-key</v-icon>
            </div>
            <h3 class="mt-5">Great Skills</h3>
            <p class="mt-2">
              We are looking for experienced people with great technical skills
              in the industry. Contact us if you have the expertise we need.
            </p> </v-card
          ><!--/. culture-attitude-box-->

          <v-card class="culture-attitude-box" color="#ef3e30">
            <div class="culture-attitude-icon">
              <v-icon size="45">mdi-dump-truck</v-icon>
            </div>
            <h3 class="mt-5">Always Delivers</h3>
            <p class="mt-2">
              We need prompt, responsible people who will always deliver. We
              want each electrician we hire to share the same goal—client
              satisfaction.
            </p> </v-card
          ><!--/. culture-attitude-box-->

          <v-card class="culture-attitude-box" color="#2584c6">
            <div class="culture-attitude-icon">
              <v-icon size="45">mdi-nature-people</v-icon>
            </div>
            <h3 class="mt-5">Team Player</h3>
            <p class="mt-2">
              You would have to work with fellow specialists and professional in
              Washington. We need people who can work together to achieve
              excellence.
            </p> </v-card
          ><!--/. culture-attitude-box-->

          <v-card class="culture-attitude-box" color="#662d91">
            <div class="culture-attitude-icon">
              <v-icon size="45">mdi-rocket-launch</v-icon>
            </div>
            <h3 class="mt-5">Goes the extra mile</h3>
            <p class="mt-2">
              We need people who can exceed clients’ expectations with quality
              and professionalism. Clients appreciate both big and little
              things.
            </p> </v-card
          ><!--/. culture-attitude-box-->

          <v-card class="culture-attitude-box" color="#3fae49">
            <div class="culture-attitude-icon">
              <v-icon size="50">mdi-monitor-clean</v-icon>
            </div>
            <h3 class="mt-5">Enjoys the journey</h3>
            <p class="mt-2">
              If you truly enjoy electrician jobs, you belong here. Our team is
              composed of passionate people who are excited to get things done
              every day.
            </p> </v-card
          ><!--/. culture-attitude-box-->
        </div>
      </v-container>
    </div>
    <!--/. culture-attitude-->

    <div class="sec-padding" style="background-color: #f5f5f5">
      <v-container>
        <div class="text-center">
          <h2 class="sec-title">Do you have what it takes?</h2>
          <h4 class="mt-4">
            Become a part of Washington’s leading electrical company.
          </h4>
          <p class="mt-2 secDescription ma-auto">
            Our electrical services Washington have garnered multiple awards and
            accolades. If you want to be a part of an industry leader and enjoy
            multiple opportunities for career growth, submit your resume to meet
            your new family here at Jacob Electric.
          </p>
          <v-btn height="45" color="primary" class="mt-4"
            >View All Current Opportunities</v-btn
          >
        </div>
      </v-container>
    </div>

    <div
      class="sec-padding join-team"
      style="background-color: #a0a0a0"
      id="JOINtheteam"
    >
      <v-container>
        <div class="text-center white--text">
          <h2 class="sec-title">Join the Team</h2>
          <h4 class="mt-4">Electrician Jobs Open</h4>
          <p class="mt-2  ma-auto secDescription">
            Wondering how to become an electrician in Washington state? We serve
            countless clients in the Washington area, and we need more skilled
            people to make things happen. Apply now to explore better
            possibilities with Job Electric.
          </p>
          <v-btn color="primary" height="45" class="mt-6 text-xs-caption"
            >View All Current Opportunities</v-btn
          >
        </div>
      </v-container>
    </div>

    <div class="service-form-box sec-padding">
      <v-row>
        <v-col md="12">
          <h2 class="sec-title text-center mb-4">Upload Your CV</h2>
        </v-col>
        <v-col md="4" offset-md="4" cols="12" class="ma-auto">
          <ValidationObserver ref="form" v-slot="{ invalid }">
            <v-form @submit.prevent="submit">
              <v-row>
                <v-col md="6" cols="12">
                  <ValidationProvider
                    vid="first_name"
                    name="First Name"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      v-model="contact.first_name"
                      outlined
                      dense
                      hide-details="auto"
                      placeholder="First name"
                      :error="!!errors[0]"
                      :error-messages="errors[0]"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>

                <v-col md="6" cols="12">
                  <ValidationProvider
                    vid="last_name"
                    name="Last Name"
                    rules="required"
                    v-slot="{ errors }"
                  >
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
                  <ValidationProvider
                    vid="email"
                    name="Email"
                    rules="email|required"
                    v-slot="{ errors }"
                  >
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
                  <ValidationProvider
                    vid="phone"
                    name="Phone"
                    rules="required"
                    v-slot="{ errors }"
                  >
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
                  <ValidationProvider
                    vid="city"
                    name="City"
                    rules="required"
                    v-slot="{ errors }"
                  >
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
                  <ValidationProvider
                    vid="postal_code"
                    name="Zip code"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      v-model="contact.postal_code"
                      outlined
                      dense
                      hide-details="auto"
                      placeholder="Zip Code/Postal Code"
                      :error="!!errors[0]"
                      :error-messages="errors[0]"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col md="12" cols="12">
                  <ValidationProvider
                    vid="cv"
                    name="CV"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <v-file-input
                      v-model="contact.cv"
                      class="mb-5"
                      outlined
                      hide-details="auto"
                      show-size
                      accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf"
                      truncate-length="10"
                      placeholder="Upload Your CV"
                      :error="!!errors[0]"
                      :error-messages="errors[0]"
                    ></v-file-input>
                  </ValidationProvider>
                </v-col>
                <v-col md="12" cols="12" class="text-center">
                  <v-btn
                    :loading="loading"
                    class="service-form-btn"
                    width="200"
                    height="55"
                    color="primary"
                    type="submit"
                    :disabled="invalid"
                  >
                    SEND MESSAGE
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </ValidationObserver>
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
  name: "career",
  layout: "static",
  ssr: true,
  components: {
    ValidationObserver,
    ValidationProvider
  },
  head: {
    title: "Jacob Electric | Electrical Services Washington",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Join our team of brilliant electricians in Washington. We offer electrical services Washington and we need" +
          " passionate and skilled electricians like you. Check our Electrician Jobs Washington  today!"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "electrical services Washington, how to become an electrician in Washington state, Electrician Jobs Washington \n"
      }
    ]
  },
  data() {
    return {
      loading: false,
      contact: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        city: "",
        postal_code: "",
        cv: null
      }
    };
  },
  methods: {
    submit() {
      var self = this;
      this.loading = true;
      var formData = new FormData();
      formData.append("first_name", this.contact.first_name);
      formData.append("last_name", this.contact.last_name);
      formData.append("email", this.contact.email);
      formData.append("phone", this.contact.phone);
      formData.append("city", this.contact.city);
      formData.append("postal_code", this.contact.postal_code);
      formData.append("cv", this.contact.cv);

      this.$axios
        .$post("/zeptomail/career", formData, {
          baseURL: "",
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          self.loading = false;
          (self.contact = {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            city: "",
            postal_code: "",
            cv: null
          }),
            this.$refs.form.reset();
          this.$toast.success("Sent successfully", {});
        })
        .catch(error => {
          console.log(error);
          self.loading = false;
          if (error.response) {
            this.$refs.form.setErrors(error.response.data.errors);
          }
        });
    }
  }
};
</script>

<style scoped>
.career-top {
  padding: 80px 0;
  background-color: #000000bf;
}
@media only screen and (max-width: 768px) {
  .career-top {
    padding: 40px 0;
  }
}
@media only screen and (min-width: 950px) {
  .career-top .text {
    padding: 0 200px;
  }
}
.career-top .text p {
  font-size: 17px;
  line-height: 30px;
}

/* culture-attitude */
.culture-attitude .desc {
  font-size: 18px;
  line-height: 30px;
}
.culture-attitude-boxes {
  display: flex;
}
.culture-attitude-box {
  text-align: center;
  padding: 50px 15px 50px 15px;
  color: white;
  border-radius: 0px;
}
@media only screen and (max-width: 991px) {
  .culture-attitude-boxes {
    display: block;
  }
  .culture-attitude-box {
    float: right;
    width: 50% !important;
  }
}
@media only screen and (max-width: 650px) {
  .culture-attitude-boxes {
    display: block;
  }
  .culture-attitude-box {
    width: 100% !important;
  }
}
.culture-attitude-icon {
  text-align: center;
}
.culture-attitude-icon i {
  padding: 50px;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  margin: 0 auto;
}

/* -- join-team --*/
.secDescription {
  font-size: 18px;
  line-height: 30px;
}
</style>
