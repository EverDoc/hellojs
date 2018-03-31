# Review for Zhang Ya Bing

## Comments

see the comments starting with the suffix "X - [BW] - "

```javascript
// LoginStory.mjs

import Story from "./story.mjs"
import webdriver from "selenium-webdriver"

export default class LoginStory extends Story {
    constructor(arrStory) {
        super(arrStory);
        this.username = "";
        this.password = "";
        this.expected = "";
        this.actual = "";
    }

    When(message) {
        super.When(message);
        this.username = "admin";
        this.password = "taylor2018";
        this.expected = "Successful!";
    }

    Then(message) {
        super.Then(message);
        let driver = new webdriver.Builder().forBrowser("chrome").build();
        driver.get('https://everdoc.github.io/hellojs/quize/login.html');
        // 1 - [BW] - msg_url is undefined
        // driver.wait(webdriver.until.urlIs(msg_url), 1000 * 10)
        driver.wait(webdriver.until.urlIs('https://everdoc.github.io/hellojs/quize/login.html'), 1000 * 10)
        // 4 - [BW] - missing semicolon
        driver.findElement(webdriver.By.id("name")).sendKeys(this.username);
        // 4 - [BW] - missing semicolon
        driver.findElement(webdriver.By.id("password")).sendKeys(this.password);
        driver.findElement(webdriver.By.tagName('button')).click()
            .then((success) => {
                driver.findElement(webdriver.By.id('result')).getText().then((message) => {
                    driver.quit();
                    this.actual = message
                    // 3 - [BW] - wrong operator
                    // if (this.actual = this.expected) {
                    if (this.actual === this.expected) {    
                        console.log(" The case is PASS")
            
                    } else {
                        // 5 - [BW] - typo of console
                        console.log(" The case is FAIL")
                    }
                }
                );
            });

        // 2 - [BW] -  should move into the callback function of the getText() method
        /*
        if (this.actual = this.expected) {
            console.log(" The case is PASS")

        } else {
            onsole.log(" The case is FAIL")
        }
        */
    }

}
```