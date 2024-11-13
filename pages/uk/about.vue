<template>
  <div class="about">
    <about-component/>
    <section class="more-about-sec sec-padding d-flex justify-center flex-column">
      <v-container>
        <v-row>
          <v-col md="6" offset-md="3" class="text-center">
            <h2 class="sec-title white--text">Enjoy Peace of Mind: Britain’s Best Got Your Back</h2>
            <p class="white--text mt-5"> Our team is composed of double certified electricians in United Kingdom.
              You can rest easy knowing that quality is warranted, risks are abolished, and satisfaction is
              guaranteed. We exist to help you receive the best electrical services that you deserve.
              Our seasoned electricians in England are equipped and ready to get any electrical job done the best way
              possible.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>

  import AboutComponent from "../../components/about/about-component";

  export default {
    name: "ukabout",
    layout: 'ukStatic',
    components: {
      AboutComponent,
    },
  }
</script>

<style scoped>

  /*-- more-about-sec --*/
  .more-about-sec {
    background-image: url("assets/img/home/more-about-us.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 450px;
    align-items: center;
    z-index: 3;
    position: relative;
  }

  @media only screen and (max-width: 500px) {
    .more-about-sec {
      height: auto;
    }
  }

  .more-about-sec h2 {
    text-shadow: 1px 1px 10px #000000 !important;
  }

  .more-about-sec p {
    text-shadow: 1px 1px 10px #000000 !important;
  }

  .more-about-sec:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: rgb(0 0 0 / 59%);
    z-index: -1;
  }

</style>
