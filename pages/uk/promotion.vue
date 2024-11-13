<template>
  <div class="promotion light-bg">
    <v-container>
      <div class="promotion-top">
        <v-row>
          <v-col md="8" offset-md="2" class="text-center">
            <h2 class="mt-8">Low Prices, Great Services</h2>
            <p class="mt-4">
              We have the lowest pricing in England, and we have strategically set up our internal systems
              to cut costs and leave clients with the best rates they need.
              Fill out the form below to upload your recent quotation that you received
              from other client and let us beat the price for you.
            </p>
          </v-col>
        </v-row>
      </div>
      <!--/. promotion-top-->
    </v-container>

    <ValidationObserver ref="form" v-slot="{ invalid }">
      <div class="promotion-form-sec pb-15">
        <v-container>
          <v-row>
            <v-col md="8" offset-md="2">
              <div class="promotion-form">
                <v-form>
                  <v-row>
                    <v-col md="12">
                      <h3>PERSONAL INFORMATION</h3>
                    </v-col>

                    <v-col md="6" cols="12">
                      <ValidationProvider
                        vid="first_name"
                        name="First Name"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          outlined
                          dense
                          label="First Name*"
                          v-model="data.first_name"
                          hide-details="auto"
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
                          outlined
                          dense
                          label="Last Name*"
                          v-model="data.last_name"
                          hide-details="auto"
                          :error="!!errors[0]"
                          :error-messages="errors[0]"
                        ></v-text-field>
                      </ValidationProvider>
                    </v-col>

                    <v-col md="6" cols="12">
                      <ValidationProvider
                        vid="email"
                        name="Email"
                        rules="required|email"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          outlined
                          dense
                          label="Email*"
                          v-model="data.email"
                          hide-details="auto"
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
                          outlined
                          dense
                          label="Phone*"
                          v-model="data.phone"
                          hide-details="auto"
                          :error="!!errors[0]"
                          :error-messages="errors[0]"
                        ></v-text-field>
                      </ValidationProvider>
                    </v-col>

                    <v-col cols="12">
                      <ValidationProvider
                        vid="address"
                        name="Address"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          outlined
                          dense
                          label="Address*"
                          v-model="data.address"
                          hide-details="auto"
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
                          outlined
                          dense
                          label="City*"
                          v-model="data.city"
                          hide-details="auto"
                          :error="!!errors[0]"
                          :error-messages="errors[0]"
                        ></v-text-field>
                      </ValidationProvider>
                    </v-col>

                    <v-col md="6" cols="12">
                      <ValidationProvider
                        vid="postal_code"
                        name="Postal Code"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          outlined
                          dense
                          label="Zip Code/Postal Code*"
                          v-model="data.postal_code"
                          hide-details="auto"
                          :error="!!errors[0]"
                          :error-messages="errors[0]"
                        ></v-text-field>
                      </ValidationProvider>
                    </v-col>

                    <v-col cols="12">
                      <label>Upload Your last Quotation*.</label>
                      <vue-dropzone
                        class="card-border-dashed"
                        ref="myVueDropzone"
                        id="dropzone"
                        :options="dropzoneOptions"
                        :destroyDropzone="true"
                        :useCustomSlot="true"
                      >
                        <div class="dropzone-custom-content">
                          <v-icon size="60" class="mb-2" color="#E7E7E7">mdi-cloud-upload-outline</v-icon>
                          <h3 class="dropzone-custom-title">Drag and drop to upload quotation!</h3>
                          <div class="subtitle">...or click to select a file from your computer</div>
                        </div>
                      </vue-dropzone>
                    </v-col>

                    <v-col cols="12">
                      <label>Any photography of the job? Optional</label>
                      <vue-dropzone
                        class="card-border-dashed"
                        ref="photography"
                        id="dropzones"
                        :options="dropzoneOptionsPhoto"
                        :destroyDropzone="true"
                        :useCustomSlot="true"
                      >
                        <div class="dropzone-custom-content">
                          <v-icon size="60" class="mb-2" color="#E7E7E7">mdi-cloud-upload-outline</v-icon>
                          <h3 class="dropzone-custom-title">Drag and drop to upload photography!</h3>
                          <div class="subtitle">...or click to select a file from your computer</div>
                        </div>
                      </vue-dropzone>
                    </v-col>

                    <v-col cols="12">
                      <label>Would you like to share your budget? Optional</label>
                      <v-row>
                        <v-col cols="6">
                          <ValidationProvider
                            vid="price_from"
                            name="Price from"
                            v-slot="{ errors }"
                          >
                            <v-text-field
                              outlined
                              dense
                              label="Price From"
                              v-model="data.price_from"
                              hide-details="auto"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="6">
                          <ValidationProvider vid="price_to" name="Price from" v-slot="{ errors }">
                            <v-text-field
                              outlined
                              dense
                              label="Price to"
                              v-model="data.price_to"
                              hide-details="auto"
                              :error="!!errors[0]"
                              :error-messages="errors[0]"
                            ></v-text-field>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col md="12" class="text-center">
                      <v-btn
                        width="200"
                        height="45"
                        @click="submit()"
                        class="promotion-btn"
                        :disabled="invalid"
                        :loading="loading"
                      >SUBMIT</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </div>
              <!--/. promotion-form -->
            </v-col>
          </v-row>
        </v-container>
      </div>
    </ValidationObserver>
    <!--/. promotion-form-sec-->
  </div>
