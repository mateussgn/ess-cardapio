const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require("assert");

const service = new chrome.ServiceBuilder('../../../chromedriver');
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

(async function addItem() {
  try {
    let options = new chrome.Options();
    await driver.get('http://localhost:3000/');

    let editButton = await driver.findElement(By.xpath('//*[@id="root"]/div/div[3]/button[2]'));
    await editButton.click();

    let addButton = await driver.findElement(By.xpath('//*[@id="root"]/div/div[4]/div/div[4]/button[1]'));
    await addButton.click();

    let itemName = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form/div[1]/div[1]/div/input'));
    itemName.sendKeys("Brigadeiro");

    let itemNameText = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form/div[1]/div[1]/div/input')).getText().then(function(value){
      return value
    });
    assert.strictEqual(itemNameText, "Brigadeiro");

    let itemPrice = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form/div[1]/div[2]/div/input'));
    itemPrice.sendKeys("15");

    let itemDescription = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form/div[1]/div[3]/div/textarea[1]'));
    itemDescription.sendKeys("Feito com leite condensado");

    let saveButton = await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div/form/div[2]/button[2]'));
    saveButton.click();

    let succesfulAlert = await driver.findElement(By.xpath('/html/body/div/div/div[1]/div/div/div/div[2]')).getText();

    assert.strictEqual(succesfulAlert, "Item deleted succefully!");
    

    await driver.quit();
  } catch (error) {
    console.log(error)
  }
})();