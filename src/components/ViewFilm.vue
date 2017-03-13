<template>
  <div>
    <div class="mdl-card mdl-shadow--4dp portfolio-card">
      <button class="randFilmBtn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
              v-mdl
              @click="fetchRandomFilm">
        <i class="material-icons">public</i> Random Film
      </button>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="filmTitle"
               data-qa="titleTextbox"
               v-model="filmData.title">
        <label for="filmTitle" class="mdl-textfield__label">
          Title
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="filmEpisodeId"
               data-qa="episode_idTextbox"
               v-model="filmData.episode_id">
        <label for="filmEpisodeId" class="mdl-textfield__label">
          Episode Id
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="filmOpeningCrawl"
               data-qa="opening_crawlTextbox"
               v-model="filmData.opening_crawl">
        <label for="filmOpeningCrawl" class="mdl-textfield__label">
          Opening Crawl
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="filmDirector"
               data-qa="directorTextbox"
               v-model="filmData.director">
        <label for="filmDirector" class="mdl-textfield__label">
          Director
        </label>
      </div>
	  <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="filmProducer"
               data-qa="producerTextbox"
               v-model="filmData.producer">
        <label for="filmProducer" class="mdl-textfield__label">
          Producer
        </label>
      </div>
	  <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="filmReleaseDate"
               data-qa="release_dateTextbox"
               v-model="filmData.release_date">
        <label for="filmReleaseDate" class="mdl-textfield__label">
          Release Date
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import film from '../api/film';

export default {
  data() {
    return {
      filmData: {
        title: '',
        episode_id: '',
        opening_crawl: '',
        director: '',
        producer: '',
        release_date: '',
      },
    };
  },
  methods: {
    fetchRandomFilm() {
      const randomFilmId = Math.floor((Math.random() * 7) + 1);
      film.fetch(randomFilmId).then((filmData) => {
        this.filmData = Object.assign(this.filmData, filmData);
      });
    },
  },
  updated() {
    const mdlInputs = document.querySelectorAll('.mdl-textfield');
    mdlInputs.forEach(value => value.MaterialTextfield.checkDirty());
  }
};
</script>
