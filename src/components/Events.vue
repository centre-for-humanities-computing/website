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
                  <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBerlin&amp;src=N3NlNjU5bG00NTc4MjFpY2gwa203MHRkZDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237CB342&amp;showNav=1&amp;showDate=1&amp;showTitle=0&amp;showTabs=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
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
