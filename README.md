# Zomentum-Coding-Assingement
This is a MERN stack web app where client side uses React and server is using Node.js and MongoDB is used as a database.
There were total 8 tasks given these tasks can be completed in 6 end points. Lets go through them one by one 
## Create A Ticket
This Endpoint is used to book a new ticket.
It takes four field as input name, phone no, date and show timing, there are four show timing.
You can test this endpoint by taking any example but the date should be in format dd-mm-yyyy
### Postman Request
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/CreateTicket/postmanReq.png)
### Postman Response
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/CreateTicket/postmanRes.png)
### Heroku App Request
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/CreateTicket/appReq.png)
### Heroku App Response
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/CreateTicket/appRes.png)

## Find Ticket for a particular timing
This Endpoint is used to find all ticket for a particular date and timing. Result only contains valid tickets information i.e such tickets whose time 
diffrence is between current date and time is less than 8 hours
### Postman Request
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/GetAllTicketForParticularTiming/postmanReq.png)
### Postman Response
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/GetAllTicketForParticularTiming/postmanRes.png)
### Heroku App Request 
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/GetAllTicketForParticularTiming/appReq.png)
### Heroku App Response
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/GetAllTicketForParticularTiming/appRes.png)

## Update Ticket Timing
This Endpoint is used for updating the timing of an existing ticket. It takes as input Ticket Id, new Date and timing.
### Postman Request
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/UpdateATicketTiming/postmanReq.png)
### Postman Response
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/UpdateATicketTiming/postmanRes.png)
### Heroku App Request
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/UpdateATicketTiming/appReq.png)
### Heroku App Response
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/UpdateATicketTiming/appRes.png)

## Search a user by Ticket id
This Endpoint is used to find user info for a valid ticket. Ticket Id is required as input.
### Postman Request
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/SearchUser/postmanReq.png)
### Postman Response
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/SearchUser/postmanRes.png)
### Heroku App Request
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/SearchUser/appReq.png)
### Heroku App Response
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/SearchUser/appRes.png)

## Delete A Ticket
This Endpoint is used to delete an existing ticket. Ticket id is required as input.
### Postman Req
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/DeleteTicket/postmanReq.png)
### Postman Res
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/DeleteTicket/postmanRes.png)
### Heroku App Request
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/DeleteTicket/appReq.png)
### Heroku App Response
![ScreenShot](https://github.com/Arpitpundir/Zomentum-Coding-Assingement/blob/master/Test-Screenshots/DeleteTicket/appRes.png)

