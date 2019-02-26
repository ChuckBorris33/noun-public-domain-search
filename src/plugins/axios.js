import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 1000
});

Vue.use(VueAxios, axiosInstance);
