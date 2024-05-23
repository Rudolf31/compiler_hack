const net = require('net');

const PORT = 8080;
const HOST = 'localhost';
const DELIMITER = '$_';

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log('Connected to server');

  // Отправка сообщения на сервер
  const message = 'Hello, server!';
  client.write(message + DELIMITER);
});

client.on('data', (data) => {
  const response = data.toString();
  console.log('Received response from server:', response);
});

client.on('close', () => {
  console.log('Connection closed');
});

client.on('error', (err) => {
  console.error('Socket error:', err);
});
