const http = require('http'); // http://localhost:3002/
const router = require('./router');

const port = 3002;
const app = http.createServer(router);

app.listen(port);
console.log(`Server running on port number: ${port}`);
