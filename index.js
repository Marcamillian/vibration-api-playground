import http from 'http'
import express from 'express'

let app = express();
let server;

app.set('port', (process.env.PORT || 8080));
app.use(express.static('./dist'));
server = http.createServer(app);

server.listen(app.get('port'), ()=>{
  console.log(`Listening on https://localhost:${app.get('port')}`)
})