<!-- server/READ.me -->

Reference:

https://github.com/babel/example-node-server

1. npm install body-parser --save
1. npm install express --save
1. npm install mongoose --save
1. npm install validator --save
1. npm install nodemon --save-dev
1. npm install morgan --save 
1. npm install babel-register --save-dev
1. npm install babel-preset-env --save-dev		

## babel-register

Usage
```javascript
require("babel-register");
```
All subsequent files required by node with the extensions .es6, .es, .jsx and .js will be transformed by Babel.

Create .babelrc
```javascript
{
  "presets": ["env"]
}
```

react-proxy/server/server.js

```javascript
...
require("babel-register");
...
```

react-proxy/server/spi/routes/comments/index.js

```javascript
...
import * as commentsController from '../../controllers/comments';

module.exports = (app) => {
    app.route('/api/comments')
        .get(commentsController.listComments);
};
...
```

## nodemon

react-proxy/server/package.json

```javascript
...
  "scripts": {
    "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```

## node middleware -- body-parser

react-proxy/server/server.js

```javascript
...
    bodyParser = require('body-parser'),
...
/*-- routes registration begins --*/
let commentsRoutes = require('./api/routes/comments');
commentsRoutes(app);

let postsRoutes = require('./api/routes/posts');
postsRoutes(app);

let todosRoutes = require('./api/routes/todos');
todosRoutes(app);
/*-- routes registration ends --*/
...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});
...
```

## express routes

react-proxy/server/server.js

```javascript
...
let express = require('express'),
    app = express(),
...
let apiRoutes = require('./api/routes');
apiRoutes(app);
...
```

react-proxy/server/api/routes/index.js
```javascript
...
module.exports = (app) => {
    let commentsRoutes = require('./comments');
    commentsRoutes(app);

    let postsRoutes = require('./posts');
    postsRoutes(app);

    let todosRoutes = require('./todos');
    todosRoutes(app);
};
...
```

react-proxy/server/api/routes/comments/index.js

```javascript
...
import * as commentsController from '../../controllers/comments';
...
module.exports = (app) => {
...
    app.route('/api/comments')
        .get(commentsController.listComments);

    app.route('/api/comments/bulkload')
        .post(commentsController.loadComments);
...
```

react-proxy/server/api/controllers/comments/index.js

```javascript
...
export { listComments } from './listComments';
export { loadComments } from './loadComments';
...
```

react-proxy/server/api/routes/posts/index.js

```javascript
...
import * postsController from '../../controllers/posts';
...
module.exports = (app) => {
...
    app.route('/api/posts')
        .get(postsController.listPosts);

    app.route('/api/posts/bulkload')
        .get(postsController.loadPosts);
...
```

react-proxy/server/api/routes/todos/index.js

```javascript
...
module.exports = (app) => {
...
    app.route('/api/todos')
...
```

## morgan -- An http request logger middleware for Node.js


