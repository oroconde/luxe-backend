const { validate } = require("../middlewares/middleUser");
const { Router } = require("express");
const userControl = require("../controller/userControl");
const serviceControl = require("../controller/serviceControl");
const citaControl = require("../controller/citasControl");
const movControl = require("../controller/movControl");
const router = Router();

//RUTAS DE MODELS USUARIOS
router.post("/user/login", validate, userControl.logg); //<<<--------LOGINN
router.get("/", validate, userControl.gotAll);
router.post("/users", validate, userControl.created);
router.get("/users/:dni", validate, userControl.gotOne);
router.put("/users/:dni", validate, userControl.updated);
router.delete("/users/:dni", validate, userControl.deleted);

//RUTAS DE MODELS SERVICE
router.get("/services", validate, serviceControl.gotAll);
router.post("/service", validate, serviceControl.created);
router.get("/service/:id", validate, serviceControl.gotOne);
router.put("/service/:id", validate, serviceControl.updated);
router.delete("/service/:id", validate, serviceControl.deleted);

//RUTAS DE MODELS CITAS
router.get("/citas", validate, citaControl.gotAll);
router.post("/cita", validate, citaControl.created);
router.get("/cita/:id", validate, citaControl.gotOne);
router.put("/cita/:id", validate, citaControl.updated);
router.delete("/cita/:id", validate, citaControl.deleted);

//RUTAS DE MODELS MOVIMIENTOS
router.get("/movts", validate, movControl.gotAll);
router.post("/mov", validate, movControl.created);
router.get("/mov/:id", validate, movControl.gotOne);
router.put("/mov/:id", validate, movControl.updated);
router.delete("/mov/:id", validate, movControl.deleted);

module.exports = router;
