const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const service = new chrome.ServiceBuilder('../../../chromedriver');
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

(async function createCategory() {
    try {
      let options = new chrome.Options();
      await driver.get('http://localhost:3000/');
  
      let editButton = await driver.findElement(By.xpath('//*[@id="root"]/div/div[3]/button[2]'));
      await editButton.click();
  
      let categoriesButton = await driver.findElement(By.xpath('//*[@id="root"]/div/div[4]/div/div[4]/button[3]'));
      await categoriesButton.click();
  
      let categoryName = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form[1]/div[1]/div/div/input'));
      categoryName.sendKeys("Doce");
  
      let createButton = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form[1]/div[2]/button'));
      createButton.click();
  
      let succesfulAlert = await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/div/div'));
      if(succesfulAlert.isDisplayed()){
          console.log("Success!");
      };
  
      await driver.quit();
    } catch (error) {
      console.log(error)
    }
  })
  
  module.exports = createCategory();