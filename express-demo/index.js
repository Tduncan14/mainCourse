// downloading the module express
const express = require('express');
 // storing the express instance in a variable
const app=express();

const courses = [
{
    id:1,name:'course1'
},
{id: 2, name:'course2'},
{id: 3, name:'course3'}
];
// http post request and endpoint gives out a listener
// needs a route location then a call back function the event handler//does things
app.get("/",function(req,res) {

    res.send('Hello World!!!');

});
// creating another route
app.get('/api/courses', function(req,res) {
    res.send(courses);
});
// adding a parameter with an id
app.get('/api/courses/:id', function(req,res){
    // to read the parameter
   res.send(req.param,s);

});
// endport should be like this /api/courses/1

// now to create the app listener
// for hosting sites we need hosting variable PORT
 const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}`));