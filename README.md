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
