import { Schema, model } from "mongoose";

const carSchema = new Schema(
  {
    model: Number,
    brand: String,
    color: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Car", carSchema);
