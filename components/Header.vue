<template>
<header>
    <div class="main-header">
      <v-container>
        <div class="mobile-menu justify-space-between align-center">
          <nuxt-link to="/" class="">
            <img class="site-logo" src="@/assets/img/main-logo.png" alt="logo" />
          </nuxt-link>

          <v-btn plain @click.stop="drawer = !drawer" class="">
            <v-icon>  mdi-menu </v-icon>
          </v-btn>
          <v-navigation-drawer
            width="100%" class="mobile-menu-body" v-model="drawer" absolute temporary
          >
            <v-container>
              <div class="d-flex mb-10">

                <router-link to="/" class="w-full ">
                  <img class="site-logo" src="@/assets/img/main-logo.png"/>
                </router-link>

                <v-btn plain @click.stop="drawer = !drawer">
                  <v-icon>mdi-close</v-icon>
                </v-btn>

              </div>

              <v-list flat height="">
                <v-list-item-group
                  color="primary"
                >
                  <v-list-item to="/">
                    Home
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item to="/about">
                    About Us
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn  class="transparent text--white nav-btn"
                              active-class="nav-active"
                              elevation="0"
                              v-bind="attrs" v-on="on"
                      >
                        Electrical
                        <v-icon>mdi-chevron-down</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <div>
                        <v-btn  class="transparent text--white nav-btn"
                                active-class="nav-active"
                                elevation="0"
                                to="service-residential"  >
                          Residential
                        </v-btn>
                      </div>
                      <div>
                        <v-btn  class="transparent text--white nav-btn"
                                active-class="nav-active"
                                elevation="0"
                                to="service-commercial"
                        >
                          Commercial
                        </v-btn>
                      </div>
                      <div>
                        <v-btn  class="transparent text--white nav-btn"
                                active-class="nav-active"
                                elevation="0"
                                to="service-industrial"  >
                          Industrial
                        </v-btn>
                      </div>

                    </v-list>
                  </v-menu>

                  <v-divider></v-divider>

                  <v-list-item to="/freelance-electrician">
                    Freelance electrician
                  </v-list-item>
                  <v-divider></v-divider>

                  <v-list-item to="/own-franchise">
                    Own a Franchise
                  </v-list-item>
                  <v-divider></v-divider>

                  <v-list-item to="/career">
                    Career
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item to="/promotion">
                    Promotion
                  </v-list-item>
                  <v-divider></v-divider>

                </v-list-item-group>
              </v-list>


            </v-container>
          </v-navigation-drawer>

        </div><!--/. mobile-menu -->
        <!-- desktop  menu -->
        <div class="custom-menu-lg justify-space-between ma-0 mx-5 mx-md-0">

          <nuxt-link to="/" class="">
            <img class="site-logo" src="@/assets/img/main-logo.png" alt="logo" />
          </nuxt-link>

            <v-toolbar-items>

                <v-btn class="transparent text--white nav-btn" height="auto"
                       elevation="0"
                       to="/"
                       active-class="nav-active"
                > Home
                </v-btn>

              <v-btn class="transparent text--white nav-btn"
                     elevation="0"
                     to="/about"
                     active-class="nav-active"
              > About Us
              </v-btn>

              <v-menu offset-y open-on-hover>
                   <template v-slot:activator="{ on, attrs }">
                    <v-btn  class="transparent text--white nav-btn"
                            active-class="nav-active"
                            elevation="0"
                            v-bind="attrs" v-on="on"
                       >
                      Electrical
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                  <div>
                    <v-btn  class="transparent text--white nav-btn"
                            active-class="nav-active"
                            elevation="0"
                            to="service-residential"  >
                      Residential
                    </v-btn>
                  </div>
                  <div>
                    <v-btn  class="transparent text--white nav-btn"
                            active-class="nav-active"
                            elevation="0"
                            to="service-commercial"
                    >
                      Commercial
                    </v-btn>
                  </div>
                  <div>
                    <v-btn  class="transparent text--white nav-btn"
                            active-class="nav-active"
                            elevation="0"
                            to="service-industrial"  >
                      Industrial
                    </v-btn>
                  </div>

                </v-list>
              </v-menu>

<!--              <v-btn class="transparent text&#45;&#45;white nav-btn"-->
<!--                     elevation="0"-->
<!--                     to="/freelance-electrician"-->
<!--                     active-class="nav-active"-->
<!--              > Freelance Electrician-->
<!--              </v-btn>-->

              <v-btn class="transparent text--white nav-btn"
                     elevation="0"
                     to="/own-franchise"
                     active-class="nav-active"
              > Own a Franchise
              </v-btn>

              <v-btn class="transparent text--white nav-btn"
                     elevation="0"
                     active-class="nav-active"
                     to="/career"
              > Career
              </v-btn>

              <v-btn class="transparent text--white nav-btn"
                     elevation="0"
                     to="/promotion"
                     active-class="nav-active"
              > Promotion
              </v-btn>

            </v-toolbar-items>

          <div class="phone-btn">
              <p class="pri-color fs-14">24/7 Emergency Service</p>
             <v-card href="tel:529-4433" elevation="0"
              color="transparent"
            >
              Call (206) 529-4433
            </v-card>
          </div>
          <div class="phone-btn-responsive">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn href="tel:529-4433">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >mdi-phone-outgoing
                  </v-icon>
                </v-btn>

              </template>
              <span>24/7 Emergency Service</span>
            </v-tooltip>
          </div><!-- /. phone-btn-responsive -->


          <!-- /. my account -->

          <v-card-actions class="d-md-none d-block justify-end">
            <v-btn
              text
              v-model="drawer"
            >
            </v-btn>
          </v-card-actions>

        </div>

  </v-container>

    </div><!--/. main-header-->
</header>

</template>


<script>

export default {
  name: "Header",
  data() {
    return {
      drawer: null,
    }
  },
};



</script>


<style scoped>
  .main-header{
    position: fixed;
    width: 100%;
    z-index: 9;
  }


  .site-logo{
    max-width: 110px;
  }
  .nav-btn{
     padding:10px 15px!important;
     height: auto!important;
     text-transform: capitalize;
     letter-spacing: 0px;
  }
  .mobile-menu-body{
     /*margin-top: 70px;*/
  }
  .mobile-menu-body{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 65vh!important;
  }


  .mobile-menu.justify-space-between.align-center {

  }
</style>

<style>
  .main-header {
    background: white;
  }
  .main-header .nav-btn.v-btn{
     padding:5px 12px!important;
  }
  .main-header .nav-active.v-btn--active {
    position: relative;
  }
  .main-header .nav-active.v-btn--active:after {
    position: absolute;
    content: '';
    top: 37px;
    left: 14px;
    width: 50%;
    border-bottom: 1px solid #fb675e !important;
  }
  .main-header .theme--light.v-btn--active:hover::before,
  .main-header .theme--light.v-btn--active::before {
    opacity: 0!important;
  }



  .custom-menu-lg{
    display: flex !important;
  }
  @media only screen and (max-width: 1024px) {
    .custom-menu-lg{
      display: none !important;
    }
  }
  .mobile-menu{
    display: flex;
  }


  @media only screen and (min-width: 1025px) {
    .mobile-menu{
      display: none !important;
    }
  }



  .phone-btn-responsive{
    display: none;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1263px) {
    .main-header .nav-btn.v-btn{
      padding:5px 5px!important;
    }
    .phone-btn-responsive{
      display: block;
    }
    .phone-btn{
      display: none;
    }
  }


</style>
