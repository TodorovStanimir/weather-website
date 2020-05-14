const request = require('postman-request');

const forecast = (latitude, longtitude, callback) => {

  const url = 'http://api.weatherstack.com/forecast?access_key=7fddc13735898463f1e3b9c92fceaf0b&query=' + latitude + ',' + longtitude + '&units=m';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to wather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location!', undefined)
    } else {
      console.log(body);
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out, feels like ' + body.current.feelslike + ' degrees. The hamidity is ' + body.current.humidity + '%. There is a ' + body.current.precip + '% chance of rain.');
    }
  });
};

module.exports = forecast;