<template>
  <v-flex xs12 md8 offset-md2>
    <v-text-field
      v-model="searchString"
      prepend-inner-icon="search"
      placeholder="Enter search term"
      outline
      single-line
      hide-details
    >
      <v-progress-circular
        v-show="loading"
        slot="append"
        indeterminate
        size="24"
        class="primary--text"
      />
    </v-text-field>
  </v-flex>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    searchString: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
