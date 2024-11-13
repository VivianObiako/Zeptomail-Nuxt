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

        <h2 class="text-center display-2 pb-5">Testimonials</h2>

        <carousel  :autoplay="false" :loop="true" :autoplayTimeout="3600" :nav="false" :dots="true"
                   :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">

          <div class="test_items">

            <div class="content">
              <div class="quote">
                <v-icon class="" size="35">mdi-format-quote-open-outline</v-icon>
              </div>
              <v-rating class="rating" color="#e7711b"  :value="5" ></v-rating>
              <p class="mt-3">I used Jacob electric several times and they have always do a great job and give the best
                customer service, I have an experience with other companies and none was like Jacob electric ,
                Good quality, on time , professional and affordable
                Highly recommend. Happy customer 😉</p>
            </div>

            <div class="user_profile">
              <img src="https://lh3.googleusercontent.com/a/AATXAJzfArSapJ0nkk0OT8u9Z09MAepE81m_t72P44Gi=s40-c-c0x00000000-cc-rp-mo-br100" alt="user thumb">
              <h3>Rizq Amra</h3>

            </div>
          </div>
          <!--/. test_items-->

          <div class="test_items">

            <div class="content">
              <div class="quote">
                <v-icon class="" size="35">mdi-format-quote-open-outline</v-icon>
              </div>
              <v-rating class="rating" color="#e7711b"  :value="5" ></v-rating>
              <p class="mt-3">Great service, very professional. Installed a new living room fan where none existed. Awesome.
                Services: Light fitting installation, Fan installation, Socket or switch installation</p>
            </div>

            <div class="user_profile">
              <img src="https://lh3.googleusercontent.com/a-/AOh14Ghjas1LqjAhCKHzmePljiy58zIo65H9n65yw2ztlA=s40-c-c0x00000000-cc-rp-mo-br100" alt="user thumb">
              <h3>Gilberto Reyes</h3>

            </div>
          </div>
          <!--/. test_items-->

          <div class="test_items">

            <div class="content">
              <div class="quote">
                <v-icon class="" size="35">mdi-format-quote-open-outline</v-icon>
              </div>
              <v-rating class="rating" color="#e7711b"  :value="5" ></v-rating>
              <p class="mt-3">They happily matched a competitor's price and I appreciated their quick responses to my questions.</p>
            </div>

            <div class="user_profile">
              <img src="https://lh3.googleusercontent.com/a-/AOh14GhPBnHiY1SUKB9U4ZAb_tMXrwtlFEkEu0F8Hn2D=s40-c-c0x00000000-cc-rp-mo-br100" alt="user thumb">
              <h3>Andy Deines</h3>

            </div>
          </div>
          <!--/. test_items-->

          <div class="test_items">

            <div class="content">
              <div class="quote">
                <v-icon class="" size="35">mdi-format-quote-open-outline</v-icon>
              </div>
              <v-rating class="rating" color="#e7711b"  :value="5" ></v-rating>
              <p class="mt-3">Just an overall great job.  Good advise for future projects.  Will be using
                them in the future for all my electrical jobs.  Thanks again guys.</p>
            </div>

            <div class="user_profile">
              <img src="https://lh3.googleusercontent.com/a-/AOh14GhZRwQemd6p-35sjnWZculc8sKz1tkRpb-PMmhL-A=s40-c-c0x00000000-cc-rp-mo-br100" alt="user thumb">
              <h3>Jerome Key</h3>

            </div>
          </div>
          <!--/. test_items-->

          <div class="test_items">

            <div class="content">
              <div class="quote">
                <v-icon class="" size="35">mdi-format-quote-open-outline</v-icon>
              </div>
              <v-rating class="rating" color="#e7711b"  :value="5" ></v-rating>
              <p class="mt-3">We had a great experience working with Jacob Electric. They did a partial rewire of our
                house and were very flexible with accommodating our requests. Electricians were prompt, communicative
                and complete professionals. They did there best to make the
                re-wiring as minimally invasive as possible meaning less patch work at the end.</p>
            </div>

            <div class="user_profile">
              <img src="https://lh3.googleusercontent.com/a-/AOh14GjlZsNlVKYJvFfA02R00508ZzDqLPwQ0KxLmhqiyA=s40-c-c0x00000000-cc-rp-mo-br100" alt="user thumb">
              <h3>Noah Banning</h3>

            </div>
          </div>
          <!--/. test_items-->

          <div class="test_items">

            <div class="content">
              <div class="quote">
                <v-icon class="" size="35">mdi-format-quote-open-outline</v-icon>
              </div>
              <v-rating class="rating" color="#e7711b"  :value="5" ></v-rating>
              <p class="mt-3">Just want to say that I would give Jacob electric six stars if I could. Special recognition to
                Keifer and Brian to top notch workers. They went the extra mile to do a very good job I am very satisfied.
                Also it was a pleasure working with Lucas. He wanted to make sure I was completely satisfied with the work.
                I highly recommend Jacob electric for any of your electrical needs.  Dan Snyder</p>
            </div>

            <div class="user_profile">
              <img src="https://lh3.googleusercontent.com/a-/AOh14Gi5N5duxIf0R4xHdvQpB_OQHe0BQT0-AgCiPXr9=s40-c-c0x00000000-cc-rp-mo-br100" alt="user thumb">
              <h3>Daniel Snyder</h3>

            </div>
          </div>
          <!--/. test_items-->

          <div class="test_items">

            <div class="content">
              <div class="quote">
                <v-icon class="" size="35">mdi-format-quote-open-outline</v-icon>
              </div>
              <v-rating class="rating" color="#e7711b"  :value="5" ></v-rating>
              <p class="mt-3">Called them on a Sunday when almost every other electrician is closed. They were able to help
                me on the phone without coming out my home.  Thanks!</p>
            </div>

            <div class="user_profile">
              <img src="https://lh3.googleusercontent.com/a-/AOh14Gge2UBGxci1nOUBy0DFo0pr8qCBmam38P-w38qACzU=s40-c-c0x00000000-cc-rp-mo-br100" alt="user thumb">
              <h3>Dexter Sobrepena</h3>

            </div>
          </div>
          <!--/. test_items-->

          <div class="test_items">

            <div class="content">
              <div class="quote">
                <v-icon class="" size="35">mdi-format-quote-open-outline</v-icon>
              </div>
              <v-rating class="rating" color="#e7711b"  :value="5" ></v-rating>
              <p class="mt-3">Evaluation/assessment and estimate process and especially online payment processing
                were easy and convenient. Work was expedient. They beat their
                estimated time frame. Only a couple hiccups that had to be addressed. Overall good experience.</p>
            </div>

            <div class="user_profile">
              <img src="https://lh3.googleusercontent.com/a-/AOh14Gge2UBGxci1nOUBy0DFo0pr8qCBmam38P-w38qACzU=s40-c-c0x00000000-cc-rp-mo-br100" alt="user thumb">
              <h3>Albert Brosas</h3>

            </div>
          </div>
          <!--/. test_items-->





        </carousel>


      </v-container>

    </div>
  </section>
</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "testimonials",
    layout: 'static',
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
  .review-aria{
    .test_items{
      .content{
        background-color: #eee;
        border-radius: 10px;
        margin: 5px;
        padding: 20px 35px 0 35px;
        height: 250px;
        overflow-y: auto;
        position: relative;

        .quote{
        }
        p{
          margin: 0;
        }
        .rating{
           margin-left: -9px;
           margin-top: 10px;
          .mdi.mdi-star{
            padding: 0!important;
          }
        }
      }
      .user_profile{
        display: flex;
        align-items: center;
        margin-top: 35px;
        margin-left: 30px;

        img{
          width: 40px;
        }
        h3{
          font-size: 20px;
          margin-left: 10px;
        }
      }

    }
  }

</style>

<style lang="scss">
  .review-aria{
    .test_items{
      .content{
        .rating{
          .mdi.mdi-star{
            padding:0 3px!important;
          }
        }
      }
    }
  }
</style>
