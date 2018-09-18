
const logger = require("./logger.js");
const path = require('path');
const os = require('os');
const fs = require('fs');
// calls out the eventEmitter class
const EventEmitter = require('events');
// building a web server http


const files = fs.readdirSync('./',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result', files);
});
