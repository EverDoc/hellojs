# Review for Zhao Lei

## Comments

Everything looks good. Just suggest that wrapp the same logic into a function, which is convenience for refactoring

```javascript

    // the following lines looks having the same logic which extract the words from a string in specific format [...]

    // extract username and password from [admin]
    let start= strString.indexOf("[");
    let end=strString.indexOf("]");
    let strLength=end-start-1;
    this.username=strString.substr(start+1,strLength);

    // extract username and password from [taylor2018]
    let strString=leftMessage;
    let start= strString.indexOf("[");
    let end=strString.indexOf("]");
    let strLength=end-start-1;
    this.password=strString.substr(start+1,strLength);

    // extract expected result [successful!]
    let strString=leftMessage;
    let start= strString.indexOf("[");
    let end=strString.indexOf("]");
    let strLength=end-start-1;
    this.expected=strString.substr(start+1,strLength);

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