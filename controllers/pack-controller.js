class PackController {

  async getAll(req, res) {
    try {    
      const packs = await PackService.getAll()
      return res.json(packs);
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error)
    }
  }

}

export default new PackController();