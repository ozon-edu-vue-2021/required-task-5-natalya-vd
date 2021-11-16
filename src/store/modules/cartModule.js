export const cartModule = {
    namespaced: true,

    state: () => ({
        cartList: [
             // {
            //     id: 123,
            //     description: 'fdfjhdlfhkdj',
            //     dish: 'Product-1',
            //     ingredient: 'fjdsjfds;l',
            //     measurement: 'djfdjfds',
            //     price: 1245,
            //     image: '6123150777.webp',
            //     quantity: 1
            // }
        ]
    }),

    getters: {
        getTotalPriceCart(state) {
            return state.cartList.reduce((sum, item) => {
                return sum + item.price * item.quantity;
            }, 0);
        },

        getTotalPriceProduct: (state) => (id) => {
            const product = state.cartList.find((item) => {
                return item.id === id;
            });

            return product.price * product.quantity;
        },

        searchProductCart: (state) => (id) => {
            return state.cartList.find((item) => {
                return item.id === id;
            })
        }   
    },

    mutations: {
        addProductToCart(state, payload) {
            state.cartList.push({
                ...payload,
                'quantity': 1
            })
        },

        removeProductFromCart(state, id) {
            state.cartList = state.cartList.filter((item) => {
                return item.id !== id
            })
        },

        incrementQuantity(state, id) {
            const product = state.cartList.find((item) => {
                return item.id === id;
            });

            product.quantity++
        },

        decrementQuantity(state, id) {
            const product = state.cartList.find((item) => {
                return item.id === id;
            });

            product.quantity--
        }
    },

    actions: {
        decrementQuantityToProduct(context, id) {
            const product = context.state.cartList.find((item) => {
                return item.id === id;
            });

            if(product.quantity > 1) {
                context.commit('decrementQuantity', id);
            } else {
                context.commit('removeProductFromCart', id)
            }
        }
    }
};