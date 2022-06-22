import Pack from "../models/pack.js";

class PackService {
  async getAll() {
    return await Pack.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID не указан')
    }
    const pack = await Pack.findById(id);
    return pack;
  }
  
}

export default new PackService();