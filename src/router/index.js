import Vue from 'vue';
import Router from 'vue-router';
import Catalog from '../components/Catalog.vue';
import Cart from '../components/Cart.vue';
import Favorites from '../components/Favorites.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Catalog
        },
    
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },

        {
            path: '/favorites',
            name: 'favorites',
            component: Favorites
        }
    ]
});