var mysql = require('mysql');

var express=require('express');

var app=express();

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'wp'
});

app.post('/',(req,res)=>{
pool.query('SELECT * from wp_posts', function (error, results, fields) {
  res.send(results);
});
});

app.listen('8000',()=>{
	console.log('port started at 5000');
})