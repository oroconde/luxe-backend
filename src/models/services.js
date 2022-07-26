const fs = require("fs");
const path = require("path");
const pathDB = path.join(__dirname, '../db/services.json');

const GetAll = () => {
  return JSON.parse(fs.readFileSync(pathDB, "utf8"));
};
const GetOne = (id) => {
  const data = GetAll().find((item) => item.id === id);
  return data;
};
const Create = (service) => {
  const found = GetAll().filter((item) => item.id == service.id);
  const data = GetAll();
  if (found.length == 0) {
    data.push(service);
    fs.writeFileSync(pathDB, JSON.stringify(data, null, 2, 'utf8'));
    return service;
  } else {
    return false;
  }
};
const Update = (id, edit) => {
  const found = GetAll().filter((item) => item.id !== id);
  const data = GetAll();
  if (found.length !== data.length) {
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
