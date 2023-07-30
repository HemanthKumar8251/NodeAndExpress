import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
  console.log("The street name is "+req.body.street)
  console.log("The pet is "+req.body.pet)
  res.send("<h3>Details Posted!</h3>")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
