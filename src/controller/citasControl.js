const models = require("../models/citas");

const gotAll = (req, res) => {
  res.status(200).json(models.GetAll());
};
const gotOne = (req, res) => {
  const data = req.params.id;
  const found = models.GetOne(data);
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ msg: "cita doesn't exist" });
  }
};
const created = (req, res) => {
  const user = req.body;
  const data = models.Create(user);
  if (data) {
    res.status(200).json({ msg: "cita created successfully" });
  } else {
    res.status(404).json({ msg: "cita already exists" });
  }
};
const updated = (req, res) => {
  const data = req.params.id;
  const edit = req.body;
  const insert = models.Update(data, edit);
  if (insert) {
      res.status(200).json({ msg: "updated successfully" });    
  } else {
    res.status(404).json({ msg: "cita doesn't exist" });
  }
};
const deleted = (req, res) => {
  const erased = models.Delete(req.params.id);
    if (erased) {
    res.status(200).json({msg:"cita deleted successfully"});
  } else {
    res.status(404).json({ msg: "cita doesn't exist" });
  }
};
module.exports = { gotAll, gotOne, deleted, created, deleted, updated };
