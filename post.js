var http=require('http');
var querystring=require('querystring');
var name,email,password,cr;
http.createServer(function(req,res){
    var data1="";
    req.on('data',function(chunk){
        console.log(chunk);
        data1 += chunk;
        console.log("Data is string"+data1);
    });
    req.on('end',function(){
        q=querystring.parse(data1);
        console.log(q);
        name=q['username'];
        email=q['email'];
        password=q['password'];
        cr=q['cr'];
        res.write("Hello "+ name + " your mail id is : " + email +" check password : "+ password + " courses "+ cr);
        res.end();
    });
}).listen(1111);
console.log("server has started..");