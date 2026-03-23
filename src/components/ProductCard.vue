<template>
  <v-card class="d-flex flex-column h-100">
    <v-img
      :src="product.image"
      height="220"
      contain
      class="bg-white"
    />

<v-card-title class="text-subtitle-1 font-weight-bold">
  {{ translatedTitle }}
</v-card-title>

<v-card-subtitle>
  {{ categoryLabel }}
</v-card-subtitle>

<v-card-text class="flex-grow-1 card-text">
  <p class="description mb-3">
    {{ translatedDescription }}
  </p>

<div class="text-h6 font-weight-bold">
  {{ formattedPriceCLP }}
</div>
<small class="text-grey">
  Valor referencial en pesos chilenos
</small>
</v-card-text>

<v-card-actions class="px-4 pb-4">
<v-btn
  color="primary"
  variant="flat"
  size="small"
  min-width="130"
  class="text-none font-weight-bold"
  @click="dialog = true"
>
  Ver detalle
</v-btn>

  <v-spacer />

<v-btn
  icon
  variant="text"
  @click="toggleFavorite"
>
  <v-icon
    :color="isFavorite ? 'red' : 'grey'"
    size="20"
  >
    {{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}
  </v-icon>
</v-btn>

</v-card-actions>
  </v-card>
  <v-dialog v-model="dialog" max-width="500">
  <v-card>
    <v-card-title>
      {{ translatedTitle }}
    </v-card-title>

    <v-card-text>
      <v-img :src="product.image" height="200" contain />

      <p class="mt-4">{{ translatedDescription }}</p>

      <strong class="d-block mt-3">
        {{ formattedPriceCLP }}
      </strong>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn text @click="dialog = false">
        Cerrar
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
import { productTranslations } from '../data/translations'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
  return {
    dialog: false
  }
},

  computed: {
    isFavorite() {
      return this.$store.getters['favorites/isFavorite'](this.product.id)
    },
    categoryLabel() {
      const map = {
        "men's clothing": 'Ropa de hombre',
        "women's clothing": 'Ropa de mujer',
        "jewelery": 'Joyería',
        "electronics": 'Electrónica'
      }

      return map[this.product.category] || this.product.category
    },
    translatedTitle() {
      return productTranslations[this.product.id]?.title || this.product.title
    },
    translatedDescription() {
      return productTranslations[this.product.id]?.description || this.product.description
    },
    priceInCLP() {
      const exchangeRate = 920.52
      return this.product.price * exchangeRate
    },
    formattedPriceCLP() {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0
      }).format(this.priceInCLP)
    }
  },
  methods: {
    toggleFavorite() {
      this.$store.commit('favorites/TOGGLE_FAVORITE', this.product)
    }
  }
}
</script>

<style scoped>
.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-text {
  min-height: 140px;
}
.v-icon {
  transition: all 0.2s ease;
}

.v-icon:hover {
  transform: scale(1.2);
}
</style>