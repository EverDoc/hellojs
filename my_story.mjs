import Story from "./story.mjs";
import webdriver from 'selenium-webdriver';

export default class MyStory extends Story{
    
    Given(context){
        super.Given(context);
    }
    
    When(context){
        super.When(context);
        if(/ask Open the door/i.test(context))  this.event("question","Who are you?");
        if(/say\sI\sam\sMom/i.test(context))       this.event("question","Mom is back!");
    }

    Then(context){
        super.Then(context);
        let driver= new webdriver.Builder().forBrowser("chrome").build();
        const msg_url='https://navink.navitor.com/home/index/?BrokerConfigID=eafac950-eca4-4eae-8f18-ca49227c0339';
        driver.get(msg_url);
        driver.wait(webdriver.until.elementLocated(webdriver.By.css('iframe[id="productConfigFrame"]')) , 1000*30)
        .then((success)=>{
            console.log('++found iframe',success);
            driver.switchTo().frame(0).then(success=>{
                driver.wait(webdriver.until.elementLocated(webdriver.By.css('input[id="addToCartBtnTop"]')) , 1000*30)
                .then(success=>{
                    console.log('++found button',success);
                    driver.findElement(webdriver.By.css('input[id="addToCartBtnTop"]')).getAttribute("value")
                    .then((message)=>{
                        driver.quit();
                        console.log(message);       
                    });
                }
                ,(reason)=>{
                    // do nothing
                    console.log(reason);
                    driver.quit();
                });
            });
        }
        ,(reason)=>{
            // do nothing
            console.log(reason);
            driver.quit();
        });
    }
}