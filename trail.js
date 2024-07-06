const fs = require('fs')
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case 'read ':
    readFile(file)
    break;

    case 'delete':
    deleteFile(file)
    break;

    case 'create':
    createFile(file)
    break;

    case 'append':
    appendFile(file)
    break;

    case 'rename':
     const newFileName=content   
    renameFile(file)
    break;

    case 'list':
    listFile(file)
    break;
    
  default:
    console.log(`Invalid operation '${operation}'`);
}

function readFile(filePath){
    fs.readFile(filePath, 'utf-8',(err,data)=>{
        if(err){
            console.error(`Error reading file ${filePath} : ${err.message}`)
        } else {
            console.log(`Contents of '${filePath}':\n${data}`);
        }

    })

}

function deleteFile(filePath){
    fs.unlink(filePath,(err)=>{
        if (err) {
            console.error(`Error deleting file${filePath} : ${err.message}`)
        } else{
            console.log(`File ${filePath} deleted`)
        }
    })

}

function createFile(filePath){
    fs.writeFile(filePath,'',(err)=>{
        if(err){
            console.log(`Error creating ${filePath} : ${err.message}`);
        }else{
            console.log(`File ${filePath} created`)
        }
    }) 
}

function appendFile(filePath,content) {
    fs.appendFile(filePath,content+'\n', (err)=>{
        if (err) {
            console.error(`Error appending to file '${filePath}':`, err.message);
          } else {
            console.log(`Content appended to the file '${filePath}'`);
          }

    })

}

function renameFile(oldPath, newPath) {
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error renaming file '${oldPath}' to '${newPath}':`, err.message);
      } else {
        console.log(`File '${oldPath}' renamed to '${newPath}'`);
      }
    });
  }

function renameFile(filePath){

}
function listFiles(directory) {
    fs.readdir(directory, (err, files) => {
      if (err) {
        console.error(`Error listing directory '${directory}':`, err.message);
      } else {
        console.log(`Contents of directory '${directory}':`);
        files.forEach(file => {
          console.log(file);
        });
      }
    });
  }

