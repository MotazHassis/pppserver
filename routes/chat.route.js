const ChatController = require('../controllers/chat.controller');
module.exports = function(app){
    app.put('/myupdate/readingsleft', ChatController.updatereadingleft);
    app.put('/myupdate/readingsright', ChatController.updatereadingright);
    app.get('/mywing/readings', ChatController.getreadings);

}
