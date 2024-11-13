<template>
  <section class="testimonials pt-10 mb-15">
    <v-container>
      <div class="top">
        <h2 class="pb-3 sec-title">Visit Us at Our Google+ Page</h2>
        <h3>click to here and leave a google review at</h3>
        <v-card class="mt-2" href="https://www.google.com/search?q=jacobelectricgroup&oq=jacobelectricgroup&aqs=chrome..69i57j69i59j69i60l5.520j0j4&sourceid=chrome&ie=UTF-8#lrd=0x549011636cc84c0d:0x87ee8223c449c1ec,1,,,"
                target="_blank"
                plain color="transparent" elevation="0">
          <img src="@/assets/img/testimonials/google-rating.png" alt="google-rating">
        </v-card>

      </div>
    </v-container>

    <div class="review-aria">
      <v-container>
        <v-row>
          <v-col md="3">
            <div class="box">
              <h3>Incredible Beauty Salon!</h3>
              <v-rating class="ma-0 pa-0"
                        hover
                        length="5"
                        size="20"
                        :value="ratingValue"
              ></v-rating>
              <p>I came in for an eyelash extension service and to my surprise, they have some really
                affordable prices for it! My eyelashes look
                incredible! They are so long which is just what I wanted and they
                look natural! Thank you so much!</p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="box">
              <h3>Incredible Beauty Salon!</h3>
              <v-rating class="ma-0 pa-0"
                        hover
                        length="5"
                        size="20"
                        :value="ratingValue"
              ></v-rating>
              <p>I came in for an eyelash extension service and to my surprise, they have some really
                affordable prices for it! My eyelashes look
                incredible! They are so long which is just what I wanted and they
                look natural! Thank you so much!</p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="box">
              <h3>Incredible Beauty Salon!</h3>
              <v-rating class="ma-0 pa-0"
                        hover
                        length="5"
                        size="20"
                        :value="ratingValue"
              ></v-rating>
              <p>I came in for an eyelash extension service and to my surprise, they have some really
                affordable prices for it! My eyelashes look
                incredible! They are so long which is just what I wanted and they
                look natural! Thank you so much!</p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="box">
              <h3>Incredible Beauty Salon!</h3>
              <v-rating class="ma-0 pa-0"
                        hover
                        length="5"
                        size="20"
                        :value="ratingValue"
              ></v-rating>
              <p>I came in for an eyelash extension service and to my surprise, they have some really
                affordable prices for it! My eyelashes look
                incredible! They are so long which is just what I wanted and they
                look natural! Thank you so much!</p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="box">
              <h3>Incredible Beauty Salon!</h3>
              <v-rating class="ma-0 pa-0"
                        hover
                        length="5"
                        size="20"
                        :value="ratingValue"
              ></v-rating>
              <p>I came in for an eyelash extension service and to my surprise, they have some really
                affordable prices for it! My eyelashes look
                incredible! They are so long which is just what I wanted and they
                look natural! Thank you so much!</p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="box">
              <h3>Incredible Beauty Salon!</h3>
              <v-rating class="ma-0 pa-0"
                        hover
                        length="5"
                        size="20"
                        :value="ratingValue"
              ></v-rating>
              <p>I came in for an eyelash extension service and to my surprise, they have some really
                affordable prices for it! My eyelashes look
                incredible! They are so long which is just what I wanted and they
                look natural! Thank you so much!</p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="box">
              <h3>Incredible Beauty Salon!</h3>
              <v-rating class="ma-0 pa-0"
                        hover
                        length="5"
                        size="20"
                        :value="ratingValue"
              ></v-rating>
              <p>I came in for an eyelash extension service and to my surprise, they have some really
                affordable prices for it! My eyelashes look
                incredible! They are so long which is just what I wanted and they
                look natural! Thank you so much!</p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="box">
              <h3>Incredible Beauty Salon!</h3>
              <v-rating class="ma-0 pa-0"
                        hover
                        length="5"
                        size="20"
                        :value="ratingValue"
              ></v-rating>
              <p>I came in for an eyelash extension service and to my surprise, they have some really
                affordable prices for it! My eyelashes look
                incredible! They are so long which is just what I wanted and they
                look natural! Thank you so much!</p>
            </div>
          </v-col>

        </v-row>
      </v-container>

    </div>
  </section>
</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "testimonials",
    layout: 'ukStatic',
    ssr: true,
    data: () => ({
      ratingValue: 5,
    }),
    components: { carousel },

  }
</script>

<style scoped lang="scss">
  .top{
    img{
      width: 150px;
    }
  }
  .review-aria .box{
    background-color: #eee;
    padding: 25px;
    border-radius: 5px;
  }

</style>
