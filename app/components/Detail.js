var React = require('react');
var Day = require('./Day');
var helper = require('../utils/helper');

var Detail = React.createClass({
    render: function () {
        return (
            <div className="fullView center" style={{ flexDirection: 'column' }}>
                <Day data={this.props.weather} />
                <div>
                    <p>{this.props.cityName}</p>
                    <p>{this.props.weather.weather[0].description}</p>
                    <p>min temp:{helper.convertTemp(this.props.weather.temp.min)}</p>
                    <p>max temp:{helper.convertTemp(this.props.weather.temp.max)}</p>
                    <p>humidity:{this.props.weather.humidity}</p>
                </div>
            </div>
        )
    }
});

module.exports = Detail;