var React = require('react');
var Day = require('./Day');
var Temperature = require('./Temperature');
var helper = require('../utils/helper');

var Detail = React.createClass({
    render: function () {
        return (
            <div className="center">
                <Day data={this.props.weather} />
                <ul className="demo-list-item mdl-list">
                    <li className="mdl-list__item">
                        <span className="mdl-list__item-primary-content">
                            {this.props.cityName}
                        </span>
                    </li>
                    <li className="mdl-list__item">
                        <span className="mdl-list__item-primary-content">
                            {this.props.weather.weather[0].description}
                        </span>
                    </li>
                    <li className="mdl-list__item">
                        <span className="mdl-list__item-primary-content">
                            Min Temp : <Temperature temp={this.props.weather.temp.min} />
                        </span>
                    </li>
                    <li className="mdl-list__item">
                        <span className="mdl-list__item-primary-content">
                            Max Temp : <Temperature temp={this.props.weather.temp.max} />
                        </span>
                    </li>
                    <li className="mdl-list__item">
                        <span className="mdl-list__item-primary-content">
                            Humidity : {this.props.weather.humidity}%
                             </span>
                    </li>
                </ul>
            </div>
        )
    }
});

module.exports = Detail;