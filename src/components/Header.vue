<template>
  <div class="header container">
    <nav>
      <ul class="header__list">
        <li>
          <router-link to="/">Каталог</router-link>
        </li>
        <li>
          <router-link to="/favorites">Избранное</router-link>
        </li>
        <li>
          <router-link to="/cart">Корзина</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
a {
  padding: 10px 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3d3d3d;
  text-decoration: none;
  outline: 0;
}

a:focus,
a:hover {
  background-color: rgba(70, 163, 88, 0.1);
  border-radius: 5px;
}

a.router-link-exact-active {
  border-radius: 0;
  border-bottom: 3px solid #46a358;
  background-color: transparent;
}

.header__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  margin: 0 0 36px;
  padding: 0;
  list-style: none;
}
</style>