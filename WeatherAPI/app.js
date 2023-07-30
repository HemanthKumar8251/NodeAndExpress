const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const https = require('https');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    const city = req.body.cityName;
    const apiKey = "f9e2d7ebdfc5332a96c25d588e39853b";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=" + city + "&units=" + unit;

    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            // console.log(weatherData);

            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;

            const icon = weatherData.weather[0].icon;
            const imgurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<h1>The temperature in " + city + " is currently " + temp + " degree celsius</h1>");
            res.write("<h4>The weather now is " + desc + "</h4>");
            res.write("<img src=" + imgurl + ">");
            res.send();
        });
    });

});

app.listen(3000, () => {
    console.log('The sever is up and running');
})