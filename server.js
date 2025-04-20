const Fastify = require('fastify');
const websocketPlugin = require('@fastify/websocket');

const fastify = Fastify();

fastify.register(websocketPlugin);

fastify.get('/ws', { websocket: true }, (connection, req) => {
  connection.socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    connection.socket.send(`Echo: ${message}`);
  });

  connection.socket.on('close', () => {
    console.log('Client disconnected');
  });
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server is running on http://localhost:3000');
});
