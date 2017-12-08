var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var driver = new webdriver.Builder().forBrowser('chrome').build();



driver.get('http://www.google.com/ncr');
driver.manage().window().maximize();
driver.manage().deleteAllCookies()
.then(function () {
  console.log('navigating to googl en');
  return driver.findElement(By.name('q'));
}).then(function (q) {
  console.log('search for Recongate');
  q.sendKeys('Recongate');
  q.sendKeys(webdriver.Key.ENTER);
}).then(function() {
  var list = driver.findElement(By.xpath('//*[contains(text(),"recongate.com")]'));
  if (list.length != 0) {
    console.log("recongate.com is present in search result");
  } else {
    console.log("recongate.com is not presented");
  }
}).then(function () {
  var number_of_elements = driver.findElements(By.xpath("//*[@id='rso']/div/div/div"));
  console.log("the number is:" + number_of_elements);
}).then (function() {
  console.log('click on recongate.com');
  driver.findElement({ xpath: '//*[@id="rso"]/div/div/div[1]/div/div/h3/a' }).click();
}).then(function(){
  console.log('wait for elemnt to load in the page recongate.com');
  driver.wait(webdriver.until.elementLocated({ xpath: '/html/body/div[2]/div[1]/header/div[1]/div/div/a/img' }));
}).then (function(){
  console.log('element exists');
}).then (function(){
  driver.executeScript("scrollTo(0, document.body.scrollHeight)");
}).then (function(){
var footer = driver.findElement(By.className('footer-info-area')).isDisplayed();
if (footer != 0) {
  console.log("footer is visable");
} else {
  console.log("footer is hidden/missing");
}}).then (function(){
driver.quit();
});
















