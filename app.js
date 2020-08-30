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
//app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }));
app.use(morgan("dev"));
//app.options('*', cors());
app.use(function (req, res, next) {
        console.log("kljkl")
        // Website you wish to allow to connect
          
        res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
          
          
          
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
          
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
          
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
          
        // Pass to next layer of middleware
        next();
});
        
//app.options('*', function (req,res) { res.sendStatus(200); });
        
app.use((req, res, next) => {
        console.log("Hello form the server");
        next();
});
app.use((req, res, next) => {
        req.requestedTime = new Date().toISOString(); 
        next();
});
app.use('/api/v1/ticket', ticketRouter)
if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));
        
        app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
        }
app.all('*', (req, res, next) => {
    console.log('not found');
    next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});
app.use(globalErrorHandler);
module.exports = app;
