const http = require("http");

const server = http.createServer((req, res) => {
    const user = [{ id: 1, name: "alice" }];

    if (req.url === "/") {
        res.write("main page");
    } else if (req.url === "/about") {
        res.write(JSON.stringify(user));
    }

    res.end(); 
});

const port = 5001;
server.listen(port, () => {
    console.log("server started on port", port);
});