import api from '../../services/api'

export default {
  namespaced: true,
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),

  mutations: {
    SET_LOADING(state, value) {
      state.loading = value
    },
    SET_PRODUCTS(state, products) {
      state.items = products
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },

  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)

      try {
        const response = await api.get('/products')
        commit('SET_PRODUCTS', response.data)
      } catch (error) {
        commit('SET_ERROR', 'No se pudieron cargar los productos desde la API.')
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },

  getters: {
    products: (state) => state.items,
    categories: (state) => ['all', ...new Set(state.items.map(p => p.category))]
  }
}
