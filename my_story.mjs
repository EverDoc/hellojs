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
        driver.get('https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E8%B0%A2%E8%B0%A2&step_word=&hs=2&pn=4&spn=0&di=91665958120&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3833472229%2C4143365380&os=2326338435%2C2679782871&simid=15304628%2C709204463&adpicid=0&lpn=0&ln=1956&fr=&fmq=1521362005792_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201412%2F16%2F20141216174523_khNYh.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Frj5rsjAzdH3F4ks52AzdH3Fdmcm9dlmmAzdH3F1jpwtsAzdH3F&gsm=0&rpstart=0&rpnum=0');
        // driver.findElement(webdriver.By.id('kw')).sendKeys('webdriver');
        // driver.findElement(webdriver.By.id('su')).click();
        driver.wait(webdriver.until.titleIs('webdriver_百度搜索'), 1000*30);
        // driver.quit();        
    }
}