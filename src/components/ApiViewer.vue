<template>
<div class="mdl-grid portfolio-max-width">
  <select class="mdl-tabs__tab " v-model="selected">
    <option v-for="item in apiSelect">
      {{ item }}
    </option>
  </select>
  <view-film v-if="selected == 'Film'"></view-film>
  <view-person v-if="selected == 'Person'"></view-person>
  <view-planet v-if="selected == 'Planet'"></view-planet>
  <view-starship v-if="selected == 'Starship'"></view-starship>
</div>
</template>

<script>
import ViewFilm from './ViewFilm.vue';
import ViewPerson from './ViewPerson.vue';
import ViewPlanet from './ViewPlanet.vue';
import ViewStarship from './ViewStarship.vue';

export default {
  components: {
    ViewFilm,
    ViewPerson,
    ViewPlanet,
    ViewStarship,
  },
  data() {
    return {
      apiSelect: ['Film', 'Person', 'Planet', 'Starship'],
      selected: 'Person',
    };
  },
};

</script>
