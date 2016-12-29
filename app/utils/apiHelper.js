'use strict';
const axios = require('axios');
const URL = 'https://weatheract.herokuapp.com/';

function getForecast(cityName) {
    var url = URL + 'forecast/' + cityName;
    return makeRequest(url);
}

function getCurrentWeather(cityName) {
    var url = URL + 'current/' + cityName;
    return makeRequest(url);
}

function makeRequest(url) {
    return axios.get(url)
        .then(function (res) {
            return res.data;
        });
}

module.exports = {
    getForecast: getForecast,
    getCurrentWeather: getCurrentWeather
}

