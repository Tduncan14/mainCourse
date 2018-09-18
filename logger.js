
// is a class for the events and extending the events
const EventEmitter = require('events');

// creates an instance which an object



    console.log(__filename);
    console.log(__dirname);

    var url = 'http://mylogger.io/log';

// creating an constructor function to have all the capablities of the EventEmitter or module that is required use the extend
    class Logger  extends EventEmitter {
        // when the function inside a class... it become a function
        log(message) {
            // Send an Http Request
            console.log(message);
            // raises an event now you  a listener
        this.emit('messageLogged',{id:1,url: 'http://'});
        }
    }

function log(message) {
    // Send an Http Request
    console.log(message);
    // raises an event now you  a listener
emitter.emit('messageLogged',{id:1,url: 'http://'});
}


module.exports = Logger;

    