require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();

mongoose
  .connect(process.env.DATABASEURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected", process.env.DATABASEURL);
  });

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const port = process.env.PORT || 8000;

app.get('/',(req,res)=>{
  return res.send('Hello Mongodb')
})
app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
