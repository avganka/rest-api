import QuestionService from '../services/question-service.js';

class QuestionController {
  async create(req, res) {
    try {      
      let post = {};
      if (req.files) {
        post = await QuestionService.create(req.body, req.files.picture);
      } else {
        post = await QuestionService.create(req.body);
      }
      res.json(post);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getAll(req, res) {
    try {
      const limit = req.query.limit;
      const posts = await QuestionService.getAll(limit)
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getOne(req, res) {
    try {
      const post = await QuestionService.getOne(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await QuestionService.update(req.body)
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async delete(req, res) {
    try {
      const post = await QuestionService.delete(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new QuestionController();