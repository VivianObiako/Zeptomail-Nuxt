<template>
  <v-navigation-drawer
      v-model="mobileMenu"
      fixed
      style="z-index: 9999"

  >
    <v-card
        class="mx-auto overflow-hidden"
        height="100%"
        width="344"
    >
    <v-list
        nav
        dense
    >
      <v-list-item-group
          active-class="deep-purple--text text--accent-4"
      >
        <v-list-item  v-for="(item, index) in nav" :key="index" :to="item.to">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MobileMenu",
  props: [ 'nav'],
  data: () => ({
    mobileMenu: false,
  }),

  methods: {
    ToggleMenu(){
      this.mobileMenu = !this.mobileMenu;
    }
  }
}
</script>

<style scoped>

</style>