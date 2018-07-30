const express = require('express');
const app = express();
const PORT = process.evn.PORT || 8080;

app.get("/", function(req, res){
    res.end("Hello World")
});

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
}); 
