const fs = require('fs');

fileNames = fs.readdirSync("./build"); //files in build
srcFileNames = fs.readdirSync("./src/public"); //files in public

fileNames.forEach(function(currentValue,index){
  let item = fs.statSync("./build/" + currentValue);
  if(item.isFile()){ //if what's in the directory is a file
    fs.unlinkSync("./build/" + currentValue); //delete file
  }
  else{ //if a folder
    fs.rmdirSync("./build/" + currentValue, { recursive: true }); //delete folder+contents
  }
});

//creating subfolders
fs.mkdirSync("./build/images");
fs.mkdirSync("./build/css");
fs.mkdirSync("./build/js");

//copy files
srcFileNames.forEach(function(currentValue,index){
  // let item = fs.statSync("./src/public/" + currentValue);
  // if(item.isFile()){ //if what's in the directory is a file
  //   fs.copyFileSync("./src/public/" + currentValue, "./build/" + currentValue);
  // }
  //else{ //if a folder want to copy files inside folder
    innerFileNames = fs.readdirSync("./src/public/" + currentValue); //what files inside
    innerFileNames.forEach(function(currentValue2,index2){ //copy each inside file
      fs.copyFileSync("./src/public/" + currentValue + "/" + currentValue2, "./build/" + currentValue + "/" + currentValue2);
    });
  //}
});
