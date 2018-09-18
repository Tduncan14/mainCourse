
const logger = require("./logger.js");
const path = require('path');
const os = require('os');
const fs = require('fs');

logger("Treek");

var pathObj = path.parse(__filename);

console.log(pathObj);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

const files = fs.readdirSync('./',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result', files);
});
console.log(files);

console.log('Total Memory: ${totalMemory}')