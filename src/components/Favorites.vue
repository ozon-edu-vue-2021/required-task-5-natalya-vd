<template>
  <div class="catalog container">
    <ul
      class="favorites__list"
      v-if="getProductsFavorites.length"
    >
      <card-catalog
        v-for="item in getProductsFavorites"
        :key="item.id"
        :propsProductCatalog="item"
      />
    </ul>
    <div
      class="favorites__empty"
      v-else
    >
      Вы пока ничего не добавили в избранное
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardCatalog from "./cards/CardCatalog.vue";

export default {
  name: "Favorites",

  components: {
    CardCatalog,
  },

  computed: {
    ...mapGetters("product", ["getProductsFavorites"]),
  },
};
</script>

<style scoped>
.favorites__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.favorites__empty {
  margin: 0 auto 60px;
  padding: 40px 0;
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  background-color: rgba(70, 163, 88, 0.1);
  border-radius: 10px;
}
</style>