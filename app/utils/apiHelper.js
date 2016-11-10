'use strict';
const axios = require('axios');
const API_KEY = '0bb2ad3f60f11448632009db948b1933';
var URL = 'http://api.openweathermap.org/data/2.5/';
var defaultQueryParams = {
    q: 'cityName',
    type: 'accurate',
    APPID: API_KEY,
    cnt: 5
};

function formQueryString(queryParams) {
    let queryString = [];
    for (var prop in queryParams) {
        queryString.push(`${prop}=${queryParams[prop]}`);
    }
    return queryString.join('&');
}

function prepareUrl(duration, cityName) {
    defaultQueryParams['q'] = cityName;
    return `${URL}${duration}?${formQueryString(defaultQueryParams)}`;
}

function getForecast(cityName) {
    var url = prepareUrl('forecast/daily', cityName);
    return axios.get(url)
        .then(function (res) {
            return res.data;
        });
}

function getCurrentWeather(cityName) {
    var url = prepareUrl('weather', cityName);
    return axios.get(url)
        .then(function (res) {
            return res.data;
        });
}

module.exports = {
    getForecast: getForecast,
    getCurrentWeather: getCurrentWeather
}

