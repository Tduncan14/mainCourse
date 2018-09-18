
const logger = require("./logger.js");
const path = require('path');
const os = require('os');
const fs = require('fs');
// calls out the eventEmitter class a blue print
const EventEmitter = require('events');
// building a web server http

// create an instance of the class
// this emitter is an object
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',function(arg){
 console.log('Listner called',arg);
});

// raises an event now you  a listener
emitter.emit('messageLogged',{id:1,url: 'http://'});
//raise an event =emitter.emit
// now you need to call a listener that listens to the events.
//emitter.emit ('messageLogged');   emit means =actually making a noise,produce - signnalling event is happening
// passing an argument is the name of the event ,which is messaged logged

emitter.on('Logging', function(arg) {
    console.log('Treek you are an software engineer', arg );
});
// creagting an event called loggin and giving an id and data
emitter.emit('Logging' , {id:2, url:'http://'});
const files = fs.readdirSync('./',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result', files);
});
