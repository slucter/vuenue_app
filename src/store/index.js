import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getList: [],
    foodDetail: [],
    cartInfo: [],
    getCart: [],
    statPatch: null
  },
  getters: {
    totalPriceCart: (state) => {
      let total = 0
      for (let i = 0; i < state.getCart.length; i++) {
        total += state.getCart.product.harga * state.getCart.jumlah
      }
      return total
    }
  },
  mutations: {
    GET_LIST (state, data) {
      state.getList = data
    },
    GET_Q_LIST (state, data) {
      state.getList = data
    },
    GET_DETAIL (state, data) {
      state.foodDetail = data
    },
    ADD_TO_CART (state, data) {
      state.cartInfo.push(data)
    },
    GET_CART (state, data) {
      state.getCart = data
    },
    GET_BY_FILTER (state, data) {
      state.getList = data
    },
    PATCH_SOLD (state, data) {
      state.statPatch = data
    }
  },
  actions: {
    getList (context, url) {
      return new Promise((resolve) => {
        axios(url).then((result) => {
          context.commit('GET_LIST', result.data)
          resolve(result)
        })
      })
    },
    cariFoods (context, data) {
      axios.get('http://localhost:3000/products/?q=' + data).then((result) => {
        context.commit('GET_Q_LIST', result.data)
      })
    },
    getDetail (context, { url, id }) {
      return new Promise((resolve) => {
        axios(url + id).then((result) => {
          context.commit('GET_DETAIL', result.data)
          resolve(result)
        })
      })
    },
    pesanFoods (context, pesan) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/keranjangs', pesan).then((result) => {
          resolve(result.data)
          context.commit('ADD_TO_CART', result.data)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getCart (context, url) {
      axios.get(url).then((result) => {
        context.commit('GET_CART', result.data)
      })
    },
    deleteItem (context, item) {
      return new Promise((resolve, reject) => {
        axios.delete('http://localhost:3000/keranjangs/' + item).then((result) => {
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    checkOut (context, pesanan) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/pesanans', pesanan).then((result) => {
          resolve(result)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    filterBy (context, data) {
      axios.get('http://localhost:3000/products/?category=' + data).then((result) => {
        context.commit('GET_BY_FILTER', result.data)
      })
    },
    updateSoldItem (context, data) {
      axios.patch('http://localhost:3000/products/' + data.id, {
        sold: data.sold + 1
      }).then((result) => {
        context.commit('PATCH_SOLD', result.data)
      })
    }
  },
  modules: {
  }
})
