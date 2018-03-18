import Story from "./story.mjs";

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
    }
}