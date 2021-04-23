//const express = require("express");
import express from "express";

import bodyParser from "body-parser";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";

import schema from "./schema";

const app = express();

app.use(express.json());
app.use(bodyParser.json());

const server = new ApolloServer({ schema });

server.applyMiddleware({ app });

mongoose.connect("mongodb://localhost:27017/byondXR", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => {
  console.log("The application is listening on port 5000!");
});
