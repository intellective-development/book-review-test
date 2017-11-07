// Created By :  Diori Pazaj
// Created with the purpose to fetch the data from goodreads API

var request = require('request');
var parser = require('xml2json');
var path = require('path');
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/search/:keyword', function(req, res){

	//res.end(req.query.keyword);

	var options = {
		url: 'https://www.goodreads.com/search/index.xml?page=1&key=RDfV4oPehM6jNhxfNQzzQ&q='+req.params.keyword,
	};


	request(options, function (error, response, body) {
		var json = parser.toJson(body);
		res.end(json);
	});

});

app.listen(3000, function() {
	console.log('App listening on port 3000!')
});
