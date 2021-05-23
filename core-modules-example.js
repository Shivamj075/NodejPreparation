//File System core modules
//Crud operaion in file using synchronous way

const fs = require('fs');

// create new file if not present
fs.writeFileSync("read.txt", "Hope you enjoy learning!!");


// rewrite old content to new
fs.writeFileSync("read.txt", "Hope you enjoy learning of nodejs!!");

// add data to existing file
fs.appendFileSync("read.txt", " Add new data for testing");

//read data from file --> always give buffer data
//Buffer is mainly used to store binary data

const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// for original data of file we need to convert it
const org_data = buf_data.toString();
console.log(org_data);

//Rename file
fs.renameSync("read.txt", "read1.txt");


//Delete a file
fs.unlinkSync("read1.txt");

//create direcory
fs.mkdirSync("test");

//delete directory
fs.rmdirSync("test");