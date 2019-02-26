<template>
  <v-container class="noun-search">
    <v-layout row wrap>
      <v-flex xs12 text-xs-center my-3>
        <h1>Noun Public Domain Icon Search</h1>
      </v-flex>
      <SearchInput v-model="searchString" :loading="loading" />
      <v-container fluid grid-list-xl>
        <v-layout row wrap>
          <IconCard v-for="icon in iconList" :key="icon.id" :iconData="icon" />
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import debounce from "debounce";

import SearchInput from "./SearchInput";
import IconCard from "./IconCard";

export default {
  name: "NounIconSearch",
  components: {
    SearchInput,
    IconCard
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
      this.iconList = [];
      debounce(
        this.axios
          .get(`/api/search_icons/${encodeURIComponent(this.searchString)}`)
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
