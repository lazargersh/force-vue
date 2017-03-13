import Vue from 'vue';
import ViewFilm from '@/components/ViewFilm.vue';

describe('ViewFilm.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><view-film></view-film></div>',
      components: { ViewFilm },
    }).$mount();
    expect(vm.$el.querySelector('.randFilmBtn').textContent).to.contain('Random Film');
  });
});
