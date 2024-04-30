const ChatController = require('../controllers/chat.controller');
module.exports = function(app){
    app.post('/create_wing', ChatController.createWing);
    app.get('/wing/:id', ChatController.findwing);
    app.put('/update/:id', ChatController.updatewing);
}
