import express from "express"
import { deleteItem, getSingleItem,updateItem,createItem,getAllItems} from "../controller/controller.js";
const router=express.Router();

router.get("/getAll",getAllItems)
router.post("/create",createItem)
router.put("/update/:id",updateItem)
router.get("/getSingle/:id",getSingleItem)
router.delete("/delete/:id",deleteItem)

export default router;