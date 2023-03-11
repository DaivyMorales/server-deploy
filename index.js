import express from "express";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";
import Car from "./src/Models/car.model.js";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT);

mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

app.get("/", (req, res) => {
  res.send("HOME ROUTE");
});

app.get("/product", (req, res) => {
    res.send("HOME ROUTE");
  });

app.get("/car", async (req, res) => {
  const carFound = await Car.find();
  res.json(carFound)
});

app.post("/car", async (req, res) => {
  const { model, brand, color } = req.body;
  const newCar = new Car({
    model,
    brand,
    color,
  });

  const carSaved = await newCar.save();

  res.status(200).json(carSaved);
});

console.log(`This server is running on port ${PORT}`);
