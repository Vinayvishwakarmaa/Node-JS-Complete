const path = require("path");

// console.log(path.sep); /** \ window*/
// console.log("path",process.env.PATH)

// console.log(path.delimiter); /** ; */

// const filePath1 = "/public/html/home/css/index.js";

// const currentFilePath = __filename;
// console.log(currentFilePath); /** index.js */
// console.log(__dirname); /** c:\Users\dell\Desktop\NodeJS\Path Module */

// let basename = path.basename(currentFilePath); /** index.js */
// console.log(basename);

// let basenameWithoutExt = path.basename(currentFilePath, ".js");
// console.log(basenameWithoutExt); /** index */

// let dirname = path.dirname(currentFilePath);
// console.log("dirname > ", dirname); /** NodeJS\Path Module */

// console.log("ext > ", path.extname(currentFilePath)); /** .js */
// console.log("ext 1", path.extname("index.md.home.js")); /** .js */

// let pathToFile = path.format({
//   dir: "public/html/home/css/index",
//   base: "index.cpp",
// });

// console.log(pathToFile); /** comebine > public/html/home/css/index\index.cpp */

// console.log("IsAbsolute", path.isAbsolute(currentFilePath));
// console.log("IsAbsolute", path.isAbsolute("/index.js"));
// console.log("IsAbsolute", path.isAbsolute("./index.js"));
// console.log("IsAbsolute", path.isAbsolute("../index.js"));

// let pathToDir = path.join("/home", "js", "css", "cpp", "index.cpp");
// console.log(pathToDir); /** Join > \home\js\css\cpp\index.cpp */

// console.log("parse > ", path.parse(currentFilePath));

// console.log("relative path", path.relative("/home/user/css/config", "/home/index/user/js")); /** relative path ..\..\..\index\user\js */

// console.log("resolve > ", path.resolve()); /** NodeJS */

// console.log("normalize >", path.normalize('//node//user//cpp')); /** Single Slace Convert \\node\user\cpp  */