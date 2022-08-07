const http = require('http');
const { getHeapCodeStatistics } = require('v8');
const hostname = '0.0.0.0';
const port = 4000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World from client');
},(err)=>{
    res.statusCode=400;
});
server.listen(port, hostname, () => {
  console.log(`Client running at http://${hostname}:${port}/`);
});