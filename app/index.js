var React = require('react');
var ReactDom = require('react-dom');
var app = document.getElementById('app');

var Helloworld = React.createClass({
    render: function () {
        return <div>Hello</div>
    }
});

ReactDom.render(<Helloworld />, app);