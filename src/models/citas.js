const fs = require("fs");
const path = require("path");
const pathDB = path.join(__dirname, '../db/citas.json');

const GetAll = () => {
  return JSON.parse(fs.readFileSync(pathDB, "utf8"));
};
const GetOne = (id) => {
  const data = GetAll().find((item) => item.id === id);
  return data;
};
const Create = (cita) => {
  const found = GetAll().filter((item) => item.id == cita.id);
  const data = GetAll();
  if (found.length == 0) {
    data.push(cita);
    fs.writeFileSync(pathDB, JSON.stringify(data, null, 2));
    return cita;
  } else {
    return false;
  }
};
const Update = (id, edit) => {
  const found = GetAll().filter((item) => item.id !== id);
  const insert = GetAll();
  if (found.length !== insert.length) {
    found.push(edit);
    fs.writeFileSync(pathDB, JSON.stringify(found, null, 2, 'utf8'));
    return true;
  } else {
    return false;
}
};
const Delete = (id) => {
  const found = GetAll().filter((item) => item.id !== id);
  const data = GetAll();
  if (found.length !== data.length) {
    fs.writeFileSync(pathDB, JSON.stringify(found, null, 2, "utf8"));
    return true;
  } else {
    return false;
  }
};

module.exports = { GetOne, GetOne, Create, Update, Delete, GetAll };
