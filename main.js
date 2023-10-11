

var fs = require('fs');
var http = require('http');
var url = require('url');

var app = http.createServer((request, response)=>{
    var _url = request.url;
    var fileName = url.parse(_url, false).pathname;

    // if(fileName === '/Gallery.html'){
    //     let galleryHTML = fs.readFileSync(__dirname + fileName,'utf8');
    //     let newDoc = Document.createElement('div');
    //     newDoc.innerHTML = galleryHTML;
    //     console.log(newDoc.querySelect('.gallery-container'));

    //     response.end(fs.readFileSync(__dirname + fileName));
    // }else{
    //     response.end(fs.readFileSync(__dirname + fileName));
    // }
    console.log(decodeURI(fileName));
    response.end(fs.readFileSync(__dirname + decodeURI(fileName)));
});

app.listen(3000);