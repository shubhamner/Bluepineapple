/*console.log('Hey');

setTimeout(function(){
    console.log("Three seconds \n have passed!");

},3000);
*/

/*
function callFunction(fun){
    fun();
   }
   
   var hello = function(){
       console.log('Hello world');
   }
   
   callFunction(hello);
*/

/*
   console.log(__dirname);
console.log(__filename);
*/

/*
var events = require('events');

var myEmmitter = new events.EventEmitter();

myEmmitter.on('anEvent',function(msg){
    console.log(msg);
});

myEmmitter.emit('anEvent','The event is absolutely emmited');

*/
/*


var stuff = require('./moduleexp.js');  


console.log(stuff.counter(['Hello','This is','Shubham']));
console.log(stuff.adder(5,6));
console.log(stuff.bi);
console.log(stuff.adder(stuff.bi,44));

*/


/*

// a function expression is made here.
var counter = function(arry){
    return 'The number of '+arry.length + '\n done!';
};

var adder = function(a,b){
    return 'On adding the two number it gives'+(a+b);
}

var pi = 3.1535;

module.exports.counter = counter ;
module.exports.adder = adder;
module.exports.bi = pi;

*/


/*

function write(){
    console.log('Woah! I just Invoked a function');
}
write();



var sayBye = function(){
    console.log('I just called a funcion expression,!');
}

sayBye();

*/

/*
  
var time = 0;
var timer = setInterval(function(){
    console.log(time+ ' seconds have passed');
    time += 2;
    if(time > 8){
        clearInterval(timer);
    }
},2000);

  */


  /*
// Adding the required Modules

var events = require('events');
var util = require('util');
// creating a function Person

var Person = function(name){

    this.name = name;
}

// From the module util, we are inheriting the from events.EventEmitter
util.inherits(Person,events.EventEmitter);

var james = new Person('shubham');
var saif = new Person('shyam');
var sampath = new Person('eric');

var People = [james,saif,sampath];

People.forEach(function(Person){
    Person.on('speak',function(msg){
        console.log(Person.name + 'said this ' + msg );
    });
});

james.emit('speak','This is star');
saif.emit('speak','Nice to meet you ');
sampath.emit('speak','wow');
*/

/*
//Generally the module name and the variable name both are same
var fs = require('fs');

// fs.readFileSync
// Sync' part allows the node to read the file synchronusly meaning all file is read first before going through other code. 
var sample = fs.readFileSync('sample.txt','utf8');

console.log(sample);

// this line of code creates an another file output.txt and writes the data in sample into the log.
fs.writeFileSync('output.txt',sample);


//there are two types, one mentioned above and another is asynchronous way we just use readFile

*/




/*
var http = require("http");

var server = http.createServer(function(req,res){

    console.log('request was made: '+ req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hey');
});
server.listen(3000,'127.0.0.1');
console.log('Not listening')
*/



/*
var http = require("http");
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
myReadStream.on('data',function(chunk){
    console.log('new chunck');
    myWriteStream.write(chunk);
});
*/



/*
var http = require("http");
var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req,res){

    console.log('request was made: '+ req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    //var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

    myReadStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('Not listening')
*/

/*
var http = require("http");
var fs = require('fs');

var server = http.createServer(function(req,res){

    console.log('request was made: '+ req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});
    //var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');

    myReadStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('Not listening')
*/


/*
var http = require("http");
var fs = require('fs');

var server = http.createServer(function(req,res){

    console.log('request was made: '+ req.url);
    res.writeHead(200,{'Content-Type': 'application/json'});
    
    var obj = {
        name: 'shubham',
        job: 'Cloud Analyst',
        age: 21
    };

    res.end(JSON.stringify(obj));
    //var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');

   // myReadStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('Not listening')

*/




/*
var http = require("http");
var fs = require('fs');

var server = http.createServer(function(req,res){

   if(req.url === '/home' || req.url==='/'){
       res.writeHead(200,{'content-Type': 'text/html'});
       fs.createReadStream(__dirname + '/index.html').pipe(res)
   }else if(req.url==='/contactme'){
    res.writeHead(200,{'content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res)
   }else if(req.url === '/api'){
    var obj = {
        name: 'shubham',
        job: 'Cloud Analyst',
        age: 21
    };

    res.end(JSON.stringify(obj));
    res.writeHead(200,{'content-Type': 'application/json'});
    //fs.createReadStream(__dirname + '/contact.html').pipe(res)
   }else{
    res.writeHead(200,{'content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/not_found.html').pipe(res)
   }
});
server.listen(3000,'127.0.0.1');
console.log('Not listening')
*/


/*
var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('this is the homepage');
}
);
app.get('/contact',function(req,res){
    res.send('this is the contact page');
}
);

app.get('/profile/:id',function(req,res){
    res.send('this is the profile page of id: '+ req.params.id);
}
);


app.listen(3000);
*/

/*

var express = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    //res.send('this is the homepage');
    res.sendFile(__dirname + '/index.html')
}
);
app.get('/contact',function(req,res){
    res.send('this is the contact page');
}
);

app.get('/profile/:name',function(req,res){
    var data = {age: 21, job: 'Cloud', hobbies: ['eating','Reading']}
    res.render('profile', {person: req.params.name, data: data});
}
);


app.listen(3000);
*/




/*
var express = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    //res.send('this is the homepage');
    res.sendFile(__dirname + '/index.html')
}
);
app.get('/contact',function(req,res){
    res.send('this is the contact page');
}
);

app.get('/profile/:name',function(req,res){
    var data = {age: 21, job: 'Cloud', hobbies: ['eating','Reading']}
    res.render('profile', {person: req.params.name, data: data});
}
);

app.listen(3000);
*/
/*
var str = "aaabbbccc";
var counts = {};

var ch, index, len, count;

for(index = 0, len = str.length; index<len;++index){
    ch = str.charAt(index);
    count = counts[ch];
    counts[ch] = count ? count + 1 : 1;
}
for (ch in counts) {
    console.log(ch + " count: " + counts[ch]);
}
*/

/*
//Assignment 1
var str2 = "aaabbbccc";
var obj ={};
for(let s of str2){
    if(!obj[s]){
        obj[s] = 1;
    }else {
        obj[s] = obj[s]  + 1;
    }
}
console.log(obj)
*/

//Assignement 2
var num1 = 45;
var rem = 0;
var add = 0;
for(var i=0;i<num1;i++){
    rem = num1%i;
    if(rem==0){
        add += i;    //add = add + i;
    }
}
if(add == num1){
    console.log('Perfect');
}else{
    console.log('not perfect');
}












