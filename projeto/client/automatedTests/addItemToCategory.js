const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const service = new chrome.ServiceBuilder('../../../chromedriver');
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

(async function addItemToCategory() {
    try {
      let options = new chrome.Options();
      await driver.get('http://localhost:3000/');
  
      let editButton = await driver.findElement(By.xpath('//*[@id="root"]/div/div[3]/button[2]'));
      await editButton.click();
  
      let categoriesButton = await driver.findElement(By.xpath('//*[@id="root"]/div/div[4]/div/div[4]/button[3]'));
      await categoriesButton.click();
  
      let categorySelector = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form[3]/div[1]/div[1]/div'));
      categorySelector.click();
  
      let selectedCategory = await driver.findElement(By.xpath('/html/body/div[3]/div[3]/ul/li'));
      selectedCategory.click();
  
      let itemSelector = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form[3]/div[1]/div[2]/div'));
      itemSelector.click();
  
      let selectedItem = await driver.findElement(By.xpath('/html/body/div[3]/div[3]/ul/li[1]'));
      selectedItem.click();
  
      let addButton = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form[3]/div[2]/button[2]'));
      addButton.click();
  
      let succesfulAlert = await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div/div/div'));
      if(succesfulAlert.isDisplayed()){
          console.log("Success!");
      };
  
      await driver.quit();
    } catch (error) {
      console.log(error)
    }
  })

  module.exports = addItemToCategory();