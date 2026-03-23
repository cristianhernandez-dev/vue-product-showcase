<template>
  <v-app :theme="theme">
    <AppHeader />

    <v-main>
      <v-container class="py-10">
        <section class="mb-6">
          <h1 class="text-h4 font-weight-bold mb-2">Vue Product Showcase</h1>
          <p class="text-body-1">
            Catálogo interactivo de productos con consumo de API, Vuex, filtros,
            favoritos y diseño responsive.
          </p>
        </section>

        <CategoryFilter />
        <ProductList />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import CategoryFilter from './components/CategoryFilter.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    CategoryFilter,
    ProductList
  },
  computed: {
    theme() {
      return this.$store.getters['theme/currentTheme']
    }
  },
  created() {
    this.$store.dispatch('products/fetchProducts')
  }
}
</script>
