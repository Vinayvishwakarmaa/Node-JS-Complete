const fs = require("fs");

// console.log("Read Start");
// // Asynchoronous way to read file
// fs.readFile('input.text', function (err, data) {
//       if (err) {
//             console.log("Error:", err);
//             return err
//       } else {
//             console.log("Data: ", data.toString());
//             console.log("Read End");
//             return data;
//       }
// });

// console.log("Other Stuff");

// synchrounous way to read

// let data = fs.readFileSync('input.text');
// console.log("Data: ", data.toString());
// console.log("Read Start");
// console.log("Other Stuff");

/******  Read Open + Read *******/

// const buf = new Buffer(1024);

// fs.open('input.text', 'r+', function (err, fd) {
//   if (err) {
//     console.log("Error is opening file", err);
//   }
//   console.log("File open successfully");

//  fs.read(fd, 0, buf.length, 0, function (er, bytes) {
//             if (er) {
//                   console.log("Error in reading file!");
//             }
//             console.log("Data: ",bytes)
//        });
      
// });


// fs.open('input.text', 'r+', function (err, fd) {
//       if (err) {
//             console.log("Error in opening file: ", err);
//       }
//       console.log("File open successfully");

//       fs.read(fd, buf,0, buf.length, 0, function (er, bytes) {
//             if (er) {
//                   console.log("Error in reading file!");
//             }
//             console.log("Data: ", bytes);
//             console.log("Data: ", buf.slice(0, bytes).toString());
//             fs.close(fd, function (err) {
//                   if (err) {
//                         console.log("Error in closing file:", err);
//                   } else {
//                         console.log("Successfully closing file");
//                   }
//             });
//        });
// });

 

// Write file

// fs.writeFile('input.text', 'PW Join Community', function (Err) {
//       if (Err) {
//             console.log("Error in writing file", Err);
//       } else {
//             console.log("Writing file open in successfully");
//       }
// });


// Append File

// fs.appendFile('input.text', ' Hey Whatsapp me', 'utf-8', function (Err) {
//       if (Err) {
//             console.log("Error in appending file: ", Err);
//       } else {
//             console.log("appending file open in successfully ");
//       }
// });


// deleting file
  
// fs.unlink('input.text', function (err) {
//       if (err) {
//             console.log("Error in deleting file");
//       } else {
//             console.log("successfully in deleting file");
//       }
// })