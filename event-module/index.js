
const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("SayMyName", ()=> {
//     console.log("Your name is Shivam ::)");
// });

// event.emit("SayMyName");

event.on("CheckPage", (sc, msg) => {   //FUnction define
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("CheckPage", 200, "ok");  //Like funcion call