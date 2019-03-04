var express=require('express');
var app=express();
var http=require('http');
host="localhost"
port=8000

app.get('/',function(req,res){
	res.render("home.ejs"); 
});
app.get('/message/:msg/:toy',function(req,res){
	var message=req.params.msg;
	var toUser=req.params.toy;
	res.render('mess.ejs',{mess:message,tou:toUser});
});
const Server=http.createServer(app);
Server.listen(port,host,()=>{
	console.log(`Server is running at http://${host}:${port}`);
});