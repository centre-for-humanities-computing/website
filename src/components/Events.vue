<template>
  <div class="events">
    <v-container>
      <v-layout
        align-center
      >
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h2 class="text-xs-center">
                <span v-if="$vuetify.breakpoint.sm">CHCAA</span>
                <span v-else>Center for Humanities Computing Aarhus</span>
                Events
              </h2>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-card>
            <v-card-text>
              <v-layout>
                <v-flex>
                  <iframe src="https://calendar.google.com/calendar/embed?src=7se659lm457821ich0km70tdd8%40group.calendar.google.com&ctz=Europe%2FBerlin" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Events',
}
</script>
