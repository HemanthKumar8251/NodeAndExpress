import express from "express";

const app = express();
const port = 3000;

// app.use((req,res,next)=>{
//   console.log("The request method is : ",req.method)
//   console.log("The url is : ",req.url)
//   next()
// });

// app.use((req,res,next)=>{
//   console.log("Just Checking if it works");
//   next()
// })

function logger(req,res,next){
  console.log(req.method,req.url)
  next()
}

app.use(logger)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about",(req,res)=>{
  res.send("<h4>About me!</h4>")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
