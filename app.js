const express = require("express");
const port = process.env.port || 3000;


const app = express();

app.use(express.static(__dirname+"/public"));

app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html")
})



app.listen(port,function(){
    console.log("Server is running on "+ port)
})