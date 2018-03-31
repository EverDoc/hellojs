# Review for Yang Xue

## Comments

Everything looks good. Just suggest that wrapp the same logic into a function, see below

```javascript

    // the following lines looks having the same logic which extract the words from a string in specific format [...]

    // extract username and password from [admin]
    let left=message.indexOf("[");
    let right=message.indexOf("]");
    let value=message.substr(left+1, right-left-1);

    // extract expected result [successful!]
    const left2=message.indexOf("[");
    const right2=message.indexOf("]");
    const value2=message.substr(left2+1, right2-left2-1); 

    // Suggest make a function

    // 1. from Wang Qi
    getValue(message){
        let value="";
        let idx1=message.indexOf("[");
        let idx2=message.indexOf("]");
        value= message.substr(idx1+1,idx2-idx1-1);
        return value;
    }
    // 2. from Xu Hong Wang
    SubStringParameter(param) {
        const key = param.substr(param.indexOf("[") + 1, param.indexOf("]") - param.indexOf("[") - 1);
        return key;
    }

```