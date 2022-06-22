import Question from '../models/questions.js';
import FileService from './file-servise.js';


class QuestionService {
  async create(post, picture) {
    let  createdPost;
    if (picture) {      
      const fileName = FileService.saveFile(picture);
      createdPost = await Question.create({ ...post, picture: fileName });
    }
    createdPost = await Question.create({ ...post});
    return createdPost;
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
    const post = await Question.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error('ID не указан')
    }
    const updatedPost = await Question.findByIdAndUpdate(post._id, post, { new: true });
    return updatedPost;

  }

  async delete(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const post = await Question.findByIdAndDelete(id);
    FileService.deleteFile(post.picture);
    return post;
  }
}

export default new QuestionService();