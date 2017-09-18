var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'jen@example.com',
    text: 'Hey. This is message from Yuriy'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected to server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});