<template>
  <v-layout full-height fluid>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <div class="heading">
            <h2 v-html="title"></h2>
            <em v-if="subtitle" v-html="subtitle"></em>
          </div>
        </v-card-title>
        <v-card-text v-html="body"/>
    </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Body',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
  .v-card {
    box-shadow: none!important;
    border: none!important;
  }
</style>
