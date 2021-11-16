<template>
  <div class="cart container">
    <h2>Корзина</h2>
    <div class="cart__wrapper">
      <ul
        class="cart__list"
        v-if="cartList.length"
      >
        <card-product
          v-for="item in cartList"
          :key="item.id"
          :propsProduct="item"
        />
      </ul>
      <div
        v-else
        class="cart__empty-wrapper"
      >
        <div class="cart__empty">
          Корзина пустая
        </div>
      </div>

      <div class="cart__purchase">
        <div class="cart__sum">
          <p>
            Сумма покупки: {{getTotalPriceCart}}
          </p>
        </div>
        <Button
          propsTitle="Оформить покупку"
          @click="placeOrder"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CardProduct from "./cards/CardProduct.vue";
import Button from "./buttons/Button.vue";

export default {
  name: "Cart",

  components: {
    CardProduct,
    Button,
  },

  computed: {
    ...mapState("cart", ["cartList"]),
    ...mapGetters("cart", ["getTotalPriceCart"]),
  },

  methods: {
    placeOrder() {
      const productsList = this.cartList
        .map((item) => {
          return item.dish;
        })
        .join("\n");

      alert(productsList.length ? productsList : "Корзина пустая");
    },
  },
};
</script>

<style scoped>
.cart__wrapper {
  display: flex;
  justify-content: space-between;
}

.cart__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 65%;
  margin: 0;
  padding: 11px 0 0;
  border-top: 0.3px solid rgba(70, 163, 88, 0.5);
  list-style: none;
}

.cart__empty-wrapper {
  width: 65%;
  padding: 11px 0 0;
  border-top: 0.3px solid rgba(70, 163, 88, 0.5);
}

.cart__empty {
  padding: 40px 0;
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 10px;
  background-color: #fbfbfb;
}

.cart__purchase {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 27%;
  padding: 11px 0 0;
  border-top: 0.3px solid rgba(70, 163, 88, 0.5);
}

.cart__sum {
  height: 100%;
  max-height: 200px;
  background-color: #fbfbfb;
  border-radius: 10px;
  padding: 20px;
}
</style>