https://github.com/dcwmark/react-proxy.git

1. mkdir [..]/react-proxy
1. cd react-proxy
1. create-react-app client
1. mkdir server
1. npm install body-parser --save
1. npm install express --save
1. npm install mongoose --save
1. npm install nodemon --save-dev

1. cd [..]/react-proxy
1. npm install concurrently --save-dev
1. npm install express --save

* npm run dev

## concurrent

react-proxy/package.json

```javascript
...
  "scripts": {
    "client": "cd client && npm start",
    "server": "cd server && nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
  },
...
```

## proxy

react-proxy/client/package.json

```javascript
...
  "proxy": "http://localhost:5000/",
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

## express routes

react-proxy/server/server.js

```javascript
...
let express = require('express'),
    app = express(),
...
let commentsRoutes = require('./api/routes/comments');
commentsRoutes(app);

let postsRoutes = require('./api/routes/posts');
postsRoutes(app);

let todosRoutes = require('./api/routes/todos');
todosRoutes(app);
...
```

react-proxy/server/api/routes/comments/index.js

```javascript
...
module.exports = (app) => {
...
    app.route('/api/comments')
...
```

react-proxy/server/api/routes/posts/index.js

```javascript
...
module.exports = (app) => {
...
    app.route('/api/posts')
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
