<template>
  <v-app>

    <Header class="header" :nav="nav" @toggleMenu="ToggleMenu"/>
    <mobile-menu :nav="nav" ref="mobileMenu"/>
    <v-main class="main">
      <nuxt/>
    </v-main>
    <Footer></Footer>

  </v-app>
</template>
<script>
  import MobileMenu from "~/components/MobileMenu";
  import Header from "~/components/Header";
  import Footer from "~/components/Footer";

  export default {
    name: "default",
    components: {
      MobileMenu,
      Header,
      Footer,
    },
    data: () => ({

      prevHeight: 0,
      alert: true,
    }),
    methods: {

      ToggleMenu() {
        this.$refs.mobileMenu.ToggleMenu();
        this.mobileMenu = !this.mobileMenu;
      }
    },
  }


</script>


