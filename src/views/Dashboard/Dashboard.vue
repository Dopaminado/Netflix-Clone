<template>
  <v-row class="background-dark" style="height: 100%">
    <v-col cols="12" style="position: fixed; z-index: 100">
      <v-row
        :class="{
          'change-color': scrollPosition > 20,
          'default-color': scrollPosition < 1,
          'pl-7': !$vuetify.breakpoint.mobile,
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
                <v-list color="transparent" style="height: 300px" class="mt-5">
                  <v-list-item
                    class="background-dark-opacity"
                    v-for="item in itemIconBell"
                    :key="item"
                    link
                  >
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
                    <v-list style="height: 300px" class="transparent">
                      <v-list-item
                        class="background-dark-opacity"
                        v-for="item in itemUsers"
                        :key="item"
                        link
                      >
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
                      <v-list-item
                        link
                        class="subtitle-2 white--text background-dark-opacity"
                      >
                        Gerenciar perfis
                      </v-list-item>
                      <v-divider color="grey"></v-divider>
                      <v-list-item
                        v-for="item in lastItemUsers"
                        :key="item"
                        link
                        class="white--text background-dark-opacity"
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
    <v-col
      cols="12"
      class="background-attr pt-0"
      style="background-size: 100% 100%"
    >
      <v-row
        :class="{
          'mt-10 pa-10': !$vuetify.breakpoint.mobile,
          'mt-15': $vuetify.breakpoint.mobile,
        }"
      >
        <v-col cols="12" :class="{ 'pb-2': $vuetify.breakpoint.mobile }">
          <v-img
            :src="require('../../assets/title-background.png')"
            :lazy-syc="require('../../assets/title-background.png')"
            max-width="40%"
          ></v-img>
        </v-col>
        <v-col cols="12" :class="{ 'pt-0': $vuetify.breakpoint.mobile }">
          <v-card
            class="elevation-0 transparent synopsis white--text"
            max-width="44%"
          >
            Toda princesa tem seus deveres, mas ela quer mesmo é encher a cara.
            E com um elfo e um demônio como parceiros, levar o rei à loucura
            será uma tarefa fácil.
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="6" sm="4">
              <v-row>
                <v-col
                  :class="{ 'mr-5': $vuetify.breakpoint.mobile }"
                  cols="6"
                  sm="5"
                  md="4"
                  lg="5"
                >
                  <v-btn
                    class="font-weight-bold"
                    :style="
                      $vuetify.breakpoint.mobile
                        ? 'font-size: 0.5rem; height: 25px;'
                        : ''
                    "
                  >
                    <v-icon :class="{ 'text-h4': !$vuetify.breakpoint.mobile }"
                      >mdi-play</v-icon
                    >
                    Assistir
                  </v-btn>
                </v-col>
                <v-col cols="4" sm="5" md="4" lg="5">
                  <v-btn
                    color="rgba(0, 0, 0, 0.4)"
                    class="font-weight-medium white--text"
                    :style="
                      $vuetify.breakpoint.mobile
                        ? 'font-size: 0.5rem; height: 25px;'
                        : ''
                    "
                  >
                    <v-icon
                      :class="{ 'text-h4': !$vuetify.breakpoint.mobile }"
                      class="mr-2"
                      >mdi-information-outline</v-icon
                    >
                    Mais informações
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col v-if="!$vuetify.breakpoint.mobile" cols="8" class="mt-4">
              <v-row class="align-center justify-end">
                <v-col cols="1" class="pr-0 mr-2">
                  <v-icon small color="white" class="pointer iconAudio pa-2">
                    mdi-volume-off
                  </v-icon>
                </v-col>
                <v-col cols="1" class="ageRecommended pt-0 pb-0">
                  <div class="rounded black white--text font-weight-bold pa-2">
                    18
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      class="background-dark"
      :class="{ 'pl-0': !$vuetify.breakpoint.mobile }"
    >
      <v-row>
        <v-col
          v-for="(item, key) in items"
          :key="key"
          cols="12"
          class="pt-0 pb-0 background-dark"
        >
          <div
            :class="{
              'ml-14': !$vuetify.breakpoint.mobile,
              'pl-1': $vuetify.breakpoint.mobile,
            }"
            class="title subtitle-1 font-weight-black"
          >
            {{ item.title }}
          </div>
          <v-sheet
            style="margin-top: -5px"
            class="mx-auto background-dark"
            max-width="100%"
          >
            <v-slide-group
              active-class="success"
              class="pl-0 pa-4 selected background-dark"
            >
              <v-slide-item v-for="(data, i) in item.data" :key="i">
                <v-card
                  link
                  height="100%"
                  max-width="228px"
                  class="elevation-0 ml-1 mr-1 card-container"
                >
                  <v-img
                    width="228"
                    :src="data.imageUrl"
                    :lazy-src="data.imageUrl"
                  ></v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      sm="10"
      class=" mt-15 pt-10 ml-2"
      :class="{ 'pl-15': !$vuetify.breakpoint.mobile }"
    >
      <v-row>
        <v-col cols="12" class="">
          <v-row :class="{'pl-3': $vuetify.breakpoint.mobile}">
            <div class="mr-5">
              <v-icon color="white pointer">mdi-facebook</v-icon>
            </div>
            <div class="mr-5">
              <v-icon color="white pointer">mdi-instagram</v-icon>
            </div>
            <div class="mr-5">
              <v-icon color="white pointer">mdi-twitter</v-icon>
            </div>
            <div class="mr-5">
              <v-icon color="white pointer">mdi-youtube</v-icon>
            </div>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row :class="{'pl-3': $vuetify.breakpoint.mobile}">
            <v-col cols="6" sm="3" class="pl-0">
              <v-row class="grey--text caption">
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Idioma e legendas</v-col
                >
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Imprensa</v-col
                >
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Privacidade</v-col
                >
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Entre em contato</v-col
                >
              </v-row>
            </v-col>
            <v-col cols="6" sm="3" class="pl-0">
              <v-row class="grey--text caption">
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Audiodescrição</v-col
                >
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Relação com investidores</v-col
                >
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Avisos legais</v-col
                >
              </v-row>
            </v-col>
            <v-col cols="6" sm="3" class="pl-0">
              <v-row class="grey--text caption">
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Centro de ajuda</v-col
                >
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Carreiras</v-col
                >
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Preferências de cookies</v-col
                >
              </v-row>
            </v-col>
            <v-col cols="6" sm="3" class="pl-0">
              <v-row class="grey--text caption">
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Cartão pré-pago</v-col
                >
                <v-col cols="12" class="pb-0 pointer footerText"
                  >Termos de uso</v-col
                >
                <v-col cols="12" class="pb-0 pointer footerText"
                  >informações corporativas</v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col :class="{'pl-3': $vuetify.breakpoint.mobile}" class="pl-0" cols="12">
          <v-btn outlined class="grey--text caption rounded-0 pa-2"
            >Código de serviço</v-btn
          >
        </v-col>
        <v-col :class="{'pl-3': $vuetify.breakpoint.mobile}" cols="12" class="pl-0 grey--text caption">
          © 1997-2022 Netflix, Inc.
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
    items: [
      {
        title: "Em alta",
        data: [
          {
            imageUrl: require("../../assets/container/seeTop.jpg"),
          },
          {
            imageUrl: require("../../assets/container/2.jpg"),
          },
          {
            imageUrl: require("../../assets/container/3.jpg"),
          },
          {
            imageUrl: require("../../assets/container/4.jpg"),
          },
          {
            imageUrl: require("../../assets/container/5.jpg"),
          },
          {
            imageUrl: require("../../assets/container/6.jpg"),
          },
          {
            imageUrl: require("../../assets/container/7.jpg"),
          },
          {
            imageUrl: require("../../assets/container/8.jpg"),
          },
        ],
      },
      {
        title: "Comédia",
        data: [
          {
            imageUrl: require("../../assets/container/c1.jpg"),
          },
          {
            imageUrl: require("../../assets/container/c2.jpg"),
          },
          {
            imageUrl: require("../../assets/container/c3.jpg"),
          },
          {
            imageUrl: require("../../assets/container/c4.jpg"),
          },
          {
            imageUrl: require("../../assets/container/c5.jpg"),
          },
          {
            imageUrl: require("../../assets/container/c6.jpg"),
          },
          {
            imageUrl: require("../../assets/container/c7.jpg"),
          },
          {
            imageUrl: require("../../assets/container/c8.jpg"),
          },
        ],
      },
      {
        title: "Filmes de terror",
        data: [
          {
            imageUrl: require("../../assets/container/t1.jpg"),
          },
          {
            imageUrl: require("../../assets/container/t2.jpg"),
          },
          {
            imageUrl: require("../../assets/container/t3.jpg"),
          },
          {
            imageUrl: require("../../assets/container/t4.jpg"),
          },
          {
            imageUrl: require("../../assets/container/t5.jpg"),
          },
          {
            imageUrl: require("../../assets/container/t6.jpg"),
          },
          {
            imageUrl: require("../../assets/container/t7.jpg"),
          },
          {
            imageUrl: require("../../assets/container/t8.jpg"),
          },
        ],
      },
      {
        title: "Só na Netflix",
        data: [
          {
            imageUrl: require("../../assets/container/n1.jpg"),
          },
          {
            imageUrl: require("../../assets/container/n2.jpg"),
          },
          {
            imageUrl: require("../../assets/container/n3.jpg"),
          },
          {
            imageUrl: require("../../assets/container/n4.jpg"),
          },
          {
            imageUrl: require("../../assets/container/n5.jpg"),
          },
          {
            imageUrl: require("../../assets/container/n6.jpg"),
          },
          {
            imageUrl: require("../../assets/container/n7.jpg"),
          },
          {
            imageUrl: require("../../assets/container/n8.jpg"),
          },
        ],
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
.background-attr {
  background-image: url("../../assets/background.jpg");
  background-repeat: no-repeat;
  background-color: rgb(20, 20, 20);
  transition-timing-function: ease;
  transition-delay: 0s;

  line-height: 11.4833px;
  transition-property: opacity;
  transition-duration: 0.5s;
  width: 100%;
}
.synopsis {
  font-weight: 400;
  line-height: normal;
  width: 100%;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
}
.iconAudio {
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
}
.ageRecommended {
  background: rgba(0, 0, 0, 0.2);
  border-left: 3px solid white;
  padding-left: 10px;
}
.background-list-item {
  background: rgba(255, 255, 255, 0.1);
}
.list-item:hover {
  background: rgba(0, 0, 0, 0.1);
}
.default-color {
  transition: 0.3s;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.1), black);
}
.change-color {
  transition: 2s;
  background: black;
}
.pointer {
  transition: 0.3s;
  cursor: pointer;
}

.card-container {
  transition: transform 500ms;
}

.card-container:focus,
.card-container:hover {
  transform: scale(1.15);
  filter: brightness(65%);
  transform: translateX(15%);
  transform: translateY(10%);
}

.background-dark {
  background: rgb(20, 20, 20);
}

.background-dark-opacity {
  background: rgba(20, 13, 13, 0.3);
}

.title {
  color: rgb(229, 229, 229);
}

.footerText:hover {
  text-decoration: underline;
}
</style>
