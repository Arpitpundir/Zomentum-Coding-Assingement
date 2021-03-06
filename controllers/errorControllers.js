const AppError = require("./../utils/appError");
const devModeErrorResponse = (req, res, err) => {
    //function which would handle the errors when we are running in devlopment mode
    console.log("Error", err);
    return res.status(200).json({
        status: "failed",
        msg: err.message
    });
}



module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    devModeErrorResponse(req, res, err);
    //next();
};