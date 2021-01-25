console.log(`Inside of index.`);
const { Builder, By, Key, until } = require("selenium-webdriver");
console.log(`Inside of index, selenium-webdriver/chrome`);
const { Options } = require("selenium-webdriver/chrome");

require("chromedriver");


console.log(`Inside of index, starting example`);
(async function example() {
  
  console.log(`Inside of example, starting building chrome driver`);
  const driver = await new Builder()
    .setChromeOptions(
      new Options()
        .addArguments([
          "--no-sandbox",
          "--headless"
        ])
    )
    .forBrowser("chrome")
    .build();
  console.log(`Inside of example, running driver code.`);
  try {
    await driver.get("http://www.google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    console.log("found element");
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    await driver.quit();
  }
})();
