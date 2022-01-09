<template>
  <v-row class="">
    <v-col cols="12" style="position: fixed">
      <v-row
        :class="{
          'change-color': scrollPosition > 20,
          'default-color': scrollPosition < 1,
        }"
      >
        <v-col cols="6" sm="6">
          <v-row class="align-center pt-5" v-if="!$vuetify.breakpoint.mobile">
            <div class="text-h4 ml-5 red--text font-weight-bold pointer">
              NETFLIX
            </div>
            <div link class="ml-10 body-2 font-weight-bold pointer white--text">
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
              cols="7"
              sm="3"
              class="text-h6 red--text font-weight-bold pointer"
            >
              NETFLIX
            </v-col>
            <v-col cols="5" class="text-center">
              <v-menu offset-y class="red">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title
                    v-bind="attrs"
                    v-on="on"
                    class="white--text caption"
                    >Navegar
                    <v-icon color="white">mdi-chevron-down</v-icon>
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
        <v-col cols="6" sm="6">
          <v-row class="align-center justify-end pt-2">
            <v-col
              v-if="!$vuetify.breakpoint.mobile"
              @click="search = true"
              @blur="search = false"
              :cols="search ? 5 : 1"
            >
              <v-icon
                v-if="!search"
                style="font-size: 1.7rem"
                color="white"
                class="pointer"
                >mdi-magnify</v-icon
              >
              <v-text-field
                v-else
                @blur="search = false"
                placeholder="Títulos, gente e gêneros"
                background-color="white"
                style="height: 35px"
                color="black"
                class="rounded pa-0"
                prepend-inner-icon="mdi-map-marker"
              ></v-text-field>
            </v-col>
            <v-col cols="4" sm="2" md="1">
              <v-menu offset-y>
                <template v-slot:activator="{ attrs, on }">
                  <v-icon
                    style="font-size: 1.7rem"
                    color="white"
                    class="pointer"
                    v-bind="attrs"
                    v-on="on"
                    >mdi-bell</v-icon
                  >
                </template>
                <v-list
                  color="rgba(255, 255, 255, 0.1)"
                  style="height: 300px"
                  class="mt-5"
                >
                  <v-list-item v-for="item in itemIconBell" :key="item" link>
                    <v-card
                      color="transparent"
                      class="elevation-0"
                      max-width="360"
                      max-height="120"
                    >
                      <v-card-text>
                        <v-row>
                          <v-col cols="6" sm="6">
                            <v-img
                              :src="item.imageUrl"
                              :lazy-src="item.imageUrl"
                              contain
                            ></v-img>
                          </v-col>
                          <v-col cols="6" sm="6">
                            <v-row>
                              <v-col cols="12" class="white--text subtitle-2">
                                {{ item.description }}
                              </v-col>
                              <v-col cols="12" class="body-2 grey--text pt-0">
                                {{ item.date }}
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col cols="6" sm="4" md="2">
              <v-row class="align-center">
                <v-col cols="6" sm="4">
                  <v-avatar size="35" class="rounded" tile color="blue">
                    <v-img
                      :src="this.$route.query.profile_icon"
                      :lazy-src="this.$route.query.profile_icon"
                      contain
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="5" sm="4">
                  <v-menu offset-y>
                    <template v-slot:activator="{ attrs, on }">
                      <v-icon
                        v-bind="attrs"
                        v-on="on"
                        style="font-size: 1.3rem"
                        color="white"
                        class="pointer ml-1"
                        >mdi-chevron-down</v-icon
                      >
                    </template>
                    <v-list
                      color="rgba(255, 255, 255, 0.1)"
                      style="height: 300px"
                      class="mt-5 mr-5"
                    >
                      <v-list-item v-for="item in itemUsers" :key="item" link>
                        <v-card
                          color="transparent"
                          class="elevation-0"
                          max-width="400"
                          max-height="120"
                        >
                          <v-row>
                            <v-col cols="4" sm="4">
                              <v-img
                                :src="item.imageUrl"
                                :lazy-src="item.imageUrl"
                                contain
                                class="rounded"
                              ></v-img>
                            </v-col>
                            <v-col
                              class="white--text subtitle-1"
                              cols="8"
                              sm="8"
                            >
                              {{ item.name }}
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-list-item>
                      <v-list-item link class="subtitle-2 white--text">
                        Gerenciar perfis
                      </v-list-item>
                      <v-divider color="grey"></v-divider>
                      <v-list-item
                        v-for="item in lastItemUsers"
                        :key="item"
                        link
                        class="white--text"
                      >
                        {{ item.text }}
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data: () => ({
    search: false,
    scrollPosition: null,
    itemNavigationMobile: [
      { title: "Início" },
      { title: "Séries" },
      { title: "Filmes" },
      { title: "Bombando" },
      { title: "Minha lista" },
    ],
    users: {
      one: require("../../assets/user1.png"),
      two: require("../../assets/user2.png"),
      three: require("../../assets/user3.png"),
      four: require("../../assets/user4.png"),
      five: require("../../assets/user5.png"),
    },
    itemUsers: [],
    lastItemUsers: [
      {
        text: "Conta",
      },
      {
        text: "Centro de ajuda",
      },
      {
        text: "Sair da Netflix",
      },
    ],
    itemIconBell: [
      {
        imageUrl: require("../../assets/notifications/notification1.jpg"),
        description:
          "Assista novamente aos seus momentos favoritos. Confira o que você assistiu",
        date: "há 1 mês",
      },
      {
        imageUrl: require("../../assets/notifications/notification2.jpg"),
        description: "Novidade. Profecia do inferno",
        date: "há 1 mês",
      },
      {
        imageUrl: require("../../assets/notifications/notification3.jpg"),
        description: "Novidade. A mais pura verdade",
        date: "há 1 mês",
      },
      {
        imageUrl: require("../../assets/notifications/notification4.png"),
        description:
          "Netflix - O que vai rolar. Veja o que está chegando em breve",
        date: "há 4 semanas",
      },
      {
        imageUrl: require("../../assets/notifications/notification5.jpg"),
        description: "Você gostou de Suits? Conte para gente",
        date: "há 1 mês",
      },
      {
        imageUrl: require("../../assets/notifications/notification6.jpg"),
        description: "Novidade. Um lugar silencioso",
        date: "há 1 mês",
      },
    ],
  }),
  mounted() {
    this.checkUsers();
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    checkUsers() {
      for (let image in this.users) {
        if (this.users[image] == this.$route.query.profile_icon) {
          delete this.users[image];
          console.log(Object.values(this.users));
          this.itemUsers = [
            {
              name: this.changeUsername(
                Number(Object.values(this.users)[0].split("/")[2].slice(4, 5))
              ),
              imageUrl: Object.values(this.users)[0],
            },
            {
              name: this.changeUsername(
                Number(Object.values(this.users)[1].split("/")[2].slice(4, 5))
              ),
              imageUrl: Object.values(this.users)[1],
            },
            {
              name: this.changeUsername(
                Number(Object.values(this.users)[2].split("/")[2].slice(4, 5))
              ),
              imageUrl: Object.values(this.users)[2],
            },
            {
              name: this.changeUsername(
                Number(Object.values(this.users)[3].split("/")[2].slice(4, 5))
              ),
              imageUrl: Object.values(this.users)[3],
            },
          ];
        }
      }
    },
    changeUsername(user) {
      console.log(user);
      switch (user) {
        case 1:
          return "Usuário 1";
        case 2:
          return "Usuário 2";
        case 3:
          return "Usuário 3";
        case 4:
          return "Usuário 4";
        case 5:
          return "Usuário 5";
        default:
          return;
      }
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
