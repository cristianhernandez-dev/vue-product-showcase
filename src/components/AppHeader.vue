<template>
  <v-app-bar color="primary">
    <v-app-bar-title>Vue Product Showcase</v-app-bar-title>

    <v-spacer />

    <v-chip class="mr-3" variant="elevated">
      Favoritos: {{ favoriteCount }}
    </v-chip>

    <v-btn icon @click="toggleTheme">
      <v-icon>
        {{ theme === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    favoriteCount() {
      return this.$store.getters['favorites/favoriteCount']
    },
    theme() {
      return this.$store.getters['theme/currentTheme']
    }
  },
  methods: {
    toggleTheme() {
      this.$store.commit('theme/TOGGLE_THEME')
    }
  }
}
</script>
