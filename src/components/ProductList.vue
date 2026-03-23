<template>
  <div>
    <LoadingState v-if="loading" />

    <ErrorState
      v-else-if="error"
      :message="error"
    />

    <EmptyState v-else-if="filteredProducts.length === 0" />

    <v-row v-else>
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import LoadingState from './LoadingState.vue'
import ErrorState from './ErrorState.vue'
import EmptyState from './EmptyState.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard,
    LoadingState,
    ErrorState,
    EmptyState
  },
computed: {
  products() {
    return this.$store.getters['products/products']
  },
  loading() {
    return this.$store.state.products.loading
  },
  error() {
    return this.$store.state.products.error
  },
  selectedCategory() {
    return this.$store.getters['filters/selectedCategory']
  },
  filteredProducts() {
    const products = this.products || []
    const selectedCategory = this.selectedCategory
    const favorites = this.$store.getters['favorites/favoriteItems'] || []

    if (selectedCategory === 'all') {
      return products
    }

    if (selectedCategory === 'favorites') {
      return favorites
    }

    return products.filter(
      product => product.category === selectedCategory
    )
  }
}
}
</script>