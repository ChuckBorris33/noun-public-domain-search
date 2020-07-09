<template>
  <div>
    <NounKeyInput :error="error" />
    <v-container class="noun-search">
      <v-layout row wrap>
        <v-flex xs12 text-center my-3>
          <h1>Noun Public Domain Icon Search</h1>
        </v-flex>
        <SearchInput v-model="searchString" :loading="loading" />
        <v-flex xs12 md8 offset-md2 mt-2>
          <v-alert v-model="error" color="error" icon="warning" outlined>
            Unable to get list of icons. Review and correct your API keys.
          </v-alert>
          <v-alert
            v-model="noResults"
            color="warning"
            icon="priority_high"
            outlined
          >
            No results for term "{{ searchString }}" were found.
          </v-alert>
        </v-flex>
        <v-container fluid grid-list-xl>
          <v-layout row wrap mt-2>
            <IconCard
              v-for="icon in iconList"
              :key="icon.id"
              :iconData="icon"
            />
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { debounce } from "debounce";

import SearchInput from "./SearchInput";
import IconCard from "./IconCard";
import NounKeyInput from "./NounKeyInput";

export default {
  name: "NounIconSearch",
  components: {
    SearchInput,
    IconCard,
    NounKeyInput,
  },
  data() {
    return {
      error: false,
      noResults: false,
      searchString: "",
      loading: false,
      iconList: [],
      searchQuery: Promise.resolve(),
      debouncedFetchIconList: null,
    };
  },
  watch: {
    searchString: {
      immediate: true,
      handler(value) {
        if (value.length > 2) {
          this.getIconList();
        }
      },
    },
  },
  created() {
    this.debouncedFetchIconList = debounce(this.fetchIconList, 300); // Debounce while typing
  },
  methods: {
    getIconList() {
      this.noResults = false;
      if (!sessionStorage.apiKey || !sessionStorage.secret) {
        this.error = true;
        return;
      }
      this.loading = true;
      this.iconList = [];
      this.searchQuery.finally(this.debouncedFetchIconList); // Avoid fetching new list before last fetch was completed
    },
    fetchIconList() {
      this.searchQuery = this.axios
        .get(`/icons/${encodeURIComponent(this.searchString)}`, {
          params: {
            limit_to_public_domain: 1,
          },
        })
        .then((response) => {
          this.iconList = response.data.icons;
          this.noResults = false;
          this.error = false;
        })
        .catch((error) => {
          if (error.response.status === 404) {
            this.error = false;
            this.noResults = true;
          } else {
            this.error = true;
            this.noResults = false;
          }
          return Promise.reject(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
