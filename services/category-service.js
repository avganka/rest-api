import Category from "../models/category.js";

class CategoryService {
  async getAll() {
    return await Category.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const category = await Category.findById(id);
    return category;
  }
}

export default new CategoryService();