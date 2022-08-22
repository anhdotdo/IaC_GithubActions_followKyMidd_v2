const express = require("express"); 

const app = express(); 

app.get("/", (req, res) => { 
  res.send("Have a good day! This is my first express app"); 
}); 

app.get("/me", (req, res) => { 
  res.send("Hi I am Anh Do"); 
}); 

app.listen(5000, () => { 
  console.log("listening"); 
}); 