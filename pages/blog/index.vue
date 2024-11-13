<template>
  <div class="blog light-bg py-15">
    <v-container>
      <v-row>
        <v-col md="12" cols="12">
          <h1 class="text-center sec-title pb-5">All latest post from jacobelectric</h1>
        </v-col>
        <template v-if="!blogs">
        <v-col md="4" sm="6" cols="12">
            <v-skeleton-loader
              type=" image, article"
            ></v-skeleton-loader>
        </v-col>
          <v-col md="4" sm="6" cols="12">
            <v-skeleton-loader
              type=" image, article"
            ></v-skeleton-loader>
          </v-col>
          <v-col md="4" sm="6" cols="12">
            <v-skeleton-loader
              type=" image, article"
            ></v-skeleton-loader>
          </v-col>
        </template>
        <template v-else>
          <v-col md="4" sm="6" cols="12" v-for="(blog, index) in blogs" :key="index">
            <blog-card :blog="blog" />
          </v-col>
        </template>
      </v-row>
    </v-container>



  </div>
</template>

<script>
  export default {
    components:{
    },
    name: "blog",
    layout: 'static',
    ssr: true,
    data(){
      return {
        blogs: null,
        loading: true,
      }
    },
    methods: {
      getPosts(){
        this.loading = true;
        this.$axios.$post('/customer/blog/post/all/filtered').then(res => {
          this.blogs = res.data;
          this.loading = false;
        })
      },
    },
    beforeMount() {
      this.getPosts();
    }

  }
</script>


