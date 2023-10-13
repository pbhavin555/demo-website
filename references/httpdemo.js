const http = require("http");

http.createServer((req, res) => {
    // Write response
  res.write("Hello World! This is a response from the server.");
  res.end();
})
.listen(5000, () => console.log("Server running..."));
