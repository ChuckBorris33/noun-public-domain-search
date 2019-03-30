<template>
  <v-toolbar>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex px-2 xs3>
        <v-text-field v-model="key" label="Key" single-line :error="error" />
      </v-flex>
      <v-flex xs3 px-2>
        <v-text-field
          v-model="secret"
          label="Secret"
          single-line
          :error="error"
        />
      </v-flex>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            flat
            icon
            color="grey"
            v-on="on"
            @click="openNounDeveloperSite"
          >
            <v-icon>help</v-icon>
          </v-btn>
        </template>
        <span>You can get keys at https://thenounproject.com/developers/ </span>
      </v-tooltip>
    </v-layout>
  </v-toolbar>
</template>

<script>
import oauth from "../oauth.js";

export default {
  name: "NounIconSearch",
  props: {
    error: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      interceptor: null,
      key: "",
      secret: ""
    };
  },
  mounted() {
    if (sessionStorage.apiKey && sessionStorage.secret) {
      this.key = sessionStorage.apiKey;
      this.secret = sessionStorage.secret;
      this.setAuth();
    }
  },
  watch: {
    key(value) {
      sessionStorage.apiKey = value;
      if (value && this.secret) {
        this.setAuth();
      }
    },
    secret(value) {
      sessionStorage.secret = value;
      if (this.key && value) {
        this.setAuth();
      }
    }
  },
  methods: {
    setAuth() {
      if (this.interceptor != null) {
        this.axios.interceptors.request.eject(this.interceptor);
      }
      this.interceptor = oauth(this.axios, this.key, this.secret);
    },
    openNounDeveloperSite() {
      window.open("https://thenounproject.com/developers/", "_blank");
    }
  }
};
</script>
