const express = require('express');
const app = express();
const PORT = 8080;

app.get("/", function(reg, res){
    res.send("Hello World")
});

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
}); 
