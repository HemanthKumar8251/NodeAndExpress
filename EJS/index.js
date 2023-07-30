import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/",(req,res)=>{
    const today = new Date();
    const day = today.getDay();
    console.log(day);
    var dayType = "";
    var advice = "";
    if(day === 0){
        dayType = "Weekend";    
        advice = "Enjoy the day";
    }
    else{
        dayType = "Weekday";    
        advice = "Work your ass off";
    }
    res.render(__dirname+"/views/index.ejs",{dayType:`${dayType}`,advice:`${advice}`});
})

app.listen(3000,(req,res)=>{
    console.log("Listing on port 3000");
})