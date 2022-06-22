import mongoose from "mongoose";

export const QuestionSchema = new mongoose.Schema({
  categoryId: { type: String, required: true },
  type: { type: String, required: true },
  text: {type: String, required: true},
  answer: {type: String, required: true},
  file: {type: String},
  points: { type: Number, required: true},
})

export default mongoose.model('Question', QuestionSchema);




