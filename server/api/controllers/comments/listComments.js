/* server/api/controllers/comments/listComments.js */

'use strict';

import * as models from '../../models';

module.exports = {
    listComments: (req, res) => {
        const comment = models.Comment;
        comment.find({})
        .then( resolve => {
          res.json(resolve);
        })
        .catch( reject => {
            console.log(reject);
        });
    },
};
