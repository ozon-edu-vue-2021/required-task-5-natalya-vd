<template>
  <button
    class="button-counter"
    type="button"
    v-on="$listeners"
  >
    {{ propsCounter }}
  </button>
</template>

<script>
export default {
  name: "ButtonCounter",

  props: {
    propsCounter: {
      type: String,
      default: "+",
    },
  },
};
</script>

<style scoped>
.button-counter {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #46a358;
  color: #ffffff;
  border: 0;
  outline: 0;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  cursor: pointer;
}
</style>