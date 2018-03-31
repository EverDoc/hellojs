# Review for Zhao Na

## Comments

see the comments starting with the suffix "X - [BW] - "

```javascript
// input.mjs

import Story from "./Login.mjs";
import webdriver from 'selenium-webdriver';
export default class MyStory extends Story {
    constructor(arrLogin) {
        super(arrLogin);
        this.username = "";
        this.password = "";
        this.expected = "";
        this.actual = "";
    }
    //intercept the content of the brackets
    // getContents(){
    //     let contents = "";      
    //     let reg = /\[(.*)\]/gi;
    //     let tmp = str.match(reg);
    //     if(tmp)  contents = tmp[0];
    //     return contents;
    // }
    subString(parameter) {
        // 1 - [BW] - use substr instead of substring
        // const key = parameter.substr(parameter.indexOf("[") + 1, parameter.indexOf("]"));
        const key = parameter.substring(parameter.indexOf("[") + 1, parameter.indexOf("]"));
        // 2 - [BW] - must return
        return key;
    }
    When(context) {
        super.When(context);
        //let contents = this.getContents(context);
        // 3 - [BW] - should use regular-expression here
        // if (context === " enter user name") this.username = this.subString(context);
        if (/ enter user name/.test(context)) this.username = this.subString(context);
        // if (context === " enter password") this.password = this.subString(context);
        if (/ enter password/.test(context)) this.password = this.subString(context);
    }
    Then(context) {
        super.Then(context);
        this.expected = this.subString(context); 
        let driver = new webdriver.Builder().forBrowser("chrome").build();
        const msg_url = 'https://everdoc.github.io/hellojs/quize/login.html';
        driver.get(msg_url);
        driver.wait(webdriver.until.urlIs(msg_url), 1000 * 10)
            .then((success) => {
                driver.findElement(webdriver.By.id('name')).sendKeys(this.username);
                driver.findElement(webdriver.By.id('password')).sendKeys(this.password);
                driver.findElement(webdriver.By.tagName('button')).click();
                driver.findElement(webdriver.By.id('result')).getText().then((context) => {
                    // 4 - [BW] - don't need to extract as there are not quotes
                    this.actual = context;//this.subString(context);
                    // 5 - [BW] - should use regular - expression here
                    if (new RegExp(this.expected,"i").test(this.actual)) {
                        console.log("The case is PASS");
                    } else {
                        console.log("The case is FAIL");
                    }
                    driver.quit();
                });
            }, (reason) => {
                // do nothing
                console.log(reason);
                driver.quit();
            });
    }
}
```