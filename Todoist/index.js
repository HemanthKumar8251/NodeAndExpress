// Todist Application
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
var items = []
// Adding the static folder
app.use(express.static("public"));

// Getting the base directory address
const __dirname = dirname(fileURLToPath(import.meta.url));

// Using the body-parser middleware
app.use(bodyParser.urlencoded({extended:true}))

// Landing Page
app.get("/",(req,res)=>{
    res.render("index.ejs",{listItems:items});
})

// Adding an element
app.post("/",(req,res)=>{
    if(!items.includes(req.body["newItem"]))items.push(req.body["newItem"]);
    items.forEach(ele=>{
        console.log(ele);
    })
    res.render("index.ejs",{listItems:items});
})

// Setting up the server
app.listen(port,()=>{
    console.log("Listining at port 3000");
})