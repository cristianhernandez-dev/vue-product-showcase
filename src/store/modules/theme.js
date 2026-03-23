export default {
  namespaced: true,

  state: () => ({
    currentTheme: 'light'
  }),

  mutations: {
    TOGGLE_THEME(state) {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light'
    }
  },

  getters: {
    currentTheme: (state) => state.currentTheme
  }
}
