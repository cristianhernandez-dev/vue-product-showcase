<template>
  <v-alert type="error" variant="tonal" class="mb-4">
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  name: 'ErrorState',
  props: {
    message: {
      type: String,
      default: 'Ha ocurrido un error.'
    }
  }
}
</script>