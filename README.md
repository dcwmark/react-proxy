<!-- react-proxy/README.md -->

References:

https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

https://appdividend.com/2017/06/28/mern-stack-tutorial/

https://appdividend.com/2017/06/28/mern-stack-tutorial/


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
