<template>
  <div class="catalog container">
    <ul
      class="catalog__list"
      v-if="productsList.length"
    >
      <card-catalog
        v-for="item in productsList"
        :key="item.id"
        :propsProductCatalog="item"
      />
    </ul>
    <div v-else-if="checkoutStatus === 'PENDING'">
      <h2>
        Загрузка...
      </h2>
    </div>
    <div
      class="catalog__empty"
      v-else
    >
      Упс! Товары не загружены
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardCatalog from "./cards/CardCatalog.vue";

export default {
  name: "Catalog",

  components: {
    CardCatalog,
  },

  computed: {
    ...mapState("product", ["productsList"]),
    ...mapState("product", ["checkoutStatus"]),
  },
};
</script>

<style scoped>
.catalog__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.catalog__empty {
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