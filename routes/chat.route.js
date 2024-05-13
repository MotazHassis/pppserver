const ChatController = require('../controllers/chat.controller');
module.exports = function(app){
    app.get('/mywing/readings', ChatController.getreadings);
    app.put('/myupdate/readingsleft', ChatController.updatereadingleft);
    app.put('/myupdate/readingsright', ChatController.updatereadingright);
    app.put('/myupdate/readingsspeed', ChatController.updatespeed);
    app.put('/myupdate/readingsrear', ChatController.updaterear);
    app.put('/myupdate/readingsbalance', ChatController.updatebalance);
    app.put('/myupdate/readingsvertical', ChatController.updatevertical);
    
}
