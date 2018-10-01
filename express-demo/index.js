// downloading the module express
const express = require('express');
 // storing the express instance in a variable
const app=express();

// http post request and endpoint gives out a listener
// needs a route location then a call back function the event handler//does things
app.get("/",function(req,res) {

    res.send('Hello World!!!');

});
// creating another route
app.get('/api/courses', function(req,res) {
    res.send([1,2,3]);
})
// now to create the app listener
// for hosting sites we need hosting variable PORT
 const PORT = process.env.PORT || 3000;
app.listen(PORT,() => console.log("Listening on port 3000"));