const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Adding the bodyparser to express to read the posted data
app.use(bodyParser.urlencoded({ extended: true }));

//Simple addition calculator

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n2 + n1;

    res.send(`The sum of ${n1} and ${n2} is ${result}`);
})

//BMI Calculator

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', (req, res) => {
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);

    // Example: Weight = 68 kg, Height = 165 cm(1.65 m)
    // Calculation: 68 ÷ (1.65)2 = 24.98

    var bmi = w/(Math.pow(h/100,2));

    res.send(`Your BMI is ${bmi}`);
})

app.listen(3000, () => {
    console.log("Server is Running");
})