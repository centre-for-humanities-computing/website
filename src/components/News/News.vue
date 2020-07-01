<template>
  <div class="portfolio">
    <newsItem
      v-for="(item, index) in news"
      :key="'t' + index"
      :index="index"
      :item="item"
    ></newsItem>
  </div>
</template>

<script>
import NewsItem from './NewsItem'
export default {
  name: 'News',
  computed: {
    news() {
      return this.$store.state.news.items
    }
  },
  components: {
    NewsItem
  }
}
</script>
<style scoped>

  .content {
    grid-template-columns: 7fr 4fr;
    grid-template-areas: "text img";
  }

  .v-card:nth-child(2n) .content {
    grid-template-columns: 4fr 7fr;
    grid-template-areas: "img text";
  }

  .imageCard {
    height: 100% !important;
  }

  .body {
    margin-top: 1em;
  }

  .v-image {
    width: 100%;
    grid-area: img;
  }

  .text {
    grid-area: text;
  }
</style>
