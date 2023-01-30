const express = require("express");

const app = express();

const port = 9000;

// app.get('/',(req,res)=>res.send('Hello World'))

// app.listen(port,()=>console.log(`App listening the port ${port}`))

app.get("/", (req, res) => {
  return res.send("Hello krishna");
});
app.get("/login", (req, res) => {
  return res.send("Hello you are in login page");
});
app.get("/signout", (req, res) => {
  return res.send("You are signing out");
});
app.get("/signup", (req, res) => {
  return res.send("You are signing up");
});
app.get("/krishna", (req, res) => {
  return res.send("hey all in instagaram");
});

const isAdmin=(req,res,next)=>{
  console.log('isadmin')
  next()
}

const isLoggedIn=(req,res,next)=>{
  console.log('isLoggedin')
  next()
}

const admin = (req, res) => {
  return res.send("This is admin Page");
};
app.get("/admin",isLoggedIn,isAdmin, admin);
app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
