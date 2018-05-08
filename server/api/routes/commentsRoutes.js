/* server/api/routes/commentsRoutes.js */

'use strict';

module.exports = (app) => {
    let commentController = require('../controllers/commentsController');
    
    app.route('/api/comments')
        .get(commentController.listComments);
};
