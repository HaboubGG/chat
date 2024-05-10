const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    chatRooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom' }]
});

const messageSchema = new mongoose.Schema({
    sender: String,
    recipient: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
});

const chatRoomSchema = new mongoose.Schema({
    name: String,
    participants: [{
        user1: String,
        user2: String
      }], 
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
});

const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);
const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = { User, Message, ChatRoom };