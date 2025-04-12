const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  setInterval(() => {
    const temperature = (Math.random() * 10 + 20).toFixed(2);
    socket.emit('temperature', { temperature });
  }, 2000);

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
