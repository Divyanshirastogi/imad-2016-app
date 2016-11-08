var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config ={
    user : 'divyanshirastogi',
    database :	'divyanshirastogi',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password :process.env .DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));


var articles ={ };

function createTemplate (data) { }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('test-db', function (req,res) {
    //make a select request
    //return aresponse with a result
    pool.query('SELECT * 'FROM test', function (err, result) {
      if( err) {
          res.status(500).send(err.toString));
          } else {
             res.send(JSON.stringify(result)) ;
          }
    });
    });

var counter =0;
app.get('/counter',function (req,res){
    counter=counter+1;
    res.send(counter.toString l
});


var names=[];
app.get('/submit-name/:name',function(req.res){
    //get the name from the request
    var names=req.params.name;// to do
    
    names.push(name);
    //JSON:javascript object notation
    res.send(JSON.stringify(names));
});
app.get('/:articleName' , function (req,res) {
//articleName==article-one
//articles[articleName] =={} content object for article-one
var articleName = req.params.articleName;
res.send(createTemplate (articles[articleName] ));



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
