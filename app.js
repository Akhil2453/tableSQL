var sql = require('mysql');
var http = require('http');
var express = require('express');
var app = express();
var bParser = require('body-parser');
var fs = require('fs');

http.createServer(function(req, res){
	fs.readFile('index.html', function(err, data){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);



var conn = sql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '@khil24Menon',
	database : 'tacto'
});

conn.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
});

// app.get("/", function(req, res){
// 	conn.query('SELECT * FROM assign LIMIT 2', function(err, rows, fields){
// 		conn.end();
// 		if(!err){
// 			console.log('The solution is: ', rows);
// 		} else {
// 			console.log('Error while performing query.');
// 		}
// 	});
// });

// app.listen(3000);