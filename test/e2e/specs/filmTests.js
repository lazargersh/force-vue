// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
var ui = require('../ui-properties/ui-locators.js')
var filmPage = require('../pages/film.js')

module.exports = {
  'verify film record has six table records': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
	  .setValue(ui.dev.select,ui.dev.selectValue.film)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(filmPage.elements.randomFilmButton)
      .assert.elementCount(ui.dev.tableRecord, 6)
      .assert.elementPresent(filmPage.elements.titleTextbox)
      .assert.elementPresent(filmPage.elements.episode_idTextbox)
      .assert.elementPresent(filmPage.elements.opening_crawlTextbox)
      .assert.elementPresent(filmPage.elements.directorTextbox)
      .assert.elementPresent(filmPage.elements.producerTextbox)
      .assert.elementPresent(filmPage.elements.release_dateTextbox)
      .pause(2000)
      .end()
  },

  'verify selecting random film: name field not empty': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
	  .setValue(ui.dev.select,ui.dev.selectValue.film)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(filmPage.elements.randomFilmButton)
      .click(filmPage.elements.randomFilmButton)
	  .pause(5000) 
      .getText(ui.dev.tableRecord, function(result) {
        this.assert.notEqual(result,'')
      })
      .end()
  },

  'verify film button has expected value: public RANDOM FILM': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
	  .setValue(ui.dev.select,ui.dev.selectValue.film)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .getText(filmPage.elements.randomFilmButton, function(result) {
        this.assert.equal(result.value,'public RANDOM FILM')
      })
      .end()
  }
}
