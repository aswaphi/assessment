const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { assertThat, is } = require("hamjest");
const assert = require("assert").strict;
const { Builder, By, Capabilities } = require("selenium-webdriver");

const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3: false });
const driver = null;

class Journeys {


  driver = new Builder().withCapabilities(capabilities).build();

  loadPage() {

    this.selenium = new Journeys.Selenium();
    this.selenium.getPage(this.selenium.url);
  }

  login() {

    this.selenium = new Journeys.Selenium();
    this.selenium.enterTextByID(this.selenium.usernameID, this.selenium.username);
    this.selenium.enterTextByID(this.selenium.passwordID, this.selenium.password);
    this.selenium.clickButtonByID(this.selenium.loginButtonID);
  }
  
  validateTechMenu() {

    this.selenium = new Journeys.Selenium();
    this.selenium.clickButtonByXpath(this.selenium.repositoryButtonXpath);
    this.selenium.clickButtonByXpath(this.selenium.studiesButtonXpath);
    this.selenium.isPresentByXpath(this.selenium.techStudyMenuXpath)
    this.selenium.clickButtonByXpath(this.selenium.techStudyMenuXpath);
    this.selenium.clickButtonByXpath(this.selenium.techStudyMenuXpath);
    this.selenium.clickButtonByID(this.selenium.viewID);    
    this.selenium.clickButtonByID(this.selenium.formsID);
  }

  updateMedicalHistory() {

    this.selenium = new Journeys.Selenium();
    var valueOnBrowser;
    var description = "Testing Description";
    this.selenium.clickButtonByXpath(this.selenium.medicalHistoryXpath);
    this.selenium.clickButtonByXpath(this.selenium.editFormID);
    this.selenium.enterTextByID(this.selenium.descriptionID, description);
    this.selenium.clickButtonByID(this.selenium.updateID);
    this.selenium.clickButtonByID(this.selenium.editFormID);//same element for 'close edit'
    valueOnBrowser = this.selenium.getTextFieldValue(this.selenium.descriptionText1);
    assert.equal(valueOnBrowser, description);
    valueOnBrowser = this.selenium.getTextFieldValue(this.selenium.descriptionText2);
    assert.equal(valueOnBrowser, description);
  }
  
  logout() {
    this.selenium = new Journeys.Selenium();
    this.selenium.clickButtonByXpath(this.selenium.testTeamtechTestXpath);
    this.selenium.clickButtonByXpath(this.selenium.signOutXpath);
  }

  static Selenium = class {
    constructor() {

      // login elements
      this.usernameID = "username";
      this.passwordID = "password";
      this.loginButtonID = "btnSubmit";

      this.username = "testteamtechtest";
      this.password = "Ryz3T3st!x";
      this.url = "https://ryze-staging.formedix.com/sign-in";

      // navigate to view forms
      this.repositoryButtonXpath = '(//p[text()="Repository"])[1]';
      this.studiesButtonXpath = '(//p[@class="fdx-sub-nav-menu-item-desc"])[2]';
      this.techStudyMenuXpath ='//span[@class="fdxicon-regular fdx-menu dropdown-toggle icon"]';
      this.viewID = 'fdxMdbContainerListItem0View'
      this.dataAcquisitionID = "dataAcquisitionName";
      this.formsID = "FORMTypeView";

      // updating medical history elements
      this.medicalHistoryXpath = '//span[text()="Medical History"]';
      this.editFormID = "switchEditMode";
      this.descriptionID = "assetLocaleEditTextTextareadescription";
      this.updateID = "saveAsset";

      // logout elements
      this.testTeamtechTestXpath = '(//p[@class="fdx-main-nav-item-label"])[8]';
      this.signOutXpath = '//span[text()="Sign out"]';
      this.descriptionText1 = '(//span[text()="Testing Description"])[1]'
      this.descriptionText2 ='(//span[text()="Testing Description"])[2]'
    }

    
    async getPage(url) {
      await this.driver.get(url);
    }
    async enterTextByID(elementID, inputText) {
      const element = await this.driver.findElement(By.id(elementID));
      element.sendKeys(inputText);
    }

    async enterTextByXpath(elementXpath, inputText) {
      const element = await this.driver.findElement(By.xpath(elementXpath));
      element.sendKeys(inputText);
    }

    async clickButtonByID(buttonID) {
      const element = await this.driver.findElement(By.id(buttonID));
      await element.click();
    }

    async clickButtonByXpath(buttonXpath) {
      const element = await this.driver.findElement(By.xpath(buttonXpath));
      await element.click();
    }

    async isPresentByID(buttonID){
      display = await driver.findElement(By.id(buttonID)).isDisplayed();
      return
    }

    async isPresentByXpath(buttonID){
      display = await driver.findElement(By.id(buttonID)).isDisplayed();
      return
    }

    async getTextFieldValue(textFieldID) {
      let webElement = await this.driver.wait(
        until.elementLocated(By.id(textFieldID))
      );
      await new Promise((r) => setTimeout(r, 3000));
      return webElement.getAttribute("innerHTML");
    }
   
  };
}
module.exports = Journeys;
