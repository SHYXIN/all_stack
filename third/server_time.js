require("http").createServer((inRequest, inResponse)=>{
    const requestModule = require("request")
    requestModule(
        "http://worldtimeapi.org/api/timezone/Asia/Shanghai",
        function(inErr, inResp, inBody){
            inResponse.end(
                `Hello from my first Node Web server: ${inBody}`
            );
        }
    )

}).listen(80);