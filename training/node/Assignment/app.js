var express = require('express');

var app = express();

app.set('view engine','ejs');

//static files
//app.use(express.static('./public'));

//todoController(app);
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});
var data = [{output: 'out'}];

app.get('/',function(req,res){
    
    //var data = {age: 21, job: 'Cloud', hobbies: ['eating','Reading']}
    
    res.render('index', {data: data});
}
);

app.post('/', urlencodedParser, function(req,res){
    data.push(req.body);
    res.json(data);
 });

 app.use(express.static('./assets'));

app.listen(3000);
console.log('Listning to port 3000');