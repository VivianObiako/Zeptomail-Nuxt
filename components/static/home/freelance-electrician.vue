<template>
  <section class="jacob-joining d-flex justify-center flex-column">
    <v-container>
      <v-row>
        <v-col lg="5" md="7" sm="7" cols="12">
          <h2 class="white--text">Become one of our happy journeyman electricians and enjoy all the perks</h2>
          <p class="white--text mt-5">
            Are you looking for better work flexibility and better pay? Join our Jacob
            Electric Freelance Electrician Program in
            Washington and start a thriving freelancing career with our flexible and rewarding system.
          </p>

          <div class="jacob-joining-btn">
            <v-row class="mt-5">
              <v-col md="5" cols="5">
                <v-card elevation="0" color="transparent" href="https://play.google.com/store/apps" target="_blank">
                  <img class="w-full" src="@/assets/img/freelance/playstore.png" alt="feature">
                </v-card>
              </v-col>
              <v-col md="5" cols="5">
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
    name: "freelance-electrician",
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
    position: relative;
    z-index: 3;
  }
  .jacob-joining:after{
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: -1;
   width: 100%;
    height: 100%;
    background-image: linear-gradient(157deg, #0000009e, #978b877a);
  }

  .jacob-joining-btn img{
    height: 50px;
  }

  @media only screen and (max-width: 768px)   {
    .jacob-joining-btn img{
      height: auto;
    }
  }


</style>
