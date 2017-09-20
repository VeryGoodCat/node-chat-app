var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected to server');
});

socket.on('newMessage', function (message) {
  // console.log('New message', message);
  // var li = $('<li></li>');
  // li.text(`${message.from}: ${message.text}`);
  // $('#messages').append(li);


  var node = document.createElement("LI");
  var textnode = document.createTextNode(message.from + ': ' + message.text);
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("messages").appendChild(node);
});

document.getElementById("message-form").onsubmit = function(e){

  e.preventDefault();

  console.log(document.getElementsByTagName("input")[0].value);

  socket.emit('createMessage', {
    from: 'User',
    text: document.getElementsByTagName("input")[0].value
  }, function () {
  });

  document.getElementsByTagName("input")[0].value = '';

};




// $('#message-form').on('submit', function (e) {
//   e.preventDefault();
//
//   socket.emit('createMessage', {
//     from: 'User',
//     text: $('[name=message]').val()
//   }, function () {
//   });
//   $('[name=message]').val('');
// });