import './styles.css'
import Socket from 'socket.io-client'

const socket = Socket('localhost:3000')

console.log('Log: from client index.js')
console.log(socket)