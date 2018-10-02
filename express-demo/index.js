// downloading the module express
const express = require('express');
 // storing the express instance in a variable
const app=express();
// to parse and read through json
// returns a middleware through a pipeline
app.use(express.json());

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
 const course=courses.find(c => c.id === parseInt(req.params.id));
  if(!course) {res.status(404).send("The course witht the given id is not found.")
  return;}
 
   res.send(course);
   
   // creates and updates
   app.post('/api/courses', (req,res) => {

    //creating input validation
    if(!req.body.name || req.body.name.length <3){
        // status code 400 means Bad request
        res.status(400).send('Name is required and should be minimum 3 characters');
    }
    
     const course = {
        id: courses.length + 1,
        // is a json object so you will need to parse it
        name: req.body.name
     };
     // pushes the object in the array
     courses.push(course);
     // onces the server creates a new object or resource you should post it to the body
     res.send(course);
   });




 // to parse a string into an integer parseInt
});
// endport should be like this /api/courses/1

// now to create the app listener
// for hosting sites we need hosting variable PORT
 const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}`));