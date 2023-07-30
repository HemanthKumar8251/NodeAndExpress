const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html')
})

app.post('/',(req,res)=>{
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;
    console.log(`${firstName} ${lastName} - ${email}`);
    res.send("DONE!!") 
})
 
app.listen(3000,()=>{
    console.log("The server is up and running!")
})

//API Key
//eb1c73cb4a06da3c6d9b265fd56322ce-us11

//List ID
// 2acef41f06