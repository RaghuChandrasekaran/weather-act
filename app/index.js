var React = require('react');
var ReactDom = require('react-dom');
var app = document.getElementById('app');
require('./index.css');
var AppComponent = require('./containers/AppContainer');

ReactDom.render(<AppComponent />, app);