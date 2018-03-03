const express = require("express");

const App = express();


App.use(express.static(__dirname + "/build")); 

App.get("/*", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})
 

App.listen(8080, () => console.log("server listenin from port 8080"));
