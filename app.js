const express = require("express");

const app = express();
const html_path = __dirname+"/html";

app.get("/", function (request, response) {
    response.sendFile(html_path + "/index.html");
})

app.get("/contact", function (request, response) {
    response.sendFile(html_path + "/contact.html");
})

app.get("/about", function (request, response) {
    response.sendFile(html_path + "/about.html");
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
});

