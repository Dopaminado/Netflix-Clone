<template>
  <v-app class="background-formatted ">
    <!-- Add MenuBar -->
    <!-- <Menu v-if="!hideMenu" /> -->

    <!-- Add TopAppBar -->
    <!-- <AppBar v-if="!hideMenu" /> -->
    <v-main class="">
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="black background-formatted">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import Menu from "./components/Menu/Menu.vue";
// import AppBar from "./components/AppBar/AppBar.vue";

export default {
  name: "Netflix",

  components: {
    // Menu,
    // AppBar,
  },

  data: () => ({
  }),
  computed: {
    hideMenu() {
      return this.$route.meta.hideMenu || false
    },
  }
};
</script>

<style>
.background-formatted {
  height: 100vh;
  max-height: 100vh;
  width: 100%;
}
</style>