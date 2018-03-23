var sql = require('mysql');

var express = require('express');
var app = express();
var bParser = require('body-parser');
var fs = require('fs');

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

app.get("/", function(req, res){
	conn.query('SELECT * FROM assign LIMIT 2', function(err, rows, fields){
		conn.end();
		if(!err){
			console.log('The solution is: ', rows);
		} else {
			console.log('Error while performing query.');
		}
	});
});

app.listen(3000);