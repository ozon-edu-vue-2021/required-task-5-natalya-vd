<template>
  <li class="card-product">
    <div class="card-product__title-wrapper">
      <img
        class="card-product__img"
        :src="getUrlImage(propsProduct.image)"
        :alt="propsProduct.dish"
        width="70"
        height="70"
      >
      <h3 class="card-product__heading">
        {{ propsProduct.dish }}
      </h3>
    </div>
    <p>
      {{ propsProduct.price.toFixed(2) }}
    </p>
    <div class="card-product__btn-group">
      <button-counter
        propsCounter="-"
        @click="decrementProduct"
      />
      <div>{{ propsProduct.quantity }}</div>
      <button-counter
        propsCounter="+"
        @click="incrementProduct"
      />
    </div>
    <p>
      {{ getTotalPriceProduct(propsProduct.id).toFixed(2) }}
    </p>
    <button-delete
      propsTitle="Удалить"
      @click="removeProductFromCart"
    />
  </li>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonDelete from "../buttons/ButtonDelete.vue";
import ButtonCounter from "../buttons/ButtonCounter.vue";

export default {
  name: "CardProduct",

  components: {
    ButtonDelete,
    ButtonCounter,
  },

  props: {
    propsProduct: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    ...mapGetters("cart", ["getTotalPriceProduct"]),
  },

  methods: {
    getUrlImage(src) {
      return require(`../../assets/images/${src}`);
    },

    removeProductFromCart() {
      this.$store.commit("cart/removeProductFromCart", this.propsProduct.id);
    },

    incrementProduct() {
      this.$store.commit("cart/incrementQuantity", this.propsProduct.id);
    },

    decrementProduct() {
      this.$store.dispatch(
        "cart/decrementQuantityToProduct",
        this.propsProduct.id
      );
    },
  },
};
</script>

<style scoped>
.card-product {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 2fr 1fr;
  gap: 30px;
  justify-items: center;
  align-items: center;
  border-radius: 6px;
  background-color: #fbfbfb;
}

.card-product__title-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.card-product__heading {
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
}

.card-product__btn-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>