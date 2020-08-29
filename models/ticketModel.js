const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    username: {
        type: String
    },
    phoneno:{
        type: String
    },
    date: {
        type: String
    },
    timing: {
        type: Number,
    },
    valid:{
        type: String
    }
});
const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;

