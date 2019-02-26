import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/axios";
import App from "./App.vue";

new Vue({
  render: h => h(App)
}).$mount("#app");
