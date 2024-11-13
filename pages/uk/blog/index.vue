<template>
  <div class="blog light-bg py-15">
    <v-container>
      <v-row>
        <v-col md="12" cols="12">
          <h1 class="text-center sec-title pb-5">All latest post from jacobelectric</h1>
        </v-col>
        <v-col md="4" sm="6" cols="12">
          <div class="blog-card">
            <img class="w-full" src="@/assets/img/blog/blog-bg-1.png" alt="bg">
            <div class="text">
              <h3>Why SAVE Energy?</h3>
              <p>Most of us doesn’t mind about the electrical consumption in our daily routines. We use our Computers, Phones,
                the lights and AC. However, when the bills start coming,
                that’s the time that we say to ourselves that I could have save if I did this or so.</p>
              <div class="d-flex justify-space-between">
                <v-btn class="mt-4" to="/blog/post" color="primary" elevation="0">Read More</v-btn>
                <v-btn class="mt-4" to="#" color="primary" elevation="0" title="share the blog">
                  <v-icon>mdi-share</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>


      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    components:{
    },
    name: "blog",
    layout: 'ukstatic',
    ssr: true,
  }
</script>

<style scoped lang="scss">
  .blog-card{
    box-shadow: 1px 1px 5px #eee;
    background-color: white;
    img{
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
    .text{
      padding: 15px;
    }
  }

</style>
