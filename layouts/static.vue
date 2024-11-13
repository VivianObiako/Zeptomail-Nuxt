<template>
  <v-app>
    <div v-show="loading" class="preloader">
      <v-sheet
        class="pa-3 d-flex align-center justify-center"
        style="height: 100vh"
      >
        <v-progress-circular
          :size="100"

          color="primary"
          indeterminate

        ></v-progress-circular>

      </v-sheet>
    </div>
    <div v-show="!loading">

      <Header class="header"  @toggleMenu="ToggleMenu"/>
      <mobile-menu  ref="mobileMenu"/>
      <v-main class="main">
        <nuxt/>
      </v-main>
      <Footer></Footer>
      <div class="social-section g-grid">
        <v-btn href="https://www.facebook.com/JacobElectricGroup" target="_blank" class="d-block fb" plain><v-icon>mdi-facebook</v-icon></v-btn>
        <v-btn href="https://www.instagram.com/jacobelectricgroup/" target="_blank" class="d-block instagram" plain><v-icon>mdi-instagram</v-icon></v-btn>
        <v-btn href="https://twitter.com/jacob_electric"  target="_blank" class="d-block google" plain><v-icon>mdi-twitter</v-icon></v-btn>
        <v-btn href="https://www.linkedin.com/company/74597250/admin/"  target="_blank" class="d-block linkedin" plain><v-icon>mdi-linkedin</v-icon></v-btn>
      </div>
      <!-- Messenger Chat plugin Code -->
      <div id="fb-root"></div>
      <!-- Your Chat plugin code -->
      <div id="fb-customer-chat" class="fb-customerchat">
      </div>
      <div v-html="script"></div>
    </div>
  </v-app>
</template>

<script>
import MobileMenu from "~/components/MobileMenu";
import Header from "~/components/Header";
import Footer from "~/components/Footer";


export default {
  name: 'static',
  components: {
    MobileMenu,
    Header,
    Footer,
  },
  data: () => ({
    loading: true,
    script: "<script>\n" +
      "    setTimeout( () => {\n" +
      "        var chatbox = document.getElementById('fb-customer-chat');\n" +
      "    chatbox.setAttribute(\"page_id\", \"101533315124994\");\n" +
      "    chatbox.setAttribute(\"attribution\", \"biz_inbox\");\n" +
      "    window.fbAsyncInit = function() {\n" +
      "        FB.init({\n" +
      "            xfbml            : true,\n" +
      "            version          : 'v11.0'\n" +
      "        });\n" +
      "    };\n" +
      "    (function(d, s, id) {\n" +
      "        var js, fjs = d.getElementsByTagName(s)[0];\n" +
      "        if (d.getElementById(id)) return;\n" +
      "        js = d.createElement(s); js.id = id;\n" +
      "        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';\n" +
      "        fjs.parentNode.insertBefore(js, fjs);\n" +
      "    }(document, 'script', 'facebook-jssdk'));\n" +
      "    }, 3000)\n" +
      "    \n" +
      "<\/script>",
    prevHeight: 0,
    alert: true,
  }),
  computed: {
    mainPageLoader(){
      this.$store.state.mainPageLoader;
    }
  },
  methods: {
    ToggleMenu() {
      this.$refs.mobileMenu.ToggleMenu();
      this.mobileMenu = !this.mobileMenu;
    }
  },
  beforeCreate() {
    this.$axios.$get('https://api.jacobelectricgroup.com/api/v1/app/country/codes').then(res => {
      console.log(res.data.current_country.code)
      this.$store.commit('SetmainPageLoader', false);
      if(res.data.current_country.code === "GB"){

        this.$router.replace('/uk')
      } else if(res.data.current_country.code === "NG"){
        this.$router.replace('/ng')
      }else{
        this.loading = false
      }

    }).catch(err => {
      this.loading = false
    })
  }
}


</script>

<style lang="scss">
.header{
  margin-bottom: 71px;;
  background: linear-gradient( 122.63deg , rgba(201, 255, 252, 0.63) 5.45%, #d8f3f9 94.29%);
}

.social-section{
  margin-left: -20px;
  top: 55%;
  background-color: #7f828b;
  position: fixed;
  z-index: 999;
  border-radius: 15px;
  transition: 0.4s ease;
  &:hover{
    margin-left: 0px;
  }
  a{
    padding-top: 5px!important;
  }
  .fb{
    background-color: #4867aa;
    color: white;
  }
  .google{
    background-color: #de453d;
    color: white;
  }
  .pinterest{
    background-color: #e11a21;
    color: white;
  }
  .linkedin{
    background-color: #0077b5;
    color: white;
  }
}
@media only screen and (max-width: 767px) {
  .social-section{
    display: none;
  }
}
</style>

