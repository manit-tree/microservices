var express = require("express");
var app = express();
var server = app.listen(process.env.PORT || 5000);

app.get("/*",  function(req,  res) {
    res.send("APP-1 is running...");
});

console.log("Server Running");
