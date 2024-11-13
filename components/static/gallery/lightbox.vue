<template>
  <section class="gallery pt-2 mb-5 light-bg">
    <v-container>
      <h3 class="text-center sec-title mb-5">Gallery</h3>
      <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
     <v-row justify="center" class="mt-12">
       <v-btn @click="loadmore" color="primary" v-if="extraImages.length > 0">
         Load more
       </v-btn>
     </v-row>
      <vue-gallery-slideshow :images="lightbox" :index="index" @close="index = null"></vue-gallery-slideshow>
    </v-container>
  </section>
</template>

<script>
  import VueGallerySlideshow from 'vue-gallery-slideshow';
  import img1 from '~/assets/img/gallery/1.JPG';
  import img4 from '~/assets/img/gallery/4.JPG';
  import img5 from '~/assets/img/gallery/5.JPG';
  import img6 from '~/assets/img/gallery/6.JPG';
  import img7 from '~/assets/img/gallery/7.JPG';
  import img8 from '~/assets/img/gallery/8.JPG';
  import img9 from '~/assets/img/gallery/9.JPG';
  import img10 from '~/assets/img/gallery/10.JPG';
  import img21 from '~/assets/img/gallery/21.JPG';
  import img25 from '~/assets/img/gallery/25.JPG';
  import img26 from '~/assets/img/gallery/26.JPG';
  import img35 from '~/assets/img/gallery/35.JPG';
  import img36 from '~/assets/img/gallery/36.JPG';
  import img37 from '~/assets/img/gallery/37.JPG';
  import img38 from '~/assets/img/gallery/38.JPG';
  import img39 from '~/assets/img/gallery/39.JPG';
  import img40 from '~/assets/img/gallery/40.JPG';
  import img41 from '~/assets/img/gallery/41.JPG';
  import img42 from '~/assets/img/gallery/42.JPG';
  import img43 from '~/assets/img/gallery/43.JPG';
  import img44 from '~/assets/img/gallery/44.JPG';
  import img45 from '~/assets/img/gallery/45.JPG';
  import img46 from '~/assets/img/gallery/46.JPG';
  import img47 from '~/assets/img/gallery/47.JPG';
  import img48 from '~/assets/img/gallery/48.JPG';
  import img49 from '~/assets/img/gallery/49.JPG';
  import img50 from '~/assets/img/gallery/50.JPG';
  import img51 from '~/assets/img/gallery/51.JPG';
  import img52 from '~/assets/img/gallery/52.JPG';
  import img53 from '~/assets/img/gallery/53.JPG';
  import img54 from '~/assets/img/gallery/54.JPG';
  import img55 from '~/assets/img/gallery/55.JPG';
  import img56 from '~/assets/img/gallery/56.JPG';
  import img57 from '~/assets/img/gallery/57.JPG';
  import img58 from '~/assets/img/gallery/58.JPG';
  import img59 from '~/assets/img/gallery/59.JPG';
  import img60 from '~/assets/img/gallery/60.JPG';

  const  carousel = process.client ? require('vue-owl-carousel'): undefined;

  export default {
    name: "lightbox",
    ssr: true,
    components: { carousel,VueGallerySlideshow },
    data: () => ({
      lightbox: [
        img1,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img21,
        img25,
        img26,
        img35,
        img36,
        img37,
        img38,
        img39,
        img40,
        img41,
        img42,
        img43,
        img44,
        img45,
        img46,
      ],
      images: [
        img1,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img21,
      ],
      extraImages: [

        img25,
        img26,
        img35,
        img36,
        img37,
        img38,
        img39,
        img40,
        img41,
        img42,
        img43,
        img44,
        img45,
        img46,
        img47,
        img48,
        img49,
        img50,
        img51,
        img52,
        img53,
        img54,
        img55,
        img56,
        img57,
        img58,
        img59,
        img60,
      ],
      index: null
    }),
    methods: {
      loadmore(){
        let data = this.extraImages.splice(0, 6);
        console.log(data)
        this.images = this.images.concat(data)

      }
    }
  }

</script>

<style scoped lang="scss">
  .gallery {
    img{
      width: 33.3%;
      height: 250px;
      object-fit: cover;
    }
    @media only screen and (max-width: 991px) {
      img{
        width: 50%;
        height: 250px;
        object-fit: cover;
      }
    }
    @media only screen and (max-width: 500px) {
      img{
        width: 100%;
        height: 250px;
        object-fit: cover;
        margin:0 5px;
      }
    }
  }
</style>
