const fs = require('fs');
const array = []; 

for (let i=1; i<=100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        array.push("BIGBANG");
    }
    else if (i % 3 === 0) {
        array.push("BIG");
    }
    else if (i % 5 === 0) {
        array.push("BANG");
    }
    else {
        array.push(i.toString());
    }
}

const jsonContent = JSON.stringify(array, null, 2);

fs.writeFile('output.json', jsonContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Array has been written to output.json');
    }
  });