<template>
  <section class="jacob-joining d-flex justify-center flex-column">
    <v-container>
      <v-row>
        <v-col md="5">
          <h2 class="white--text">Work independently by joining Jacob Electric Freelance Electrician</h2>
          <p class="white--text mt-5">
            Are you a licensed or practicing electrician looking for better work flexibility and stable pay?
            Join the<b>Jacob Electric Freelance Electrician Program</b> and work with time flexibility and exciting perks.
          </p>

          <div class="jacob-joining-btn">
            <v-row class="mt-5">
              <v-col md="5">
                <v-card elevation="0" color="transparent" href="https://play.google.com/store/apps" target="_blank">
                  <img class="w-full" src="@/assets/img/freelance/playstore.png" alt="feature">
                </v-card>
              </v-col>
              <v-col md="5">
                <v-card elevation="0" color="transparent" href="https://www.apple.com/app-store/" target="_blank">
                  <img class="w-full" src="@/assets/img/freelance/appstore.png" alt="feature">
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>

  </section><!-- /. jacob-joining -->

</template>

<script>

  export default {
    name: "freelance",
  }
</script>


<style scoped>
  .feature-item img{
    width: 80px;
  }
  /*--jacob-joining--*/
  .jacob-joining{
    height: 550px;

    background-image: url("assets/img/freelance/banner-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }
  .jacob-joining-btn img{
    height: 50px;
  }


</style>
