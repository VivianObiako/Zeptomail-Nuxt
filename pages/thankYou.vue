<template class="pri-bg">
  <div class="homeAdvisor light-bg">
    <v-container>
      <div class="banner my-5">
        <v-row>
          <v-col md="7" cols="12">
            <div class="text d-flex align-start flex-column justify-center">
              <h2 class="sec-title text-white">
                Thank you. We will contact you soon
              </h2>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "thankYou",
};
</script>

<style scoped lang="scss">
  .banner{
    // background-image: url("assets/img/homeadvisor/home-unsplash.webp");
    background-image: url("assets/img/homeadvisor/banner-shape.svg");
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
    background: #161359;
    height: 500px;
    padding: 50px 50px 50px 80px;
    width: 100%;
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  }
  .banner .text h2{
    color: white;
  }
</style>
