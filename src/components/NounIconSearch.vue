<template>
  <v-container class="noun-search">
    <v-layout row wrap>
      <v-flex xs12 text-xs-center my-3>
        <h1>Noun Public Domain Icon Search</h1>
      </v-flex>
      <SearchInput v-model="searchString" :loading="loading" />
      <v-container fluid grid-list-xl>
        <v-layout row wrap>
          <v-flex v-for="i in 6" :key="i" xs4>
            <img
              src="https://bit.ly/2GCP5tO"
              class="image"
              alt="lorem"
              width="100%"
              height="100%"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import debounce from "debounce";

import SearchInput from "./SearchInput";

export default {
  name: "NounIconSearch",
  components: {
    SearchInput
  },
  data() {
    return {
      searchString: "Beer",
      loading: true,
      iconList: []
    };
  },
  watch: {
    searchString: {
      immediate: true,
      handler(value) {
        if (value.length > 2) {
          this.getIconList();
        }
      }
    }
  },
  methods: {
    getIconList() {
      this.loading = true;
      debounce(
        this.axios
          .get(`/api/search_icons/${this.searchString}`)
          .then(response => {
            this.iconList = response.data.icons;
            this.loading = false;
          }),
        500
      );
    }
  }
};
</script>
