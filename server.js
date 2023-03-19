import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/weather', async (req, res) => {
  const { city } = req.body;

  const url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
  const data = await url.json();

  const weather = {
    temperature: data.main.temp,
    wind_speed: data.wind.speed
  };

  res.status(200).json(weather);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});