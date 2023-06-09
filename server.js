import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import todoRoute from "./routes/todo.js"

const app=new express();
dotenv.config()
app.use(express.json())

/*Middlewares */
app.use(cors())
app.use("/todos",todoRoute)
/*Declarations */
const PORT =process.env.PORT || 5000


mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    app.listen(PORT)
    console.log(`Server is running on ${PORT}`)
}).catch((err)=>{
    console.log(err.message)
})

