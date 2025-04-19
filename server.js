const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

app.ws('/ws', (ws, req) => {
  ws.on('message', (msg) => {
    console.log(`Received message: ${msg}`);
    ws.send(`Echo: ${msg}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
