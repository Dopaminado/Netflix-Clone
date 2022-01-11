<template>
  <v-app class="background-formatted ">
    <!-- Add MenuBar -->
    <!-- <Menu v-if="!hideMenu" /> -->

    <!-- Add TopAppBar -->
    <!-- <AppBar v-if="!hideMenu" /> -->
    <v-main style="background: rgb(20, 20, 20);" class="">
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="background-formatted">
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
  height: 100%;
  width: 100%;
  overflow-x: none;
  background: rgb(20, 20, 20);
}

html::-webkit-scrollbar {
      width: 10px; 
   }

html::-webkit-scrollbar-track {
    background-color: rgb(0, 0, 0);
  }

html::-webkit-scrollbar-thumb {
    background: #666666;
    border-radius: 25px;
  }
</style>