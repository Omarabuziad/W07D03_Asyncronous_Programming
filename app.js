const express = require("express");
const fs = require("fs");
const axios = require("axios");
const app = express();
const port = 2500;

// a middleware that enables us to read the received JSON data
app.use(express.json());



const readFile = () => {
    // TODO: Your code here
    fs.readFile("data.txt" , (err , data) => {
        if(err) {throw err } 
        else { console.log("Data" , data.toString() )}
    })
};

readFile()



const writeFile = () => {
    // TODO: Your code here
    fs.writeFile("text.txt", "A new file has been created", (err) => {
        if (err) throw err;
        console.log("The file has been saved");
    });
    
    
};


writeFile()












app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




