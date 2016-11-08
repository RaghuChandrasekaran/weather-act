var React = require('react');
var ReactDom = require('react-dom');
var app = document.getElementById('app');
var AppComponent = require('./containers/AppContainer');

ReactDom.render(<AppComponent />, app);