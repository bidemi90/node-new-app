const new_todomodel = require("../models/new_todomodel")

const viewtodo =  async (req, res) => {
    const mytodoarray = await new_todomodel.find({});
  
    if (mytodoarray.length === 0) {
      console.log("No documents found.");
    } else {
      console.log("Documents found:", mytodoarray);
      console.log();
    }
  
    res.render("todo", { mytodoarray, message: "" });
  }

  const posttodo= async (req, res) => {
    console.log(req.body);
  
    let filledtodo = new new_todomodel(req.body);
    filledtodo
      .save()
      .then((result) => {
        console.log(result);
        res.redirect("/todo");
      })
      .catch((error) => {
        console.log(error);
      });
  
    res.redirect("/todo/viewtodo");
  }

  const gotoedittodo =  async(req, res) => {
    console.log(req.body);
    // content = req.body.id;
    
    content=req.params.id
    console.log(content);
  
   const todo = await new_todomodel.findOne({ _id: content }).then((result) => {
      console.log(result);
        if (!result ) {
      return res.status(404).send("todo not found") 
   }
       the_form_todo_content= result
      res.render("todoedit" ,{the_form_todo_content} );
    })
  
  
  }

  const edittodo=async (req, res) => {

 

    try {
      console.log(req.body);
      let new_content = req.body.todo_content; // Assuming the updated content is provided in req.body.new_content
      console.log(new_content);
      let _id = the_form_todo_content._id; // Assuming you have the ID stored in the variable the_form_todo_content._id
      console.log(_id);
      const updateTodo = await new_todomodel.findByIdAndUpdate(
        _id,
        { todo_content: new_content }, // Use the field name to update and the new value
        { new: true }
      );
      console.log(updateTodo);
      res.redirect("/todo/viewtodo");
    } catch (error) {
      console.log(error);
    }
    
      
     
    }

    const deletetodo = async (req, res) => {
  
        try {
          content = req.body.id
          console.log(content)
          const deleteItem = await new_todomodel.findByIdAndDelete({ _id: content })
          console.log(deleteItem)
          res.redirect("/todo/viewtodo")
      } catch (error) {
          console.log(error)
      }
      
      
      }

      module.exports = {viewtodo,posttodo,gotoedittodo,edittodo,deletetodo}