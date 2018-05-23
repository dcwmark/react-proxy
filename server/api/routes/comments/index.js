/* server/api/routes/comments/index.js */

'use strict';

module.exports = (app) => {
    let commentsController = require('../../controllers/comments');
    
    app.route('/api/comments')
        .get(commentsController.listComments);
};
