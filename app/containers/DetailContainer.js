var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
    render: function () {
        return (
            <Detail cityName={this.props.match.params.cityName} weather={this.props.location.state.weather} />
        )
    }
});

module.exports = DetailContainer;