<template>
  <v-hover v-slot="{ hover }">
    <v-card
      link
      :max-width="!$vuetify.breakpoint.mobile ? 135 : 95"
      :max-height="!$vuetify.breakpoint.mobile ? '100%' : '85%'"
      class="transparent"
      :to="{ path: '/dashboard', query: { profile_icon: imageUrl } }"
    >
      <v-row class="">
        <v-col cols="12">
          <v-img
            contain
            class="rounded-lg"
            max-width="100%"
            max-height="100%"
            :src="imageUrl"
            :lazy-src="imageUrl"
            :class="hover ? 'border-style' : 'border-none'"
          >
          </v-img>
        </v-col>
        <v-col
          cols="12"
          class="text-center"
          :class="hover ? 'white--text' : 'grey--text'"
        >
          {{ name }}
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["imageUrl", "name"],
};
</script>

<style>
.border-style {
  border: 2.5px solid white;
}
.border-none {
  border: none;
}
</style>
