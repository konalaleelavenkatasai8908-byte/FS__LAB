const net = require('net');

const client = net.createConnection(5000, 'localhost', () => {
    console.log('Connected to server');
});

client.on('data', (data) => {
    console.log('Message from server:', data.toString());
    client.end();
});

client.on('close', () => {
    console.log('Connection closed');
});