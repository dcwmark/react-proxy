/* server/api/routes/posts/index.js */

'use strict';

import * as postsController from '../../controllers/posts';

module.exports = (app) => {
    app.route('/api/posts')
        .get(postsController.listPosts);

    app.route('/api/posts/bulkload')
        .post(postsController.loadPosts);
};
