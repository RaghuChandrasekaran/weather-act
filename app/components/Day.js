var React = require('react');
var helper = require('../utils/helper');

var Day = React.createClass({
    onClick: function () {
        this.props.handleClick(this.props.data);
    },
    render: function () {
        var dateTime = helper.getDate(this.props.data.dt);
        var iconSrc = "http://openweathermap.org/img/w/" + this.props.data.weather[0].icon + ".png";
        return (
            <div className="mdl-cell mdl-cell--2-col center" style={{ flexDirection: 'column' }} onClick={this.onClick}>
                <img src={iconSrc} />
                <h4>{dateTime}</h4>
            </div>
        )
    }
});

module.exports = Day;