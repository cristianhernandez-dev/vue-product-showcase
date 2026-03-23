<template>
  <v-row class="mb-4">
    <v-col cols="12" sm="8" md="5" lg="4">
      <v-select
        label="Filtrar por categoría"
        :items="categories"
        item-title="title"
        item-value="value"
        :model-value="selectedCategory"
        variant="outlined"
        @update:model-value="changeCategory"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CategoryFilter',

  computed: {
    rawCategories() {
      return this.$store.getters['products/categories'] || []
    },

    categories() {
      const map = {
        "men's clothing": 'Ropa de hombre',
        "women's clothing": 'Ropa de mujer',
        "jewelery": 'Joyería',
        "electronics": 'Electrónica'
      }

      return [
        { title: 'Todas', value: 'all' },
        { title: 'Favoritos', value: 'favorites' },
        ...this.rawCategories
          .filter(cat => cat !== 'all')
          .map(cat => ({
            title: map[cat] || cat,
            value: cat
          }))
      ]
    },

    selectedCategory() {
      return this.$store.getters['filters/selectedCategory']
    }
  },

  methods: {
    changeCategory(value) {
      this.$store.commit('filters/SET_CATEGORY', value)
    }
  }
}
</script>