var React = require('react');

var Forecast = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.cityName}
            </div>
        )
    }
});

module.exports = Forecast;