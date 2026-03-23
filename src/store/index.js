import { createStore } from 'vuex'
import products from './modules/products'
import filters from './modules/filters'
import favorites from './modules/favorites'
import theme from './modules/theme'

export default createStore({
  modules: {
    products,
    filters,
    favorites,
    theme
  }
})
