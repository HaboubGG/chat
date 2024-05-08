const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
       origin: "http://localhost:4200", // Allow requests from your Angular app
       methods: ["GET", "POST"], // Specify the methods allowed
       credentials: true // Allow credentials
    }
   });
io.on('connection', (socket) => {
 console.log('a user connected');

 socket.on('join', ({ username, recipient }) => {
    // Sort usernames alphabetically to ensure consistent room name
    const sortedUsernames = [username, recipient].sort();
    const room = `${sortedUsernames[0]}-${sortedUsernames[1]}`;
    socket.join(room);
    console.log(`${username} joined the chat with ${recipient}`);
 });

 socket.on('message', ({ message, sender, recipient }) => {
    // Use the same logic to ensure the room name is consistent
    const sortedUsernames = [sender, recipient].sort();
    const room = `${sortedUsernames[0]}-${sortedUsernames[1]}`;
    io.to(room).emit('message', { message, sender });
 });

 socket.on('disconnect', () => {
    console.log('user disconnected');
 });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
