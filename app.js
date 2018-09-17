
const logger = require("./logger.js");
const path = require('path');

logger("Treek");

var pathObj = path.parse(__filename);

console.log(pathObj);