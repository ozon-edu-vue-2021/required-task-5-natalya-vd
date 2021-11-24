<template>
  <button
    class="button"
    type="button"
    v-on="$listeners"
  >
    {{ propsTitle }}
  </button>
</template>

<script>
export default {
  props: {
    propsTitle: {
      type: String,
      default: "Купить",
    },
  },
};
</script>

<style scoped>
.button {
  padding: 10px 32px;
  background: #46a358;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  border: 0;
  outline: 0;
  cursor: pointer;
}

.button:focus,
.button:hover {
  opacity: 0.85;
}

.button:active {
  transform: scale(0.85);
}
</style>