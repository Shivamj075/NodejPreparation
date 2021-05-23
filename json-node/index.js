const fs = require("fs");

const bioData = {
    name: "Shivam",
    age: 26,
    university: "LPU",
};

// obj to json
const jsonData = JSON.stringify(bioData);

// write it to another file
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
});
// json to obj
// const objData = JSON.parse(jsonData);
// console.log(objData);


// read from json file
fs.readFile("json1.json", "utf-8", (err, data) => {
    const objData = JSON.parse(data);
    console.log(objData);
});



