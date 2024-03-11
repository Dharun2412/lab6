http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(request,response){
    var path = url.parse(request.url).pathname;
    console.log('Reuest for '+path+'receicved.');
    var query=url.parse(request.url).query;
    console.log(query);
    var name=querystring.parse(query)["username"];
    var email=querystring.parse(query)["email"];
    var password=querystring.parse(query)["password"];
    var cr=querystring.parse(query)["cr"];
    response.write("Hello "+ name + " your mail id is : " + email +" check password : "+ password + " courses "+ cr);
    response.end();
}
http.createServer(onRequest).listen(1211);
console.log('Server has Started')