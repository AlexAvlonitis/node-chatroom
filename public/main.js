var socket = io();
var socket = io();
 $('form').submit(function(){
   socket.emit('chat message', $('#m').val());
   $('#m').val('');
   return false;
 });
 socket.on('chat message', function(msg){
   $('#messages').append($('<li>').text(msg));
 });
 socket.on('connection', function(msg){
   $('#messages').append($('<li>').text(msg));
 });
