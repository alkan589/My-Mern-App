import express from "express"
import Todo from "../models/todos.js"
import todo from "../models/todos.js";
const route=express.Router();

/*All todos*/
export const getAllItems=async(req,res)=>{
    try{
        const allTodos=await Todo.find()
        res.status(201).json(allTodos)

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

/**Single Todo */
export const getSingleItem=async(req,res)=>{
    try{
        const {id}=req.params;
        const singleTodo=await Todo.findById(id);
        
        if(!singleTodo){
            res.json({message:"no found a todo"});
        }
    }catch(err){
        res.status(404).json({message:err.message})
    }
    
}
/*Delete Todo */
export const deleteItem=async(req,res)=>{
    try{
        const {id}=req.params;
        const filteredItems=await Todo.findByIdAndDelete(id);
        res.status(201).json(filteredItems)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
/*Update */
export const updateItem=async(req, res) => {
    try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: 'todo not found' });
    }
    todo.title = req.body.title;
    todo.content = req.body.content;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
  
/**Create */
export  const createItem=async(req,res)=>{
    try{

        const newTodo=new Todo(req.body)
        await newTodo.save()
    }catch(err){
        res.status(201).json({message:err.message})
    }
}

export default{
    createItem,
    updateItem,
    deleteItem,
    getAllItems,
    getSingleItem
}
