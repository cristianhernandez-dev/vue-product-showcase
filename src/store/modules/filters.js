export default {
  namespaced: true,

  state: () => ({
    category: 'all'
  }),

  mutations: {
    SET_CATEGORY(state, category) {
      state.category = category
    }
  },

  getters: {
    selectedCategory: (state) => state.category
  }
}
