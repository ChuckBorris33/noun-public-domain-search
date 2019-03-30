import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

console.log(process.env);

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000
});

Vue.use(VueAxios, axiosInstance);
