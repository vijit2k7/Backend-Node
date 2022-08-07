const http = require('http');
const { getHeapCodeStatistics } = require('v8');
const hostname = '0.0.0.0';
const port = 3500;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World from server');
},(err)=>{
    res.statusCode=500;
    res.end('Error recieved',err);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



