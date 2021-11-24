<template>
  <button
    class="button"
    type="button"
    v-on="$listeners"
  >
    <icon-heart :propsFavorites="propsFavorites" />
  </button>
</template>

<script>
import IconHeart from "../Icons/IconHeart.vue";

export default {
  name: "ButtonFavorites",

  components: {
    IconHeart,
  },

  props: {
    propsFavorites: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.button {
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}
</style>