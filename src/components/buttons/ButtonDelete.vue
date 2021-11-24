<template>
  <button
    class="button-delete"
    type="button"
    v-on="$listeners"
  >
    <icon-delete />
  </button>
</template>

<script>
import IconDelete from "../Icons/IconDelete.vue";

export default {
  name: "ButtonDelete",

  components: {
    IconDelete,
  },
};
</script>

<style scoped>
.button-delete {
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}
</style>