const express = require("express");
const {viewtodo,posttodo,gotoedittodo,edittodo,deletetodo} = require("../controllers/todocontroller")

const todoroutes=express.Router()

todoroutes.get("/viewtodo",viewtodo);

todoroutes.post("/post_todo",posttodo);

todoroutes.post("/todoedit/:id",gotoedittodo);

todoroutes.post("/post_todoedit",edittodo);

todoroutes.post("/tododelete", deletetodo);

module.exports=todoroutes