<template>
  <li class="card-catalog">
    <img
      class="card-catalog__img"
      :src="getUrlImage(propsProductCatalog.image)"
      :alt="propsProductCatalog.dish"
      width="406"
      height="406"
    >
    <div class="card-catalog__btn-favorites">
      <button-favorites
        @click="addFavorites"
        :propsFavorites="searchProduct(propsProductCatalog.id)"
      />
    </div>
    <div class="card-catalog__inner">
      <h3>
        {{ propsProductCatalog.dish }}
      </h3>
      <p>
        {{ propsProductCatalog.price.toFixed(2) }}
      </p>
      <Button
        v-if="!searchProductCart(propsProductCatalog.id)"
        propsTitle="В корзину"
        @click="addProductToCart"
      />

      <div
        class="card-catalog__btn-group"
        v-else
      >
        <button-counter
          propsCounter="-"
          @click="decrementProduct"
        />
        <div>{{ searchProductCart(propsProductCatalog.id).quantity }}</div>
        <button-counter
          propsCounter="+"
          @click="incrementProduct"
        />
      </div>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "../buttons/Button.vue";
import ButtonCounter from "../buttons/ButtonCounter.vue";
import ButtonFavorites from "../buttons/ButtonFavorites.vue";

export default {
  name: "CardCatalog",

  components: {
    Button,
    ButtonCounter,
    ButtonFavorites,
  },

  props: {
    propsProductCatalog: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    ...mapGetters("cart", ["searchProductCart"]),
    ...mapGetters("product", ["searchProduct"]),
  },

  methods: {
    getUrlImage(src) {
      return require(`../../assets/images/${src}`);
    },

    addProductToCart() {
      this.$store.commit("cart/addProductToCart", this.propsProductCatalog);
    },

    incrementProduct() {
      this.$store.commit("cart/incrementQuantity", this.propsProductCatalog.id);
    },

    decrementProduct() {
      this.$store.dispatch(
        "cart/decrementQuantityToProduct",
        this.propsProductCatalog.id
      );
    },

    addFavorites() {
      this.$store.commit(
        "product/addPropertyFavorites",
        this.propsProductCatalog.id
      );
    },
  },
};
</script>

<style scoped>
.card-catalog {
  position: relative;
  border-radius: 10px;
  background: #fbfbfb;
}

.card-catalog__img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
}

.card-catalog__btn-favorites {
  position: absolute;
  top: 10px;

  right: 10px;
}

.card-catalog__inner {
  padding: 30px 20px;
}

.card-catalog__btn-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 134px;
  height: 40px;
}
</style>