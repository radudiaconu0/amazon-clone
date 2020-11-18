import Vue from 'vue'
import Vuex from 'vuex'
import {Product} from "@/interfaces/interfaces";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        basket: [] as Array<Product>,
        user: null
    },
    getters: {
        basket: (state): Array<Product> => {
            return state.basket
        },
        basketTotal: (state): number => {
            return state.basket.reduce((amount, item) => item.price + amount, 0)
        },
        user: state => state.user
    },
    mutations: {
        ADD_TO_BASKET(state, item) {
            state.basket.push(item)
        },
        REMOVE_FROM_BASKET(state, id) {
            const index = state.basket.findIndex((basketItem) => {
                return basketItem.id === id
            })
            const newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
                state.basket = newBasket;
            } else {
                console.warn(`Cant remove product (id: ${id} as its not in the basket`)
            }
        },
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        addToBasket({commit}, payload) {
            commit('ADD_TO_BASKET', payload);
        },
        removeFromBasket({commit}, payload) {
            commit("REMOVE_FROM_BASKET", payload.id)
        },
        setUser({commit}, payload) {
            commit("SET_USER", payload.user)
        }
    },
})
