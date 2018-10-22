// Require File System module
const fs = require('fs');

// Require css-selector-extract
const cssSelectorExtract = require('css-selector-extract');

// Set the options
const options = {
    // CSS source code as string.
    css: fs.readFileSync('../css/bulma-multiselect.css', { encoding: `utf8` }),
    // Array of selectors which should get extracted.
    filters: [/multiselect/]
};

// Remove comments
const commentRegex = new RegExp(`\/*((?!\\*/).|\\n)+\\*\/`, 'g');
const extractedCss = cssSelectorExtract.processSync(options).replace(commentRegex, "");

// Save extracted CSS back to file
fs.writeFile("../css/bulma-multiselect.css", extractedCss, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Extracted CSS successfully!");
});
