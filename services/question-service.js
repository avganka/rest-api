import Question from '../models/question.js';
import FileService from './file-servise.js';
class QuestionService {
  async create(question, file) {    
    if (file) {      
      const fileName = FileService.saveFile(file);
      return await Question.create({ ...question, file: fileName });     
    }
    return await Question.create({ ...question});  
  }

  async getAll(limit) {
    if (limit) {
      return await Question.find().limit(limit);
    }
    return await Question.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const question = await Question.findById(id);
    return question;
  }

  async update(question) {
    if (!question._id) {
      throw new Error('ID не указан')
    }
    const updatedQuestion = await Question.findByIdAndUpdate(question._id, question, { new: true });
    return updatedQuestion;

  }

  async delete(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const question = await Question.findByIdAndDelete(id);
    if (question.file) {
      FileService.deleteFile(question.file);
    }
    return question;
  }
}

export default new QuestionService();