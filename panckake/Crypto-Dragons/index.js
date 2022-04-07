//const testFolder = './potla-poda-images/';

//const { readdirSync, rename } = require('fs');

// fs.readdirSync(testFolder).forEach(file => {
   // console.log(file);
// });

//const files = readdirSync(testFolder);

//files.forEach(file => {
//  const oldPath = `/${file}`;

  // lowercasing the filename
//  const newPath = `/${file.toLowerCase()}`;

  // Rename file
//  rename(
 //   oldPath,
  //  newPath,
//    err => console.log(err)
 // );
//  console.log("files");
//});



const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = "./Op/";

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);



// Loop through each file that was retrieved
files.forEach(file => rename(
  `/${file}`,
  `/${file.toLowerCase()}`,
  err => console.log(err)
  
  
));