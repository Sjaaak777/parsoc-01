import Express from 'express'
import Http from 'http'
import SocketIO from 'socket.io'
import Api from './api'

const app = Express()
const server = Http.createServer(app)
const io = SocketIO(server)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
  console.log('Connection:', socket.id)
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})

const api = new Api()
console.log(`Weather Api: ${api.weather}`)
