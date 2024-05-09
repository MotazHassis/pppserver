const ChatController = require('../controllers/chat.controller');
module.exports = function(app){
    app.put('/myupdate/readings', ChatController.updatereadingleft);
    app.put('/myupdate/readings', ChatController.updatereadingright);
    app.get('/mywing/readings', ChatController.getreadings);

}
