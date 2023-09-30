const http = require("http");
// const { hostname } = require("os");

const PORT = 5000;
const hostname = "localhost ";

const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Node Server created by Vinay Vishwakarma');
});

// server.listen(5000);
// console.log("Server is runnig at port 5000");

server.listen(PORT, () => {
      console.log(`Server Running at ${hostname}${PORT}`);   
});