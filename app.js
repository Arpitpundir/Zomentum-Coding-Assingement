const fs=require("fs")
const path=require("path");
const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorControllers");
const cors = require("cors");
const app = express();
const ticketRouter=require("./routes/ticketRoutes");
const bodyParser=require("body-parser");
app.enable("trust proxy");
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }));
app.use(morgan("dev"));
app.use((req, res, next) => {
        console.log("Hello form the server");
        next();
});
app.use((req, res, next) => {
        req.requestedTime = new Date().toISOString(); 
        next();
});
app.use('/api/v1/ticket', ticketRouter)
app.all('*', (req, res, next) => {
    console.log('not found');
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});
app.use(globalErrorHandler);
module.exports = app;
