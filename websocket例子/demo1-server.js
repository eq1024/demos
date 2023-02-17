// import { WebSocketServer } from 'ws';

let wwss = require('ws')
const wss = new wwss.WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    console.log('done');
  });
  ws.send('1231231231');
});