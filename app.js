
const logger = require("./logger.js");
const path = require('path');
const os = require('os');
logger("Treek");

var pathObj = path.parse(__filename);

console.log(pathObj);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(totalMemory);
console.log(freeMemory);