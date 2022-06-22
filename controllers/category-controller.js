import CategoryService from "../services/category-service.js";

class CategoryController {

  async getAll(req, res) {
    try {     
      const categories = await CategoryService.getAll()
      return res.json(categories);
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getOne(req, res) {
    try {
      const category = await CategoryService.getOne(req.params.id);
      return res.json(category);
    } catch (error) {
      res.status(500).json(error)
    }
  }

}

export default new CategoryController();