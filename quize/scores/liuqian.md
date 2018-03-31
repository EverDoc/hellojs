# Review for Liu Qian

## Comments

Everything looks good. Just suggest that wrapp the same logic into a function, which is convenience for refactoring

```javascript

    // the following lines looks having the same logic which extract the words from a string in specific format [...]

    // extract username and password from [admin]
    this.username=message.substring(message.indexOf("[")+1,message.indexOf("]"));
    this.password=message.substring(message.indexOf("[")+1,message.indexOf("]"));

    // extract expected result [successful!]
    this.expected=message.substring(message.indexOf("[")+1,message.indexOf("]"));

    // Suggest make a function
    // 1. optimized
    getValue(input){
        return input.substring(input.indexOf("[")+1,input.indexOf("]"));
    }

    // 2. from Wang Qi
    getValue(message){
        let value="";
        let idx1=message.indexOf("[");
        let idx2=message.indexOf("]");
        value= message.substr(idx1+1,idx2-idx1-1);
        return value;
    }
    // 3. from Xu Hong Wang
    SubStringParameter(param) {
        const key = param.substr(param.indexOf("[") + 1, param.indexOf("]") - param.indexOf("[") - 1);
        return key;
    }

```