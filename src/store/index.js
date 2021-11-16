import Vue from "vue";
import Vuex from "vuex";
import { catalogModule } from './modules/catalogModule';
import { cartModule } from './modules/cartModule';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    modules: {
        product: catalogModule,
        cart: cartModule
    }
})