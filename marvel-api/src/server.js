const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();
server.use(express.json());

mongoose.connect("mongodb://localhost:27017/marveldb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(routes);

server.listen(3000);
