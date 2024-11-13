<template>
  <div class="post light-bg py-10" >
    <v-container>
      <template v-if="blog">


        <img class="w-full" :src="blog.cover.img_url" alt="bg">
  <!--      <p>Most of us doesn’t mind about the electrical consumption in our daily routines.-->
  <!--        We use our Computers, Phones, the lights and AC. However, when the bills start coming,-->
  <!--        that’s the time that we say to ourselves that I could have save if I did this or so.</p>-->
        <h3>{{blog.title}}</h3>

        <div class="post-content" v-html="blog.content">

        </div>
      </template>
    </v-container>
  </div>
</template>

<script>
  export default {
    components:{
    },
    name: "single-blog",
    layout: 'static',
    ssr: true,
    data(){
      return {
        blog: null,
        loading: true,
      }
    },
    methods: {
      getPosts(){
        this.loading = true;
        this.$axios.$get('/customer/blog/post/details/by/'+ this.$route.params.slug).then(res => {
          this.blog = res.data;
          this.loading = false;
        })
      },
    },
    beforeMount() {
      this.getPosts();
    }

  }
</script>

<style scoped lang="scss">

.post{
  img{
    width: 100%;
  }
  h3{
    font-size: 27px;
    font-weight: 500;
    margin: 15px 0;
  }
}


</style>