</template>

<script>
import "~/assets/css/reset.css";
const vue2Dropzone = process.client ? require("vue2-dropzone") : undefined;
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";

extend("email", email);
extend("required", required);

export default {
  name: "promotion",
  layout: "ukStatic",
  head: {
    title: 'Jacob Electric | Promotion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Jacob Electric offers high-quality electrical services in Washington. We serve residential, commercial, and industrial spaces day and night.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'electrical services in Washington, electrical work discount, cheap electrician, affordable electrical company'
      },
    ],
  },
  components: {
    vueDropzone: vue2Dropzone,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      loading: false,
      data: {
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        address: null,
        city: null,
        postal_code: null,
        quotations: null,
        photography: null,
        price_from: null,
        price_to: null,
      },
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        autoQueue: false,
        thumbnailWidth: 150,
        acceptedFiles: 'image/*,application/pdf, .doc, .docx' ,
        maxFilesize: 5,
        headers: { "My-Awesome-Header": "header value" },
        addRemoveLinks: true,
      },
      dropzoneOptionsPhoto: {
        url: "https://httpbin.org/post",
        autoQueue: false,
        thumbnailWidth: 150,
        acceptedFiles: 'image/*' ,
        maxFilesize: 5,
        headers: { "My-Awesome-Header": "header value" },
        addRemoveLinks: true,
      },
    };
  },
  methods: {
    submit() {
      this.loading = true;
      this.data.quotations = this.$refs.myVueDropzone.getAcceptedFiles();
      this.data.photography = this.$refs.photography.getAcceptedFiles();

      var formData = new FormData();
      formData.append("first_name", this.data.first_name);
      formData.append("last_name", this.data.last_name);
      formData.append("email", this.data.email);
      formData.append("phone", this.data.phone);
      formData.append("address", this.data.address);
      formData.append("city", this.data.city);
      formData.append("postal_code", this.data.postal_code);
      formData.append("price_from", this.data.price_from);
      formData.append("price_to", this.data.price_to);
      this.data.quotations.forEach((file) => {
        formData.append("quotations[]", file);
      });
      this.data.photography.forEach((file) => {
        formData.append("photography[]", file);
      });

      this.$axios
        .$post("website/mail/promotion-submit", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.loading = false;
         // this.$toast.success("Successfully sent ", {});

          this.data = {
            first_name: null,
            last_name: null,
            email: null,
            phone: null,
            address: null,
            city: null,
            postal_code: null,
            quotations: null,
            photography: null,
            price_from: null,
            price_to: null,
          };
          this.$refs.myVueDropzone.removeAllFiles()
          this.$refs.photography.removeAllFiles()
          this.$refs.form.reset();
          this.$router.replace('/thankyou')
        })
        .catch((error) => {
          this.loading = false;
          if (error.response) {
            if (error.response.data.errors) {
              // this.$toast.error(error.response.data.errors.message[0], {});
            } else {
              this.$toast.error(error.response.data.message, {});
            }
          }
        });
    },
  },
};
</script>

<style scoped>
.promotion .logo {
  width: 150px !important;
}
.promotion-top {
  padding: 0 105px;
}
@media only screen and (max-width: 768px) {
  .promotion-top {
    padding: 20px;
  }
}
.promotion-form {
  background-color: white;
  padding: 45px;
  border-right: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}

/*-- promotion-form-sec --*/
.promotion-form-sec {
  background-image: url("assets/img/promotion/form-bg.png");
  background-repeat: no-repeat;
  background-position: right bottom;
}
.promotionUploaded {
  overflow: auto;
  width: 100%;
}
.UploadedItem {
  width: 80px;
}
.UploadedItem img {
  object-fit: cover;
}
.promotionInput .browse {
  color: red;
}
.promotion-btn {
  background: linear-gradient(270deg, #fb855e 7.41%, #fb675e 60.19%);
  border-radius: 4px;
  color: white;
}
</style>
