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
              <a-badge
                :src="testimony.src"
                :size="avatarSize"
              ></a-badge>
            </v-card-title>
          </v-flex>
          <v-flex xs9 class="quote">
            <a-body
              :title="testimony.author"
              :subtitle="testimony.association"
              :body="body"
            ></a-body>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { ABadge, ABody } from '../Avatar'
export default {
  name: 'Testimony',
  props: {
    testimony: {
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
      return `<p>${this.testimony.quote || ''}</p><p class="tags">${this.testimony.tags.join(' | ')}</p>`
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
