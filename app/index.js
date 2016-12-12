var React = require('react');
var ReactDom = require('react-dom');
var app = document.getElementById('app');
require('./css/weather-icons.css');
require('./css/index.css');
var AppComponent = require('./containers/AppContainer');

ReactDom.render(<AppComponent />, app);