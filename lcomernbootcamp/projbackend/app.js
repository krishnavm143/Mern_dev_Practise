require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();

const authRoutes=require("./routes/authentication")



// DB connection
mongoose
  .connect(process.env.DATABASEURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected", process.env.DATABASEURL);
  });

  // Middelwares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// Port
const port = process.env.PORT || 8000;

// Routes
app.use('/api',authRoutes)

// app.get('/example/b',(req,res,next)=>{
//   console.log('the response sent to nexr function')
//   next()
// },(req,res)=>{
//   res.send('it came to another function')
// })

// app.route('/book').get((req,res)=>{
//   res.send('get Method')
// })
// .post((req,res)=>{
//   res.send('post Method')
// })
// .put((req,res)=>{
//   res.send('put Method')
// })



// Starting a server
app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
