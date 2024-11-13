<template>
  <div class="confirmation light-bg">
     <v-container>
       <v-row>
         <v-col md="6" offset-md="3" class="">
           <div class="lead-step-box text-center">
             <h2 class="mt-16 display-1">Confirmation</h2>
             <h3 class="mt-4">We have received your electrical need information, and our team will
               contact you shortly to arrange for a qualify electrician to come and
               give you estimate.</h3>
             <p class="mt-5">While waiting, try and connect with us on social media to stay connected
             </p>
             <div class="d-lg-flex d-block social-link  justify-center mt-10">
               <img class="50px" src="@/assets/img/confirmation/Picture1.png" alt="facebook">
               <img src="@/assets/img/confirmation/Picture2.png" alt="facebook">
             </div>
           </div>
         </v-col>
       </v-row>
     </v-container>
  </div>

</template>

<script>
  export default {
    name: "confirmation",
    layout: 'static',
    ssr: true,
    head: {
      title: 'Jacob Electric | Electrical Services Washington',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ' '
        },
      ],
    },
    components:{
    },

  }
</script>

<style scoped>
.confirmation{
  height: 450px;
}
@media only screen and (max-width: 767px) {
  .confirmation{
    height: 100vh;
  }
}
  .social-link img{
    width: 150px;
    margin: 0 15px;
  }

</style>
