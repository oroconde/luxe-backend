const models = require("../models/users");

const gotAll = (req, res) => {
  res.status(200).json(models.GetAll());
};
const gotOne = (req, res) => {
  const data = req.params.dni;
  const found = models.GetOne(data);
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ msg: "Couldn`t find" });
  }
};
const created = (req, res) => {
  const user = req.body;
  const data = models.Create(user);
  if (data) {
    res.status(200).json({ msg: "user created successfully" });
  } else {
    res.status(404).json({ msg: "user already exists" });
  }
};
const updated = (req, res) => {
  const data = req.params.dni;
  const edit = req.body;
  const insert = models.Update(data, edit);
  if (insert) {
    res.status(200).json({ msg: "updated successfully" });
  } else {
    res.status(404).json({ msg: "user doesn't exist" });
  }
};
const deleted = (req, res) => {
  const erased = models.Delete(req.params.dni);
  if (erased) {
    res.status(200).json({ msg: "User deleted successfully" });
  } else {
    res.status(404).json({ msg: "Cannont be deleted" });
  }
};
const logg = (req, res) => {
  const data = req.body;
  const answer = models.Login(data);
  if (answer) {
    res.status(200).json({ token: answer});
  } else {
    res.status(404).json({ msg: "user login failed" });
  }
};
module.exports = { gotAll, gotOne, deleted, created, deleted, updated, logg };
