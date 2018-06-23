/* server/api/routes/comments/index.js */

'use strict';

import * as commentsController from '../../controllers/comments';

module.exports = (app) => {
    app.route('/api/comments/bulkload')
        .post(commentsController.loadComments);

    app.route('/api/comments')
        .get(commentsController.listComments);
};
