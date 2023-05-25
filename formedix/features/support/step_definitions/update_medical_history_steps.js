const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { assertThat, is } = require("hamjest");
const { Builder, By, Capabilities, Key } = require("selenium-webdriver");
const { expect } = require("chai");
//const {login, validateTechMenu, updateMedicalHistory, logout} = require('./journeys.js')
const Journeys = require('./journeys.js')



Given("I navigate to the formedix website", async function () {
  this.journeys = new Journeys()
  this.journeys.loadPage();
});

When ("I login", async function(){
  this.journeys = new Journeys();
this.journeys.login();

});
Then('I validate tech study menu', function () {
  this.journeys = new Journeys();
  this.journeys.validateTechMenu();
});

When('I update the medical History', function () {
  this.journeys = new Journeys();
  this.journeys.updateMedicalHistory();

});
Then('I sign out', function () {
  this.journeys = new Journeys();
  this.journeys.logout()
});

