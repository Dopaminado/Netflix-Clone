<template>
  <v-row class="">
    <v-col cols="12" style="position: fixed">
      <v-row
        :class="{
          'change-color': scrollPosition > 20,
          'default-color': scrollPosition < 1,
        }"
      >
        <v-col cols="12" sm="6">
          <v-row class="align-center pt-5" v-if="!$vuetify.breakpoint.mobile">
            <div
              class="text-h4 ml-5 red--text font-weight-bold pointer"
            >
              NETFLIX
            </div>
              <div
                link
                class="ml-10 body-2 font-weight-bold pointer white--text"
              >
                Início
              </div>
            <v-hover v-slot="{ hover }">
              <div
                class="ml-4 body-2 pointer"
                :class="hover ? 'grey--text' : 'white--text'"
              >
                Séries
              </div>
            </v-hover>
            <v-hover v-slot="{ hover }">
              <div
                class="ml-4 body-2 pointer"
                :class="hover ? 'grey--text' : 'white--text'"
              >
                Filmes
              </div>
            </v-hover>
            <v-hover v-slot="{ hover }">
              <div
                class="ml-4 body-2 pointer"
                :class="hover ? 'grey--text' : 'white--text'"
              >
                Bombando
              </div>
            </v-hover>
            <v-hover v-slot="{ hover }">
              <div
                class="ml-4 body-2 pointer"
                :class="hover ? 'grey--text' : 'white--text'"
              >
                Minha Lista
              </div>
            </v-hover>
          </v-row>
          <v-row class="align-end" v-if="$vuetify.breakpoint.mobile">
            <v-col
              cols="3"
              class="text-h5 subtitle-1 red--text font-weight-bold pointer"
            >
              NETFLIX
            </v-col>
            <v-col cols="3" class="text-center">
              <v-menu offset-y class="red">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title
                    v-bind="attrs"
                    v-on="on"
                    class="white--text"
                    >Navegar
                    <v-icon color="white" large>mdi-plus</v-icon>
                  </v-list-item-title>
                </template>
                <v-list class="background-list-item">
                  <v-list-item
                    class="background-list-item list-item"
                    v-for="(item, index) in itemNavigationMobile"
                    :key="index"
                    link
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data: () => ({
    scrollPosition: null,
    itemNavigationMobile: [
      { title: "Início" },
      { title: "Séries" },
      { title: "Filmes" },
      { title: "Bombando" },
      { title: "Minha lista" },
    ],
  }),
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
.background-list-item {
  background: rgba(255, 255, 255, 0.1);
}
.list-item:hover {
  background: rgba(0, 0, 0, 0.1);
}
.default-color {
  transition: 0.3s;
  background: linear-gradient(to top, black, rgba(255, 255, 255, 0.1));
}
.change-color {
  transition: 2s;
  background: black;
}
.pointer {
  transition: 0.3s;
  cursor: pointer;
}
</style>
