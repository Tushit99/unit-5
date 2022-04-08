// // if I have to chose the other path/ file to give result ==> entry 

const path = require("path")

module.exports = {
    entry : "./src/index.js" ,    
   output : {  
        path : path.resolve(".","build"),  // // it chose folder  
        filename: "bundle.js"   // // // it selects file/filename   
    },
    // // to avoid the warning .    
    mode : "development" , 
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader","css-loader" ]},
        // {test: /\.(jpe?g|png|svg)$/, use:[{
        //     loader: "url-loader",
        //     option: {
        //         limit: 5000 
        //     }
        // }]}
],
      },
}; 
    
