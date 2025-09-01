// CS55-13-Fall-2025-Week-02
//  web server using node.js http package
const myhttp = require("http");
const fs = require("fs").promises;
const requestListener = function( myrequest, myresponse ) {
    console.log( myrequest.url );

    if ( myrequest.url === '/' ) {
        // if request url is root, return html file
        fs.readFile(__dirname + "/page.html")
            .then(
                contents => {
                    myresponse.setHeader("Content-Type", "text/html; charset=UTF-8");
                    myresponse.writeHead(200);
                    myresponse.end(contents);
                }
            );
    } else {
        // if request url is NOT root, return json file
        fs.readFile(__dirname + "/data.json")
            .then(
                contents => {
                    myresponse.setHeader("Content-Type", "application/json; charset=UTF-8");
                    myresponse.writeHead(200);
                    myresponse.end(contents);
                }
            );
    }

};

// create a web server object
let myserver = myhttp.createServer(
    // createServer() uses our function to run when a request comes in
    requestListener
);
// http://127.0.0.1:5500/
myserver.listen( 5500, "127.0.0.1" );