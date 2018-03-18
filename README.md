# HelloJs

<!-- TOC -->

- [HelloJs](#hellojs)
    - [Pre-requesite](#pre-requesite)
    - [Presentation](#presentation)

<!-- /TOC -->

## Pre-requesite

- Nodejs
- Git
- Visual Studio Code

## Presentation

1. ### Create project folder `helljs`

1. ### Init a git repository

   ```bash
   git init

   Initialized empty Git repository in <root>/hellojs/.git/
   # Note: the comand pormpt appended a state '(master)'
   # which means the git repository initialized successfull
   # and the current branch being working on is master, which is the default branch usually
   # 1. git managers the source code wihtin a folder, locate the working folder to see the git repository.
   # 2. the git repository .git defaults to hidden, and not able to see in the file trees of VS-code either
   # 3. don't touch it

   # First of all to config user name and email in local
   git config --local user.email "baikangwang@hotmail.com"
   git config --local user.name "baikangwang"
   ```

1. ### Playground in Node

    - `Note: <https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics>`
    - `node`

    1. Variable & **let**

        ```javascript
        // the variable naming is sensetive-case, myVar and mYvar is different
        let myVar=1;

        // output variable
        myVar

        console.log(myVar)
        ```

    1. Data Type

        |  Type   |                                         Description                                         |
        | ------- | ------------------------------------------------------------------------------------------ |
        | String  | 字符串，一段文本。 要指示变量是字符串，你应该将它们用引号包裹起来。                        |
        | Number  | 数字，一个数字。不用引号包围。                                                             |
        | Boolean | 布尔型，一个 True/False （真 / 假）值。 true/false 是 JS 里的特殊关键字，不需要引号。      |
        | Array   | 数组，一种允许你存储多个值在一个引用里的结构。                                             |
        | Object  | 对象，基本上 JavaScript 里的任何东西都是对象，而且都可以被储存在变量里。将这个记在脑子里。 |

        ```javascript
        // String
        let name = 'bob';

        // Number
        let age = 30;

        // Boolean
        let employed = true

        // Array
        let location = [11,4,1] // position #1 row #4 build #11

        // Object
        let people = {name:name, age:age, employed=employed, location:location};
        ```
    1. Operator

        | Symbol |  Operator  |                              Description                               |
        | ------ | ---------- | ---------------------------------------------------------------------- |
        | +      | 加，连接   | 用来相加两个数字，或者连接两个字符串。                                 |
        | -<br>*<br>/  | 减，乘，除 | 这些运算符操作将与你期望它们在基础数学中所做的一样。                   |
        | =      | 赋值运算符 | 它将一个值赋给一个变量                                                 |
        | ===    | 相等       | 它将测试两个值是否相等，而且会返回一个 true/false （布尔型）值。       |
        | !<br>!==  | 非，不等   | 经常与相等运算一起使用，非运算符在JS中表示逻辑非——它也返回一个布尔值。 |

        ```javascript
        let mary={name:'mary',age:30,employed:true,location:[11,5,2]};
        let peter={name:'peter',age:30,employed:true,location:[11,4,3]};
        // +
        'Hello! '+ mary.name + ', '+peter.name;
        // note: new syntax in es6
        `Hello! ${mary.name}, ${peter.name}`;
        mary.age+peter.age

        // -, *, /
        mary.age*2
        peter.age-mary.age
        peter.age/3

        // =
        both_empoyed=mary.employed && peter.employed

        // ===
        mary.age === peter.age

        // !,!==
        !peter.employed
        mary.name !== peter.name
        ```
1. ### Story in javascript

    Rebbit Mom asks rebbit baby open the door.
    1. Create story.js, it's an old story, Rabbit Mom Ask baby open the door
        ```javascript
        // The Rabbit Mom stands in the front of the door
        // Asks the baby "Open the door"
        // And say "I am Mom"
        // The rabbit baby opens the door
        let given="Given: stand in the front of the door";
        let when1="When: ask Open the door";
        let when2="When: I am Mom";
        let then = "Then: open the door";
        ```
        ```bash
        # commit
        git add . && git commit -m "initial story"
        ```
    1. How to outline the story completely - **for**
        ```bash
        # new branch for
        git branch for
        git checkout for
        # or quick command
        git checkout -b for
        ```
        ```javascript
        let arrStory = [given,when1,when2,then];

        console.log("control-flow: for")
        for (let index = 0; index < arrStory.length; index++) {
            const strStory = arrStory[index];
            console.log(strStory);
        }
        ```
        ```bash
        # run the code in command
        node story.js
        ```
        ```bash
        # commit
        git add . && git commit -m "complete for"
        ```
    1. How to outline the story completely - **while**
        ```bash
        # switch to the master to clean up code
        git checkout master
        # create new branch for while
        git checkout -b while
        ```
        ```javascript
        let arrStory=[given,when1,when2,then];

        console.log("control-flow: while")
        for (let index = 0; index < arrStory.length; index++) {
            const strStory = arrStory[index];
            console.log(strStory);
        }
        ```
        ```bash
        # Debug in node
        # 1. Add configuration
        # 2. Launch in debug mode
        # 3. See the output
        ```
        ```bash
        # commit
        git add . && git commit -m "complete while"
        ```
    1. **if, else**
        ```bash
        # base on the for branch
        git checkout for
        git checkout -b if-else
        ```
        ```javscript
        let arrStory=[given,when1,when2,then];

        console.log("control-flow: if-else")
        for (let index = 0; index < arrStory.length; index++) {
            const strStory = arrStory[index];
            const key=strStory.substr(0,strStory.indexOf(":"));
            if(key ==="Given"){
                console.log(`It's a given: ${strStory.substr(strStory.indexOf(":")+1)}`);
            }else if(key === "When"){
                console.log(`It's a when: ${strStory.substr(strStory.indexOf(":")+1)}`);
            }else{
                console.log(`It's a ${key}: ${strStory.substr(strStory.indexOf(":")+1)}`);
            }
        }
        ```
        ```bash
        # run code
        ```
        ```bash
        # commit
        git add . && git commit -m "complete if-else"
        ```
    1. **switch**
        ```bash
        # base on the if-else branch
        git checkout -b switch
        ```
        ```javscript
        let arrStory=[given,when1,when2,then];

        console.log("control-flow: switch")
        for (let index = 0; index < arrStory.length; index++) {
            const strStory = arrStory[index];
            const key=strStory.substr(0,strStory.indexOf(":"));
            switch (key) {
                case "Given":
                    console.log(`It's a given: ${strStory.substr(strStory.indexOf(":")+1)}`);
                    break;
                case "When":
                    console.log(`It's a when: ${strStory.substr(strStory.indexOf(":")+1)}`);
                    break;
                case "Then":
                default:
                    console.log(`It's a ${key}: ${strStory.substr(strStory.indexOf(":")+1)}`);
                    break;
            }
        }
        ```
        ```bash
        # run code
        ```
        ```bash
        # commit
        git add . && git commit -m "complete if-else"
        ```
    1. Best Practice - **if**
        ```bash
        git checkout if
        git checkout -b best-practice-if
        ```
        ```javascript
        // best practice
        console.log("best practice - if")
        for (let index = 0; index < arrStory.length; index++) {
            const strStory = arrStory[index];
            const key=strStory.substr(0,strStory.indexOf(":"));
            if(key ==="Given")  console.log(`It's a given: ${strStory.substr(strStory.indexOf(":")+1)}`);
            if(key === "When")  console.log(`It's a when: ${strStory.substr(strStory.indexOf(":")+1)}`);
            if(key === "Then")  console.log(`It's a ${key}: ${strStory.substr(strStory.indexOf(":")+1)}`);
        }
        ```
        ```bash
        # run code & commit code
        ```
    1. **function**
        ```bash
        git checkout switch
        git checkout -b function
        ```
        ```javascript
        console.log("control-flow: function")
        for (let index = 0; index < arrStory.length; index++) {
            const strStory = arrStory[index];
            const key=strStory.substr(0,strStory.indexOf(":"));
            const message=strStory.substr(strStory.indexOf(":")+1);
            switch (key) {
                case "Given":
                    Given(message);
                    break;
                case "When":
                    When(message);
                    break;
                case "Then":
                    Then(message);
                    break;
                default:
                    event(key,message);
                    break;
            }
        }

        function Given(message) {
            // console.log(`It's a given: ${message}`);
            event("given",message);
        }

        function When(message){
            // console.log(`It's a when: ${message}`);
            event("when",message);
        }

        function Then(message){
            // console.log(`It's a then: ${message}`);
            event("then",message);
        }

        function event(event,message){
            console.log(`It's a ${event}: ${message}`);
        }
        ```
        ```bash
        # run and commit
        ```
        ```bash
        git checkout -b class
        ```
    1. **class**
        ```bash
        git checkout -b class
        ```
        ```javascript
        // story.mjs
        export default class Story{
            constructor(content){
                this.content=content;
            }

            Given(context) {
                // console.log(`It's a given: ${message}`);
                this.event("given",context);
            }

            When(context){
                // console.log(`It's a when: ${message}`);
                this.event("when",context);
            }

            Then(context){
                // console.log(`It's a then: ${message}`);
                this.event("then",context);
            }

            event(event,context){
                console.log(`It's a ${event}: ${context}`);
            }

            Play(){
                console.log(this.content);
                for (let index = 0; index < this.content.length; index++) {
                    const strContent = this.content[index];
                    const key=strContent.substr(0,strContent.indexOf(":"));
                    const message=strContent.substr(strContent.indexOf(":")+1);
                    switch (key) {
                        case "Given":
                            this.Given(message);
                            break;
                        case "When":
                            this.When(message);
                            break;
                        case "Then":
                            this.Then(message);
                            break;
                        default:
                            this.event(key,message);
                            break;
                    }
                }
            }
        }
        // open_door.mjs
        import Story from  "./story.mjs";

        // The Rabbit Mom stands in the front of the door
        // Asks the baby "Open the door"
        // And say "I am Mom"
        // The rabbit baby opens the door
        let given="Given: stand in the front of the door";
        let when1="When: ask Open the door";
        let when2="When: say I am Mom";
        let then = "Then: open the door";

        let arrStory=[given,when1,when2,then];
        let objStory=new Story(arrStory);
        objStory.Play();
        ```
        ```json
        // launch.json
        {
            // Use IntelliSense to learn about possible attributes.
            // Hover to view descriptions of existing attributes.
            // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "node",
                    "request": "launch",
                    "name": "Launch Program",
                    "program": "${workspaceFolder}/open_door.mjs",
                    "runtimeArgs": [
                        "--experimental-modules"
                    ]
                }
            ]
        }
        ```
        ```bash
        # run and commit
        ```
    1. **extens, super**
        ```bash
        git checkout -b class-extens
        ```
        ```javascript
        // my_story.mjs
        import Story from "./story.mjs";

        export default class MyStory extends Story{

            Given(context){
                super.Given(context);
            }

            When(context){
                super.When(context);
                if(context===" ask Open the door")  this.event("question","Who are you?");
                if(context===" say I am Mom")       this.event("question","Mom is back!");
            }

            Then(context){
                super.Then(context);
            }
        }
        // open_door.mjs
        import MyStory from "./my_story.mjs";

        // The Rabbit Mom stands in the front of the door
        // Asks the baby "Open the door"
        // And say "I am Mom"
        // The rabbit baby opens the door
        let given="Given: stand in the front of the door";
        let when1="When: ask Open the door";
        let when2="When: say I am Mom";
        let then = "Then: open the door";

        let arrStory=[given,when1,when2,then];
        let objStory=new MyStory(arrStory);
        objStory.Play();
        ```
        ```bash
        # run and commit
        ```
    1. regular expression
        ```bash
        git checkout -b reg-exp
        ```
        ```javascript
        // my_story.mjs
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
        ```
        ```bash
        # run and commit
        ```
