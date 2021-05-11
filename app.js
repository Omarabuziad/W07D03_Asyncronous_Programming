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


const getPost = (id) => {
    // TODO: Your code here
 axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
 .then((response) => {
    console.log(response.data);
  })
  // in `.catch()` we add the code to handel the error
 .catch((err) => {
    throw err;
  });

};


getPost(5)



const getPostAsync = async (data) => {
    // TODO: Your code here
    try{
    const response =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}/`)
    console.log(response.data);
  } catch (err){
    throw err;
  };

};


getPostAsync(7)







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




