<template>
  <div id="app">
    <NounIconSearch/>>
  </div>
</template>

<script>
import NounIconSearch from "./components/NounIconSearch";

export default {
  name: "app",
  components: {
    NounIconSearch
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
