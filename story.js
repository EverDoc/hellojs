// The Rabbit Mom stands in the front of the door
// Asks the baby "Open the door"
// And say "I am Mom"
// The rabbit baby opens the door
let given="Given: stand in the front of the door";
let when1="When: ask Open the door";
let when2="When: say I am Mom";
let then = "Then: open the door";

let arrStory=[given,when1,when2,then];

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