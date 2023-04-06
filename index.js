// Create a new WebSocket connection
const socket = new WebSocket('ws://localhost:8080');

// Open the connection
socket.addEventListener('open', function (event) {
  console.log('WebSocket connection is open.');
});

// Listen for messages from the server
socket.addEventListener('message', function (event) {
  console.log('Message from server:', event.data);
});

// Send a message to the server
socket.send('Hello, server!');
