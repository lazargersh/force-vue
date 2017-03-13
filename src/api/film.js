import Vue from 'vue';

import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';
import ApiCache from './api-cache';

const filmCache = new ApiCache(null);
const film = new EventEmitter();
const filmBaseUrl = 'films/';
export default film;

film.fetch = id => {
  if (!id) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    const filmToGet = `${filmBaseUrl}${id}/`;

    if (filmCache.get(filmToGet)) {
      resolve(filmCache.get(filmToGet));
    }
    Vue.http.get(filmToGet).then(response => {
      const filmData = response.data;
      filmCache.put(filmToGet, filmData);
      resolve(filmData);
    }, reject);
  });
};
