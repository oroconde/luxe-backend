const fs = require("fs");
const path = require("path");
const pathDB = path.join(__dirname, "../db/users.json");

const GetAll = () => {
  return JSON.parse(fs.readFileSync(pathDB, "utf8"));
};
const GetOne = (dni) => {
  const data = GetAll().find((item) => item.dni === dni);
  return data;
};
const Create = (newUser) => {
  const found = GetAll().filter((item) => item.dni == newUser.dni);
  const data = GetAll();
  if (found.length == 0) {
    data.push(newUser);
    fs.writeFileSync(pathDB, JSON.stringify(data, null, 2, "utf8"));
    return newUser;
  } else {
    return false;
  }
};
const Update = (user, edit) => {
  const found = GetAll().filter((item) => item.dni !== user);
  const insert = GetAll();
  if (found.length !== insert.length) {
    found.push(edit);
    fs.writeFileSync(pathDB, JSON.stringify(found, null, 2, "utf8"));
    return true;
  } else {
    return false;
  }
};
const Delete = (userDni) => {
  const found = GetAll().filter((item) => item.dni !== userDni);
  const data = GetAll();
  if (found.length !== data.length) {
    fs.writeFileSync(pathDB, JSON.stringify(found, null, 2, "utf8"));
    return true;
  } else {
    return false;
  }
};
const Login = (user) => {
  const found = GetAll().find(
    (item) => item.username === user.username && item.password === user.password
  );
  if (found) {
    return "123";
  } else {
    return false;
  }
};
module.exports = { GetOne, GetOne, Create, Update, Delete, GetAll, Login };