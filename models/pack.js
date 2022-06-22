import mongoose from "mongoose";

const PackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  categories: { type: [String], required: true },
})

export default mongoose.model('Pack', PackSchema);