// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     console.log(req.url);

//     res.end('Hello World\n');
// }).listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:3000/');

const express = require('express');
const port = process.argv[2] || 3000;
const app = express();

app.get('/', function (req, res) {
  res.send('Ceci est la route par défaut, qui répond à l\'url \/');
});

app.listen(port, () => console.log(`TEST Server running at http://127.0.0.1:${port}`));
