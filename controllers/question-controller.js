import QuestionService from '../services/question-service.js';

class QuestionController {
  async create(req, res) {
    try {      
      let question = {};
      if (req.files) {
        question = await QuestionService.create(req.body, req.files.picture);
      } else {
        question = await QuestionService.create(req.body);
      }
      res.json(question);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async getAll(req, res) {
    try {
      const limit = req.query.limit;
      const questions = await QuestionService.getAll(limit)
      return res.json(questions);
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getOne(req, res) {
    try {
      const question = await QuestionService.getOne(req.params.id);
      return res.json(question);
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(req, res) {
    try {
      const updatedQuestion = await QuestionService.update(req.body)
      return res.json(updatedQuestion);
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  async delete(req, res) {
    try {
      const question = await QuestionService.delete(req.params.id);
      return res.json(question);
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new QuestionController();