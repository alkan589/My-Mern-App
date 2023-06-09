import mongoose,{Schema} from "mongoose";

const todoSchema=new mongoose.Schema({
    title:String,
    category:Array,
    content:String,
    
},{timestamp:true}
)
const todo=mongoose.model("Todos",todoSchema)
export default todo;