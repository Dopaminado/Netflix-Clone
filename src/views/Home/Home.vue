<template>
  <v-row class="black mx-auto background-formatted justify-center align-center">
    <v-col
      cols="12"
      :class="!$vuetify.breakpoint.mobile ? 'text-h4' : 'text-h5 ml-15 pl-8'"
      class="red--text font-weight-bold ml-12"
      >NETFLIX</v-col
    >
    <v-col cols="12" class="mb-0 pb-0">
      <v-row class="align-center justify-center">
        <v-col
          cols="12"
          class="white--text text-center font-weight-medium"
          :class="!$vuetify.breakpoint.mobile ? 'text-h3' : 'text-h5'"
          >Quem está assistindo?
        </v-col>
        <v-col cols="9">
          <v-row class="align-center justify-center">
            <v-col
              v-for="item in users"
              :key="item.id"
              cols="5"
              :sm="3"
              md="2"
              class=""
            >
              <CardHome
                :key="item.id"
                :name="item.name"
                :imageUrl="item.imageUrl"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="2" class="justify-center d-flex">
      <v-btn outlined class="white--text"> Gerenciar perfis </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import CardHome from "../../components/Card/CardHome.vue";
export default {
  components: {
    CardHome,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Usuário 1",
          imageUrl: require("../../assets/user5.png"),
        },
        {
          id: 2,
          name: "Usuário 2",
          imageUrl: require("../../assets/user4.png"),
        },
        {
          id: 3,
          name: "Usuário 3",
          imageUrl: require("../../assets/user3.png"),
        },
        {
          id: 4,
          name: "Usuário 4",
          imageUrl: require("../../assets/user2.png"),
        },
        {
          id: 5,
          name: "Usuário 5",
          imageUrl: require("../../assets/user1.png"),
        },
      ],
    };
  },
};
</script>

<style>
.background-formatted {
  height: 100vh;
  max-height: 100vh;
  width: 100%;
}
</style>
