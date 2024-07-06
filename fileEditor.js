const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

if (!operation || !file) {
  console.log("Usage: node script.js <operation> <file> [content]");
  console.log("Operations: read, delete, create, append, rename, list");
  process.exit(1);
}

switch (operation) {
  case 'read':
    readFile(file);
    break;

  case 'delete':
    deleteFile(file);
    break;

  case 'create':
    createFile(file);
    break;

  case 'append':
    if (!content) {
      console.log("Content to append is required for the append operation.");
      process.exit(1);
    }
    appendFile(file, content);
    break;

  case 'rename':
    if (!content) {
      console.log("New file name is required for the rename operation.");
      process.exit(1);
    }
    renameFile(file, content);
    break;

  case 'list':
    listFiles(file);
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file '${filePath}':`, err.message);
    } else {
      console.log(`Contents of '${filePath}':\n${data}`);
    }
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file '${filePath}':`, err.message);
    } else {
      console.log(`File '${filePath}' deleted`);
    }
  });
}

function createFile(filePath) {
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error(`Error creating file '${filePath}':`, err.message);
    } else {
      console.log(`File '${filePath}' created`);
    }
  });
}

function appendFile(filePath, content) {
  fs.appendFile(filePath, content + '\n', (err) => {
    if (err) {
      console.error(`Error appending to file '${filePath}':`, err.message);
    } else {
      console.log(`Content appended to the file '${filePath}'`);
    }
  });
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

function listFiles(directory) {
  fs.stat(directory, (err, stats) => {
    if (err) {
      console.error(`Error checking directory '${directory}':`, err.message);
      return;
    }
    if (!stats.isDirectory()) {
      console.error(`'${directory}' is not a directory`);
      return;
    }
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
  });
}
