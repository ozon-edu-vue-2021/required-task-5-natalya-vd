<template>
  <svg
    :class="['icon-heart', {'icon-selected': this.propsFavorites.favorites}]"
    v-on="$listeners"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 206.333 206.333"
    width="40"
    height="40"
    style="enable-background:new 0 0 206.333 206.333"
    xml:space="preserve"
  >
    <path d="M206.333 76.952c0 25.365-13.967 46.069-42.7 63.297-36.253 21.737-54.063 47.905-54.239 48.167a7.5 7.5 0 0 1-12.451.007c-.272-.403-18.283-26.613-54.243-48.174C13.967 123.021 0 102.316 0 76.952c0-30.228 19.701-62.354 56.211-62.354 24.457 0 39.282 10.829 46.956 18.941 7.674-8.113 22.499-18.941 46.956-18.941 36.51-.001 56.21 32.126 56.21 62.354z" />
  </svg>
</template>

<script>
export default {
  name: "IconHeart",

  props: {
    propsFavorites: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.icon-heart {
  fill: #fff;
}

.icon-heart:focus,
.icon-heart:hover {
  fill: #ff7373;
}

.icon-selected {
  fill: #ff0000;
}
</style>