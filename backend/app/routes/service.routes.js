const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");
const serviceController = require("../controllers/service.controller");
const servicePermission = require("../middlewares/servicePermission");

// Create a new service (POST)
router.post("/api/services", [authJwt.verifyToken, authJwt.isAdmin], serviceController.createService);

// Get all services (GET)
router.get("/api/services", serviceController.getAllServices);

// Get a specific service by ID (GET)
router.get("/api/services/:id", serviceController.getServiceById);

// Update a service by ID (PUT)
router.put("/api/services/:id", [authJwt.verifyToken, authJwt.isAdmin, servicePermission], serviceController.updateService);

// Delete a service by ID (DELETE)
router.delete("/api/services/:id", [authJwt.verifyToken, authJwt.isAdmin, servicePermission], serviceController.deleteService);

module.exports = router;
