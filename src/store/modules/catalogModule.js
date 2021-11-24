import { imagesList } from "../../assets/images/images.js";

export const catalogModule = {
    namespaced: true,

    state: () => ({
        productsList: [
            // {
            //     id: 123,
            //     description: 'fdfjhdlfhkdj',
            //     dish: 'Product-1',
            //     ingredient: 'fjdsjfds;l',
            //     measurement: 'djfdjfds',
            //     price: 1245,
            //     image: '6123150777.webp',
            //     favorites: false
            // }
        ],
        checkoutStatus: 'PENDING'
    }),

    getters: {
        getProductsFavorites(state) {
            return state.productsList.filter((item) => {
                return item.favorites;
            })
        },

        searchProduct: (state) => (id) => {
            return state.productsList.find((item) => {
                return item.id === id;
            })
        }
    },

    mutations: {
        addProductToCatalog(state, payload) {
            state.productsList = payload;
        },

        addPropertyFavorites(state, id) {
            const product = state.productsList.find((item) => {
                return item.id === id;
            });

            product.favorites = !product.favorites;
        },

        setCheckoutStatus(state, status) {
            state.checkoutStatus = status;
        }
    },

    actions: {
        getProductCatalog: async (context) => {
            try {
                const response = await fetch(
                    " https://random-data-api.com/api/food/random_food?size=30"
                );

                if(!response.ok) {
                    throw new Error(`HTTP ERROR status ${response.status}`)
                }
    
                const data = await response.json();
                const newData = data.map((item) => {
                    return {
                        ...item,
                        image: imagesList[Math.floor(Math.random() * imagesList.length)],
                        price: Math.round(Math.random() * 1000),
                        favorites: false
                    }
                });
    
                context.commit('addProductToCatalog', newData);
                context.commit('setCheckoutStatus', 'SUCCESS');
            } catch(err) {
                console.error(err);
                context.commit('setCheckoutStatus', 'ERROR');
            }
        },
    }
};