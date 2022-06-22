import Post from '../models/post.js';
import FileService from './file-servise.js';


class PostService {
  async create(post, picture) {  
    const fileName = FileService.saveFile(picture);
    const createdPost = await Post.create({...post, picture: fileName});    
    return createdPost;
  }

  async getAll(limit) {    
    if (limit) {
      return await Post.find().limit(limit);
    }
    return await Post.find();    
  }

  async getOne(id) {
    if (!id) {      
      throw new Error('ID не указан')
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error('ID не указан')
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updatedPost;

  }

  async delete(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const post = await Post.findByIdAndDelete(id);
    FileService.deleteFile(post.picture);
    return post;
  }
}

export default new PostService();