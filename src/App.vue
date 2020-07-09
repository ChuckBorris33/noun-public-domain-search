<template>
  <v-app id="app">
    <v-content>
      <NounIconSearch />
    </v-content>
  </v-app>
</template>

<script>
import NounIconSearch from "./components/NounIconSearch";

export default {
  name: "app",
  components: {
    NounIconSearch,
  },
};
</script>
