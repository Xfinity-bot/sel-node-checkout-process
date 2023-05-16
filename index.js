//Automating checkout process
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
(async function example() {
  9;
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get("https://ecommerce.tealiumdemo.com/");
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    await driver.findElement(By.className("skip-link  skip-account")).click();
    await sleep(4000);
    // await driver.findElement(By.css('a[href="https://ecommerce.tealiumdemo.com/customer/account/create/"]'))
    await driver
      .findElement(By.css("#header-account > div > ul > li:nth-child(5)"))
      .click();
    await sleep(2000);
    await driver.findElement(By.id("firstname")).sendKeys("Xfinity");
    await driver.findElement(By.id("lastname")).sendKeys("Z");
    await driver
      .findElement(By.id("email_address"))
      .sendKeys("Xfinity@xfinity.com");

    await driver.findElement(By.id("password")).sendKeys("Krishna1!");
    await driver.findElement(By.id("confirmation")).sendKeys("Krishna1!");
    const element = await driver.findElement(
      By.css(
        "body > div.wrapper > div > div.footer-container > div > div:nth-child(3) > ul > li.last > a"
      )
    );
    await driver.actions().move({ origin: element }).perform();
    await sleep(2000);
    await driver
      .findElement(By.css("#form-validate > div.buttons-set > button"))
      .click();
    // await driver.findElement(By.css('#form-validate > div.fieldset > ul > li:nth-child(3) > div:nth-child(2)')).sendKeys('Krishna1!');
  } finally {
    //await driver.quit();
  }
})();
