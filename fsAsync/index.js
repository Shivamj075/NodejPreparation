const fs = require("fs");

// fs.writeFile("read.txt", "This is testing", (err) => {
//     console.log("files is created!!");
//     console.log(err);
// });


// fs.appendFile("read.txt", "append extra data o existing one", (err) => {
//     console.log(err);
// });

fs.readFile("read.txt", "UTF-8", (err, data) => {
    console.log(data);
});



