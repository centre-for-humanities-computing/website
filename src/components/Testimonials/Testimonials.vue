<template>
  <v-container fluid>
    <testimony
      v-for="(testimony, index) in testimonials"
      :key="index"
      :aNotB="index % 2"
      :testimony="testimony"
    >
    </testimony>
  </v-container>
</template>

<script>
import Testimony from './Testimony'
export default {
  name: 'Testimonials',
  props: [
    'testimonials'
  ],
  components: {
    Testimony
  }
}
</script>

<style scoped>

</style>
