const WebSocket = require('ws');

// Create a WebSocket server listening on port 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('🚀 WebSocket server is running at ws://localhost:8080');

wss.on('connection', (ws) => {
  console.log('✅ A client has connected');

  // Send an initial message to the client
  ws.send('📡 Server has started streaming data...');

  // Stream data to the client every 2 seconds
  const intervalId = setInterval(() => {
    const data = {
      timestamp: new Date().toISOString(),
      temperature: (Math.random() * 30 + 10).toFixed(2), // Simulated temperature
    };

    ws.send(JSON.stringify(data));
  }, 2000);

  // Handle client disconnection
  ws.on('close', () => {
    clearInterval(intervalId);
    console.log('❌ Client disconnected, streaming stopped');
  });

  // Handle errors
  ws.on('error', (err) => {
    console.error('WebSocket error:', err);
  });
});
