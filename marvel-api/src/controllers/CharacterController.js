const Character = require("../models/Character");

module.exports = {
  async index(req, res) {
    const character = await Character.findOne({ _id: req.params.id });
    return res.json({});
  },
  async list(req, res) {
    const characters = await Character.find({});
    return res.send({ msg: "Olá" });
  },
  async store(req, res) {
    const { name } = req.body;

    const characterExists = await Character.findOne({ name });
    if (characterExists != null) {
      return res.json(characterExists);
    }
    const character = await Character.create(req.body);
    return res.json(character);
  },
  async destroy(req, res) {
    await Character.deleteOne({ _id: req.params.id });
    return res.json({ success: "ok" });
  },
  async update(req, res) {
    const character = await Character.updateOne(
      { _id: req.params.id },
      req.body
    );
    return res.json(character);
  }
};
