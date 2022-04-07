const testFolder = './potla-poda-images/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});