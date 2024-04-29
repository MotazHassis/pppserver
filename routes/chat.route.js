const ChatController = require('../controllers/chat.controller');
const { authenticate } = require('../config/jwt.config')
module.exports = function(app){

    app.post('/create_wing', ChatController.createWing);
    app.get('/wing/:id', ChatController.findwing);
    app.put('/update/:id', ChatController.updatewing);
    
    app.post('/RegisterUser', ChatController.RegisterUser);
    app.post('/login', ChatController.login);
    app.get('/allchat',authenticate ,ChatController.listAllMessages);
    app.get('/allchatio',ChatController.listAllMessagesio);
    app.get('/user/:id', ChatController.findthisuser);
    app.post('/chat',ChatController.sendmessage);
    app.get('/logout', ChatController.logout)
}