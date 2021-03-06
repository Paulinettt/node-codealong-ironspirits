const express = require('express'); //require the package express/store in variable

const app = express();

app.use(express.static('public'));



app.get("/about", (req, res, next) => {        //tell to express: whenever you receive a get request, execute this code
console.log("request about received") 

res.sendFile(__dirname + '/views/about.html');

});


app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html');
});


app.listen(3001, () => {
    console.log ("server listening to requests")
});
