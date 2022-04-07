var fs = require('fs');
const testFolder = './potla-poda-images/';
let inc=1;
inc++;


 fs.readdirSync(testFolder).forEach(file => {
     console.log(file);
  //  fs.rename(`${file}`, `dragon${inc}.png`, function (err) {
  //if (err) throw err;
//  console.log('File Renamed.');
 // }); 
 


let content = file;

fs.writeFile('sample_old.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

     
   });

