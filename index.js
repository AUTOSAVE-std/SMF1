var express = require('express'); 
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('image', function(msg){
    io.emit('image', msg);
     console.log('image sent');
  });
  socket.on('bypass_your_e', function(msg){
    io.emit('bypass_your_e', msg);
  });

  socket.on('bypass1', function(msg){
    console.log('bypass1: ' + msg);
  });
  socket.on('bypass1', function(msg){
    io.emit('bypass1', msg);
  });


  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});