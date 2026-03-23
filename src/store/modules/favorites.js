export default {
  namespaced: true,

  state: () => ({
    items: []
  }),

  mutations: {
    TOGGLE_FAVORITE(state, product) {
      const exists = state.items.find(item => item.id === product.id)

      if (exists) {
        state.items = state.items.filter(item => item.id !== product.id)
      } else {
        state.items.push(product)
      }
    }
  },

  getters: {
    favoriteItems: (state) => state.items,
    favoriteCount: (state) => state.items.length,
    isFavorite: (state) => (id) => state.items.some(item => item.id === id)
  }
}
