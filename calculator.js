const express = require('express');
const app = express();
const port = (3000);

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
});

app.get('/', function(req, res){
  res.send('<h1>Hello World!</h1>')
})
