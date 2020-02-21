<template>
  <div class="people">
    <v-container fluid>
      <v-card class="section heading">
        <v-card-title>
          Staff
        </v-card-title>
      </v-card>
      <v-card
        v-for="(person, index) in staff"
        :key="index"
        class="my-3"
        tile
      >
        <person
          :title="person.title"
          :name="person.name"
          :src="person.src"
          :specializations="person.specializations"
          :functions="person.functions"
        ></person>
      </v-card>
    </v-container>
    <v-container fluid>
      <v-card class="section heading">
        <v-card-title>
          Alumni
        </v-card-title>
      </v-card>
      <person
        v-for="(person, index) in alumni"
        :key="`a${index}`"
        :title="person.title"
        :name="person.name"
        :src="person.src"
        :specializations="person.specializations"
        :functions="person.functions"
        color="blue-grey lighten-5"
      ></person>
    </v-container>
  </div>
</template>

<script>
import Person from './Person'
/*
  function groupGenders(list) {
    list.sort((a, b) => (a.gender > b.gender) ? 1 : -1)
    return list
  }
*/
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
function alumni (p) {
  return p.functions.indexOf('Alumna') + p.functions.indexOf('Alumnus') > -1
}
function staff (p) {
  return p.functions.indexOf('Alumna') + p.functions.indexOf('Alumnus') === -2
}
export default {
  name: 'People',
  computed: {
    staff: {
      get() {
        let cards = this.$store.state.people.cards.filter(staff)
        shuffle(cards)
        // groupGenders(cards)
        return cards
      }
    },
    alumni: {
      get() {
        let cards = this.$store.state.people.cards.filter(alumni)
        shuffle(cards)
        // groupGenders(cards)
        return cards
      }
    }
  },
  components: {
    Person
  }
}
</script>

<style>
  .section.heading {
    background-color: transparent;
    border: none;
    box-shadow: none;
    font-size: 200%;
    width: 100%;
  }
  .section.heading>* {
    justify-content: center;
  }
</style>
