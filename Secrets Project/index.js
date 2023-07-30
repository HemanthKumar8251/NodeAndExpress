//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));
var UserAuth = false;


app.use(bodyParser.urlencoded({extended:true}));

function Authenciator(req,res,next){
    if(req.body["password"]==="ILoveMERN")
        UserAuth = true;
    else UserAuth = false;
    next();
}

app.use(Authenciator);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/check",(req,res)=>{
    if(UserAuth===true)
        res.sendFile(__dirname+"/public/secret.html");
    else    
        res.redirect("/");
        // res.sendFile(__dirname+"/public/index.html");
})

app.listen(3000,(req,res)=>{
    console.log("Listining at port 3000...");
})