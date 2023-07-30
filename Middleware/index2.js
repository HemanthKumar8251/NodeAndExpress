import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about",(req,res)=>{
  res.send("<h4>About me!</h4>")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
