<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-layout
          row
          :class="{B: index % 2}">
          <v-flex
            xs3
            class="avatar"
            align-center
            justify-center
          >
            <v-card-title primary-title>
              <v-img
                v-if="item.imageSrc"
                :src="item.imageSrc"
                position="center left"
              ></v-img>
              <v-icon
                :size="size"
                v-else
              >{{ defaultIcon }}</v-icon>
            </v-card-title>
          </v-flex>
          <v-flex xs9 class="quote">
            <v-card>
              <v-card-title>
                <div class="heading">
                  <h2 v-html="item.title"></h2>
                  <em v-if="item.date" v-html="item.date"></em>
                </div>
              </v-card-title>
              <v-card-text v-html="body"/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { ABadge, ABody } from '../Avatar'
export default {
  name: 'NewsItem',
  data() {
    return {
      defaultIcon: 'fas fa-newspaper-o'
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    body() {
      return `<p>${this.item.body || ''}</p><p class="tags">${this.item.tags.join(' | ')}</p>`
    },
    avatarSize () {
      const width = this.$store.state.box.sceneWidth
      console.log(width)
      return width < 1600 ? width / 5 : 400
    }
  },
  components: {
    ABadge,
    ABody
  }
}
</script>
<style scoped>
  @media only screen (min-width: 768px) {
    .v-card {
      font-size: 140% !important;
    }
  }
  .quote {
    order: 1
  }
  .avatar {
    order: 2
  }
  .B .avatar {
    order: 1
  }
  .B .quote {
    order: 2
  }
  .tags {
    font-size: 90%!important;
    font-style: italic!important;
  }
</style>
