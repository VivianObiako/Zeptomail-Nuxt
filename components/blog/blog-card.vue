<template>
  <div class="blog-card">
    <img class="w-full" :src="blog.cover.thumb_url" alt="bg">
    <div class="text">
      <h3>{{blog.title}}</h3>
      <p>{{blog.short_description}}</p>
      <div class="d-flex justify-space-between">
        <v-btn class="mt-4" :to="'/blog/' + blog.slug" color="primary" elevation="0">Read More</v-btn>
        <v-btn class="mt-4" to="#" color="primary" elevation="0" title="share the blog">
          <v-icon>mdi-share</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "blog-card",
        props: ['blog']
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
