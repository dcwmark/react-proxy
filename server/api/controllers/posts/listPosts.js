/* server/api/controllers/posts/listPosts.js */

'use strict';

import * as models from '../../models';

module.exports = {
    listPosts: (req, res) => {
        const post = models.Post;
        post.find({})
        .then( resolve=> {
            res.json(resolve);
        })
        .catch( reject => {
            console.log(reject);
        });
    },
};
