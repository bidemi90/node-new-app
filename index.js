const express = require("express");
const app = express();
const ejs = require("ejs");
const bodypaser = require("body-parser");
const mongoose = require("mongoose");
app.set("view engine", "ejs");
app.use(bodypaser.json());
app.use(bodypaser.urlencoded({ extends: true }));
require("dotenv").config()

const todoroutes= require("./routes/todoroutes")

const uri = process.env.MONGOODB_URI

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri).then((result) => {
      console.log("new mongoose todo");
    });
  } catch (error) {
    console.log(error);
  }
};
connect();


app.use("/todo",todoroutes)

let the_form_todo_content = 0;
let content = 0;



let port = process.env.port || 0011 

app.listen(port, () => {
  console.log("to do list server is no fire");
});
