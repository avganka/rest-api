import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  packId: { type: String, required: true },
  categoryId: { type: String, required: true },
  type: { type: String, required: true },
  text: {type: String, required: true},
  files: {type: String},
  answer: {type: String, required: true},
  points: { type: Number, required: true },
})

export default mongoose.model('Question', QuestionSchema);




