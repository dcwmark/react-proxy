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

react-proxy/server/api/controller/listComments.js

```javascript
...
import * as models from '../../models';

module.exports = {
    listComments: (req, res) => {
        const comment = models.Comment;
        comment.find({})
...
```

react-proxy/server/api/controller/loadComments.js

```javascript
...
import * as models from '../../models';

module.exports = {
    loadComments: (req, res) => {
        const comment = models.Comment;
        comment.collection.drop()
...
        comment.collection.insert(getComments())
...
```

react-proxy/server/api/routes/posts/index.js

```javascript
...
import * as postsController from '../../controllers/posts';
...
module.exports = (app) => {
...
    app.route('/api/posts')
        .get(postsController.listPosts);

    app.route('/api/posts/bulkload')
        .get(postsController.loadPosts);
...
```

react-proxy/server/api/controllers/posts/index.js

```javascript
...
export { listPosts } from './listPosts';
export { loadPosts } from './loadPosts';
...
```
react-proxy/server/api/controller/listPosts.js

```javascript
...
import * as models from '../../models';

module.exports = {
    listPosts: (req, res) => {
        const post = models.Post;
        post.find({})
...
```

react-proxy/server/api/controller/loadPosts.js

```javascript
...
import * as models from '../../models';

module.exports = {
    loadPosts: (req, res) => {
        const post = models.Post;
        post.collection.drop()
...
        post.collection.insert(getPosts())
...
```

react-proxy/server/api/routes/todos/index.js

```javascript
...
import * as todosController from '../../controllers/todos';
...
module.exports = (app) => {
...
    app.route('/api/todos')
        .get(todosController.listTodos);

    app.route('/api/todos/bulkload')
        .get(todosController.loadTodos);
...
```

react-proxy/server/api/controllers/todos/index.js

```javascript
...
export { listTodos } from './listTodos';
export { loadTodos } from './loadTodos';
...
```

react-proxy/server/api/controller/listTodos.js

```javascript
...
import * as models from '../../models';

module.exports = {
    listTodos: (req, res) => {
        const todo = models.Todo;
        todo.find({})
...
```

react-proxy/server/api/controller/loadTodos.js

```javascript
...
import * as models from '../../models';

module.exports = {
    loadTodos: (req, res) => {
        const todo = models.Todo;
        todo.collection.drop()
...
        todo.collection.insert(getTodos())
...
```

react-proxy/server/api/models/index.js

```javascript
...
import { Comment } from './comment';

import { Post } from './post';

import { Todo } from './todo';
...
```

react-proxy/server/api/models/comment.js

```javascript
...
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const commentSchema = new Schema({
...
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment: Comment };
...
```

react-proxy/server/api/models/post.js

```javascript
...
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const postSchema = new Schema({
...
const Post = mongoose.model('Post', postSchema);

module.exports = { Post: Post };
...
```

react-proxy/server/api/models/todo.js

```javascript
...
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const todoSchema = new Schema({
...
const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo: Todo };
...
```


## morgan -- An http request logger middleware for Node.js


