const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
router.get("/search",ticketController.getTicket)
router.put("/:id",ticketController.updateTicket)
router.get("/:id",ticketController.getOneTicket)
router.delete("/:id", ticketController.deleteTicket)
router.post("/",ticketController.createTicket);
module.exports = router;