<template>
  <div>
    <h2 class="sec-title text-center">See what happy customers have to <br> say about us</h2>
    <v-container>
      <carousel :autoplay="true" :nav="false"
                :responsive="{
                0:{items:1,nav:false},
                800:{items:2,nav:false},
                1024:{items:3,nav:false}}">

        <div class="testimonial-item">
          <v-rating class="pl-0"
                    readonly
            :value="rating"
            color="yellow darken-3"
            half-increments
          ></v-rating>
          <h3 CLASS="mt-3">Stanley Garner</h3>
          <p class="mt-4">“The team really knows what they’re doing. They work fast without
            compromising the quality.
            Our circuit breaker was replaced in no time. Thanks for the prompt and quality service.”</p>
        </div><!-- /. service-card-item -->

        <div class="testimonial-item">
          <v-rating
            readonly
            :value="rating"
            color="yellow darken-3"
            half-increments
          ></v-rating>
          <h3 CLASS="mt-3">Kayla Dean</h3>
          <p class="mt-4">“Thank you Jacob Electric for helping us
            with our landscape lighting. The outcome was beautiful.
            This team is highly recommended. They are not only quick and
            professional but also very welcoming. A+++”</p>
        </div><!-- /. service-card-item -->

        <div class="testimonial-item">
          <v-rating
            readonly
            :value="rating"
            color="yellow darken-3"
            half-increments
          ></v-rating>
          <h3 CLASS="mt-3">Daniel Davis Woodinville, WA</h3>
          <p class="mt-4">“They do very good electrical work. They are friendly, conscientious about their work,
            arrive on time, charge fair prices, and make good recommendations about our electrical service.
            “I liked their personal touch, and helpful,
            attentive interest. I’ve used then twice and would use them again.”</p>
        </div><!-- /. service-card-item -->

        <div class="testimonial-item">
          <v-rating
            readonly
            :value="rating"
            color="yellow darken-3"
            half-increments
          ></v-rating>
          <h3 CLASS="mt-3">Daniel Davis Woodinville, WA</h3>
          <p class="mt-4">“They do very good electrical work. They are friendly, conscientious about their work,
            arrive on time, charge fair prices, and make good recommendations about our electrical service.
            “I liked their personal touch, and helpful,
            attentive interest. I’ve used then twice and would use them again.”</p>
        </div><!-- /. service-card-item -->

      </carousel>

    </v-container>
  </div>


</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "testimonial",
    components: { carousel },
    data: () => ({
      rating: 4.5,
    }),
  }
</script>


<style scoped>
  .testimonial-item{
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 15px;
    padding: 50px;
    height: 400px;
  }
  .testimonial-item h3{
    font-size: 15px;
  }
  @media only screen and (min-width: 950px) and (max-width: 1265px) {
    .testimonial-item{
      padding: 20px;
      height: auto;
    }
  }
  @media only screen  and (max-width: 1225px) {
    .testimonial-item{
      height: auto;
    }
    .testimonial-item{
      padding: 20px;
    }
  }
</style>
