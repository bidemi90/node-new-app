const mongoose = require("mongoose");

let new_todoSchema = mongoose.Schema({
    todo_content: String,
  });
  
  let new_todomodel = mongoose.model.new_todotable || mongoose.model("new_todotable", new_todoSchema);
  
module.exports = new_todomodel  