import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  packId: { type: String, required: true },
  name: { type: String, required: true },
  questions: { type: [String], required: true }, 
})

export default mongoose.model('Category', CategorySchema);