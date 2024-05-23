const net = require('net');

const PORT = 8080;
const DELIMITER = '$_';

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default server;