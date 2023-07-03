const app = require('express')
const server = require('http').createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
  serveClient: false,
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log("enter");
  console.log(socket.id);
  socket.on('cSend', data => {
    socket.broadcast.emit('all', data)
    socket.emit('sSend', data)
  })
})

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen('3333', () => {
  console.log("server : http://127.0.0.1:3333");
})