<template>
<div class="hvac">
  <div class="hvac-banner">
    <banner
      :serviceBannerTitle="residentialBannerTitle"
      :serviceBannerDesc="residentialBannerDesc"
    >
    </banner>
  </div><!-- end banner -->


  <div class="sec-padding">
    <v-container>
      <v-row>
        <v-col md="12" cols="12">
           <h3 class="title-1 text-center mb-5">The most important aspect of heating and air conditioning is comfort.
             You want your home, business places to be comfortable in summer and winter so your family or customers can
             enjoy every season. Jacob Electric provides HVAC design and installation of new systems, or maintenance and
             repair of existing systems for our residential, commercial and industrial customers in Washington and other
             states where we have our presence.
           </h3>
        </v-col>
        <v-col md="4" class="text-center">
            <h3 class="fs-20">Residential HVAC services</h3>
            <p class="mt-4">The most important aspect of residential heating and air conditioning
              is comfort. You want your home to be comfortable in summer and winter so your
              family can enjoy every season. Jacob Electric provides HVAC design and installation of new systems,
              or maintenance and repair of existing systems for our residential customers in Washington State
          </p>
        </v-col>
        <v-col md="4" class="text-center" cols="12">
          <h3 class="fs-20">Commercial HVAC services</h3>
          <p class="mt-4">For a workforce to be effective and productive, employees need to be comfortable.
            A major component of that comfort is quality air, kept at the right temperature. Simultaneously,
            costs need to be guarded against by using efficient HVAC systems. Jacob Electric is ready to meet
            these heating and air conditioning needs with design, installation, maintenance and repair services for HVAC in Washington State

          </p>
        </v-col>
        <v-col md="4" cols="12" class="text-center">
          <h3 class="fs-20">Industrial HVAC services</h3>
          <p class="mt-4">Industry presents some of the most challenging demands for heating and air conditioning. Large rooms,
            demanding work, unhealthy vapors and temperature changes driven by the work environment are features
            of many industrial settings. Jacob Electric specializes in the field of design and installation for
            industrial properties and is ready to prepare your building for the demands of its tenants
          </p>
        </v-col>

      </v-row>
    </v-container>
  </div>


  <div class="customer-satisfaction light-bg sec-padding">
  <v-container>
     <v-row>
       <v-col md="5" cols="12" class="ma-auto">
         <h2 class="sec-title mb-8">These options <br>will  make you happy</h2>
         <img class="satisfaction-bg" src="@/assets/img/hvac/make-you-happy.svg" alt="happy">
       </v-col>
       <v-col md="7" cols="12" class="ma-auto">
          <div class="mb-5">
             <h3>Commercial and Industrial Heating</h3>
              <p class="mt-2">Jacob Electric team are skilled in developing and installing industrial heating
              solutions for warehouses and factories as well as commercial heating for offices and production areas of
              all kinds. We are a full Gas Safe commissioning service and are committed to delivering the optimum solution for any environment.
            </p>
          </div>
         <div class="mb-5">
           <h3>Commercial and Industrial Ventilation</h3>
           <p class="mt-2">Jacob Electric use the latest technology in commercial and industrial ventilation
             to fit the specific requirements of your working structure. For fume removal, office
             ventilation and heat recovery across factories, warehouses, office, retail and production areas,
             Jacob Electric are industry leaders, delivering bespoke, effective and energy efficient solutions
             that result in more productive working environments.
           </p>
         </div>
         <div>
           <h3>Commercial and Industrial Air Conditioning</h3>
           <p class="mt-2">Jacob Electric provide the latest Industrial and Commercial Air Conditioning
             Systems and equipment for any type of building. All applications are designed
             with energy efficiency as standard and the specialist team at Jacob Electric are
             dedicated to finding the right solution for any size project – setting standards in
             service from design inception right through to project completion.
           </p>
         </div>

       </v-col>
     </v-row>
  </v-container>
  </div><!--/. customer-satisfaction-->


  <section class="sec-padding">
    <v-container>
      <div class="text-center">
        <h2 class="sec-title">We are where you are</h2>
        <p class="mt-3 mb-5">We service all cities surrounded the following counties</p>
        <locationCard></locationCard>
      </div>
    </v-container>
  </section><!--/. location -->


  <div class="sec-padding pt-3 pb-8">
    <testimonial/>
  </div><!-- testimonial -->

</div>
</template>

<script>
  import '~/assets/css/reset.css';
  import banner from '~/components/static/services/banner';
  import locationCard from '~/components/static/cards/location-card';
  import testimonial from '~/components/static/services/testimonial';

  export default {
    components:{
      banner,
      locationCard,
      testimonial,
    },
    name: "hvac",
    layout: 'static',
    ssr: true,



    data() {
      return {
        residentialBannerTitle: 'One of the leading HVAC Companies in Washington\n',
        residentialBannerDesc:'Industrial and commercial HVAC solutions for a full range of standard and bespoke applications\n'
      }
    }

  }



</script>

<style scoped>
  .hvac-banner{
    background-image: url("assets/img/services/industrial/banner.jpg");
    background-size: cover;
    background-position: center;
  }
  .satisfaction-bg{
   width: 70%;
  }

</style>

