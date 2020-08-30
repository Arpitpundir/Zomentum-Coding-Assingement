const AppError = require('../utils/appError');
const Ticket = require('../models/ticketModel');
const catchAsync = require('../utils/catchAsync');

exports.deleteTicket = async (req, res, next) => {
    try{
        await Ticket.findByIdAndDelete(req.params.id);
        res.status(200).json({
            //status 204 is used when we sens no content
            status: 'success',
            data: null
        });
    }catch(error){
        return next(error);
    }
}


exports.updateTicket = catchAsync(async (req, res, next) => {
    //console.log("update")
        const doc = await Ticket.findByIdAndUpdate(req.params.id, {timing: req.body.timing, date: req.body.date}, {
            new: true,
            runValidators: true
        });

        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            docs: doc
        });
    });


//we have wrapped delte functionn in another function because we want our function inside tio have acess to
//Ticket variable 

exports.getOneTicket = async (req, res, next) => {
    try{
        let query = Ticket.findById(req.params.id);
        const doc = await query;
        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }
        if(doc.valid=="false"||isValid(doc)){
            res.status(200).json({
                status: 'success',
                docs: doc
            });
        }else{
            setInvalid(doc);
            res.status(200).json({
                status: 'failed',
                msg: "Sorry no such valid tickets."
            });
        }
    }catch(error){
        next(error);
    }
};

exports.getTicket = async (req, res, next) => {
    try{
        //console.log("Getticket")
        //console.log(req.query)
        let doc = await Ticket.find({
            timing:req.query.timing,
            date:req.query.date,
            valid: true
        }).exec();
        console.log(doc)
        if (!doc||doc.length==0) {
            return next(new AppError('No document found', 404));
        }
        const validTickets=doc.filter((ticket)=>{
            if(isValid(ticket)){
                return true;
            }else{
                setInvalid(ticket);
                return false;
            }
        })
        res.status(200).json({
            status: 'success',
            docs: validTickets
        });
    }catch(err){
        console.log("catched")
        next(err);
    }
}


exports.createTicket = async (req, res, next) => {
    try{
        const doc=await Ticket.find({timing:req.body.timing,date:req.body.date,valid:"true"});
        //console.log(doc)
        if(doc.length>20){
            res.status(200).json({
                status: "failed",
                msg: "Seats for this slot are full. Please choose another timing. Sorry for all inconvinience."
            })
        }else{
            req.body.valid=true;
            const newTicket=await Ticket.create(req.body);
            res.status(201).json({
                status: 'success',
                docs: newTicket
            });
        }
    }catch(error){
        next(error);
    }       
};

const isValid = (ticket)=>{
    const currDate=new Date();
    const from=ticket.date.split("-")
    const ticketDate=new Date(from[2], from[1]-1, from[0]);
    console.log(currDate.getFullYear(), ticketDate.getFullYear())
    console.log(currDate.getMonth(), ticketDate.getMonth())
    console.log(currDate.getDay(), ticketDate.getDay())
    console.log(currDate.getHours(), ticket.timing)
    if(currDate.getFullYear()<ticketDate.getFullYear()){
        return true
    }else if(currDate.getMonth()<ticketDate.getMonth()){
        return true
    }else if(currDate.getDay()<ticketDate.getDay()){
        return true
    }else if(currDate.getMonth()==ticketDate.getMonth()&&
    currDate.getDay()==ticketDate.getDay()&&
    currDate.getFullYear()==ticketDate.getFullYear()&&
    currDate.getHours()-ticket.timing<=8){
        return true;
    }else{
        return false;
    }
}

const setInvalid=async(ticket)=>{
    try{
        await Ticket.findByIdAndUpdate(ticket.id,{
            valid:"false"
        })
    }catch(error){
        next(error)
    }
}