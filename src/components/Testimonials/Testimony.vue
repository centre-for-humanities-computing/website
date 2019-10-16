<template>
  <v-card>
    <v-content>
      <div
        class="quote elevation-2"
        :class="variant"
      >
        <img class="image" :src="testimony.src"/>
        <div class="circle">
          <div class="inner">
            <i :class="testimony.icon"></i>
          </div>
        </div>
        <div class="text">
          <p>{{testimony.text}}</p>
          <div class="author">
            <p>- <span>{{testimony.jobTitle}}</span> <span>{{testimony.author}}</span>, <span>{{testimony.association}}</span></p>
          </div>
          <div class="quote-tag">
            <p>{{testimony.tags.join(', ')}}</p>
          </div>
        </div>
      </div>
    </v-content>
  </v-card>
</template>

<script>
export default {
  name: 'Testimony',
  props: {
    aNotB: {
      type: Boolean,
      required: true
    },
    testimony: {
      type: Object,
      required: true
    }
  },
  computed: {
    variant: {
      get() {
        return this.aNotB ? 'A' : 'B'
      }
    }
  }
}
</script>

<style scoped>
  img {
    height: 100%;
  }
  .quote {
    display: grid;
    margin-bottom: 60px;
    max-height: 220px;
    min-height: 220px;
  }
  .quote>.image { order: 1 }
  .quote>.circle { order: 2 }
  .quote>.text{ order: 2 }
  .quote.right>.image { order: 3 }
  .quote.right>.text { order: 1 }
  .quote.left {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 700px;
  }
  .quote.right {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 700px;
  }
</style>
