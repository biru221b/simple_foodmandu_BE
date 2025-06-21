import express from "express";
import connectDB from "./db.connect.js";
import foodRoutes from "./food/food.controller.js";
const app = express();
// to make app understand json
app.use(express.json());

//database connect
connectDB();
app.use(foodRoutes);

//network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

