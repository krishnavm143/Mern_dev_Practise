require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
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

const port = 8000;

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
