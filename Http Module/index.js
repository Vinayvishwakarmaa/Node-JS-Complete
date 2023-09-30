const http = require("http");

const server = http.createServer((req, res) => {
      if (req.url == '/') {
            res.write("<h1>Hello NodeJS!</h1>");
      } else if (req.url == '/about') {
            res.write("<h1>Hello About!</h1>");
      } else if (req.url == '/contact') {
            res.write("Contact Page!");
      }
      res.end();
})

server.listen(5000);
console.log("The http server is runnig on port 5000");
