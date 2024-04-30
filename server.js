const cookieParser = require('cookie-parser');
const express=require('express');
const axios = require('axios');
const ChatController = require('./controllers/chat.controller');
const cors=require('cors');
const { Socket } = require('socket.io');
// const { Socket } = require('socket.io');
const app=express();
require('dotenv').config();
require('./config/mongoose.config')
const port=process.env.PORT
const corsOptions = {
    origin: '*', // Allow from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow all HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow only specific headers
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
require('./routes/chat.route')(app);
const server =app.listen(port, () => console.log(`Listening on port: ${port}`) );

const io = require('socket.io')(server);
io.use((socket, next) => {
    // Setting the Access-Control-Allow-Origin header to '*'
    socket.handshake.headers.origin = '*';
    next();
});

io.on('connection', socket => {
    console.log('on-connection')
    app.set('socket', socket)
    console.log('userId: ', socket.handshake.query.userId)
    console.log('socket', socket.id)
    // add any user who connects to our server to active users list
    // send message to client that he has been successfully connected to server
    socket.on('sendMessage', async () => {
        try {
            const response = await axios.get('https://pppserver.onrender.com/allchatio');
            io.emit('receiveMessage', response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }})
    socket.on('senddata', async () => {
        try {
            let id='66301ed333673cf71878ec51'
            const response = await axios.get('https://pppserver.onrender.com/wing/'+id);
            io.emit('getwingdata', response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('disconnection')
    })
})
