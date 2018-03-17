// The Rabbit Mom stands in the front of the door
// Asks the baby "Open the door"
// And say "I am Mom"
// The rabbit baby opens the door
let given="Given: stand in the front of the door";
let when1="When: ask Open the door";
let when2="When: say I am Mom";
let then = "Then: open the door";

let arrStory=[given,when1,when2,then];

console.log("control-flow: if")
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