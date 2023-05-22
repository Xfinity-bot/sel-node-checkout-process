const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let links = [];
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
(async function example() {
  9;
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get("https://github.com/trending");

    await driver.findElements(By.className("Box-row")).then((elements) => {
      elements.map((element) =>
        element.findElement(By.css("h2 > a")).then((element) => {
          element.getAttribute("href").then((text) => links.push(text));
         //driver.wait(()=>{},3500)
          
            element.click().then((
            
              )=>{
                 setTimeout(()=>{
                  driver.wait(until.elementLocated(By.css("strong > a")))
                 },3000);
               
              });
          
        })
      );
    });
    await sleep(3500);
  } finally {
    await sleep(3500);
    console.log(links);
    await driver.quit();
  }
})();
