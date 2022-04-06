// // if i have to chose the other path/ file to give result ==> entry 

const path = require("path")

module.exports = {
    entry : "./src/index.js" ,
   output : {  
        path : path.resolve(".","build"),  // // it chose folder  
        filename: "bundle.js"   // // // it selects file/filename   
    },
    // // to avoid the warning . 
    mode : "development" ,
}; 

