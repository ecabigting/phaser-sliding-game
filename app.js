const { createServer } = require("http");
const fs = require("fs");

const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  page = fs.readFileSync("./game.html");
  response.write(page);
  return response.end();
});

server.listen(3333);
