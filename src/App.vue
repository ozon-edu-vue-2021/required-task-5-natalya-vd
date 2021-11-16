<template>
  <div id="app">
    <Header />
    <router-view />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },

  created() {
    this.$Progress.start();
    this.$store.dispatch("product/getProductCatalog");
    this.$Progress.finish();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 24px;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 1260px;
  margin: 0 auto 0;
}
</style>
