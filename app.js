const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
})

const PORT = 3001;
server.listen(PORT, () => {
    console.log("Server của bạn đang chạy ở cổng ", PORT);
})