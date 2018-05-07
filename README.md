https://github.com/dcwmark/react-proxy.git

mkdir [..]/react-proxy
cd react-proxy
create-react-app client
mkdir server
npm install nodemon --save-dev
npm install express --save
npm install mongoose --save

cd [..]/react-proxy
npm install concurrently --save-dev
npm install express --save

npm run dev