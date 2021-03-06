const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
});

let time = 0;
let year = 0;
let TotalScore = 0; // ?
let carbon = 0;
let carbonArr = [7.72105,8.08517,8.1864,8.53648,8.68733,8.9737,9.25988,9.6896,9.61627,9.7903,9.99249,9.83695,9.88611,10.081,9.68749,9.61459,9.9279,10.1461,10.124,9.64922,10.2369,9.95994,10.1438,10.6952,10.7515,10.8207,10.8081,11.3616,11.4093,11.862,11.7971,11.3885,10.6604,10.8621,11.1792,11.3984,11.895,12.1734,11.9188,12.2112,12.622,12.7745,12.9426,13.1887,13.2394,12.3953,13.2337,14.0166,14.4361,14.2677,15.1283,16.6344,16.931,17.1865,17.6151,18.601,19.4291,19.9369,20.4768,20.5436,21.1158,21.652,22.1765,23.0189,23.8382,24.6342,25.5112,26.1197,26.779,27.9179,29.2509,28.9959,30.0417,30.9854,30.8474,31.0271,32.4536,33.308,34.0199,34.8079,34.6377,33.9303,35.2381,35.3898,35.8773,36.7489,37.372,38.6859,39.2844,39.9081,39.9539,40.7695,40.3535,39.8946,40.2212,40.5536,41.1754,42.1954,41.1657,41.1582,41.54,41.8078,43.083,44.546,46.4957,47.4133,47.96,48.9497,49.1355,49.1382,50.7118,52.1069,53.2092,54.1858,55.6712,57.1566,58.3418,59.5269,60.712,61.8972,63.0823,64.0979,65.1134,66.129,67.1445,68.16,69.1755,70.191,71.2066,72.2221,73.2375,74.6107,75.9838,77.3569,78.73,80.1031,81.4762,82.8494,84.2224,85.5956,86.9686,88.4972,90.0257,91.5542,93.0827,94.6112,96.1397,97.6682,99.1968,100.725,102.254,103.702,105.15,106.597,108.045,109.493,110.941,112.389,113.837,115.285,116.732,117.696,118.66,119.624,120.588,121.552,122.516,123.48,124.444,125.407,126.371,127.014,127.656,128.299,128.941,129.583,130.226,130.868,131.511,132.153,132.796,133.271,133.746,134.221,134.696,135.172,135.647,136.122,136.597,137.072,137.547,137.727,137.906,138.086,138.265,138.445,138.624,138.803,138.983,139.162,139.342];
let id = 1;
/*
    user: {id, clicks, trees, direct air absorber, research}

*/
let users = [];

io.on("connection", (socket) => {
  console.log("New client connected");
  id++;
  let userInfo = {id:id, clicks:0, trees:0, absorb:0, research:0};
    //on join, create user, add user
  users.push(userInfo);
  socket.emit("users", users);
  
 socket.on("click", () => {

 });

 

  socket.on("disconnect", () => {
    console.log("Client disconnected " + userInfo.name);
    if(index !== -1){
      console.log("a logged in user left");
      io.emit("leave" , userInfo);
      let index = users.indexOf(userInfo);
      users.splice(index, 1);
      console.log(users);
      io.emit("users", users);
      sendGlobalMessage(io, userInfo.name + " left", userInfo.color);
    }
  });

});

const sendGlobalMessage = (io, message, color) => {
  let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let data = {
      hasUser:false, 
      user: {name:"admin", color:color},
      text: message,
      time: time,
    };
    io.emit("newMessage", data);
}


server.listen(port, () => console.log(`Listening on port ${port}`));