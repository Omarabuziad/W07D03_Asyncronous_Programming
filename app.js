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
        if (err){ throw err};
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






const getPostAsync = async (data) => {
    // TODO: Your code here
    try{
    const response =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}/`)
    console.log(response.data);
  } catch (err){
    throw err;
  };

};














// practice 

//1


const appendToFile = (data) => {
  // TODO: Your code here

  fs.appendFile('data.txt', ("\n" + data) , (err) => {
    if (err) {throw err};
    console.log('The "data to append" was appended to file!');
  });


};

//2

const copyFile = (fileName) => {
  // TODO: Your code here
  fs.copyFile("data.txt" , fileName , (err) => {
    if (err) {throw err};
    console.log('the file has been copied');
  });

}

//3

const post = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript ",
  // the id of the user who is going to create the post
  userId: 1,
});



const createPost = (post) => {
  // TODO: Your code here
  axios.post("https://jsonplaceholder.typicode.com/posts" , post )
  .then((response) => {
    console.log(response.data);
  })
  // in `.catch()` we add the code to handel the error
 .catch((err) => {
    throw err;
  });



};


//4

const newPost = JSON.stringify({
  // the post id that we want to update, change it when trying to update another post
  id: 1,
  title: "Updated Title",
  body: "Updated body",
  userId: 1,
});

const updatePost = (postId, data) => {
  // TODO: Your code here
  axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}/` , data )
  .then((response) => {
    console.log(response);
  })
  // in `.catch()` we add the code to handel the error
 .catch((err) => {
    throw err;
  });

};


//5

let users
const getUsers = async () => {
  // TODO: Your code here
  try{
    const response =  await axios.get(`https://jsonplaceholder.typicode.com/users`)
    console.log(response.data);
    
  } catch (err){
    throw err;
  };

};

getUsers()


//6

const saveUsers = () => {
  // TODO: Your code here
  fs.writeFile("users.txt" ,"" , (err) => {
    if (err) {throw err};
    console.log('the file has been copied');
  });

  fs.appendFile('users.txt', users , (err) => {
    if (err) {throw err};
    console.log('The "data to append" was appended to file!');
  });


};






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
