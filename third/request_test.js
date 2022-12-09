let finalResponse = "";
const request = required("http").request(
    {
        hostname:  "www.some_remote_system.com",
        port:80,
        path: "/someApi",
        method: "POST"
    },
    (inResponse) =>{
        console.log(`STATUS: $(inResponse.statusCode`);
        inResponse.setEncoding("utf8");
        inResponse.on("data", (inDataChunk)=>{
            finalResponse += inDataChunk
        });
        inResponse.on("end", ()=>{
            console.log(finalResponse);
        })
    }
)