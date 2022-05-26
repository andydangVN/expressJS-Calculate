const express = require('express');
const app = express();
const port = (3000);

// body-parser application
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
});

// route: / (home) is index.html
app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// get infor from form use method post
app.post('/', function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Result: " + result);
  console.log(req.body);
});
