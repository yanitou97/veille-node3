const http = require("http");
http.createServer((request, response) =>
{ 
    response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"})
    response.write('<!DOCTYPE "html">');
    response.write('<html>');
        response.write('<head>');
            response.write('<title>Exercice 3</title>');
            response.write('<style>td{border-style: solid;}</style>');
        response.write('</head>');
        response.write('<body>');
            response.write('<h1>Exercice 3</h1>');
            const fs = require("fs");
            let data = fs.readFileSync('json.json');
            let obj = JSON.parse(data);
        let html = '<table><tr><td>Acronyme</td><td>Province</td></tr>';
        var trace = '';
        for (var p in obj) { 
            html += '<tr><td>'+ p + '</td><td>' + obj[p] + '</td></tr>';
        }
        html += '</table>'
        response.write(html);
        response.write('</body>');
    response.write('</html>');
    response.end(); 
}).listen(3000);