import express from "express";
import Food from "./food.model.js";

const router = express.Router();

//*add food
router.post("/food/add", async (req, res) => {
  const foodItem = req.body;
  await Food.create(foodItem);
  return res.status(201).send({ message: "Food item added successfully" });
});

//*get food list
router.get("/food/list", async (req, res) => {
  const foods = await Food.find();
  return res.status(200).send({ message: "success", foodList: foods });
});

//*delete food item by id
router.delete("/food/delete/:id", async (req, res) => {
  //extract food item id from req.params
  const id = req.params.id;

  //check for id validity
  const isValidId = mongoose.isValidObjectId(id);

  //if not valid,throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Food doesn't exist" });
  }

  //find food using food item_id
  const food = await Food.findOne({ _id: id });

  //if not food,throw error
  if (!food) {
    return res.status(400).send({ message: "Food doesn't exist" });
  }
  //delete food item
  await Food.deleteOne({ _id: id });
  return res.status(200).send({ message: "Food item deleted successfully" });
});

//*delete food item by id
router.put("/food/edit/:id", async (req, res) => {
  //extract food item id from req.params
  const id = req.params.id;

  //check for id validity
  const isValidId = mongoose.isValidObjectId(id);

  //if not valid,throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Food doesn't exist" });
  }

  //find food using food item_id
  const food = await Food.findOne({ _id: id });

  //if not food,throw error
  if (!food) {
    return res.status(400).send({ message: "" });
  }
});

export default router;
