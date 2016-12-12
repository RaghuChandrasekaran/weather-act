var React = require('react');
var Icon = require('./Icons');
var helper = require('../utils/helper');

var Day = React.createClass({
    onClick: function () {
        this.props.handleClick(this.props.data);
    },
    render: function () {
        var dateTime = helper.getDate(this.props.data.dt);
        return (
            <div className="mdl-cell mdl-cell--3-col center" style={{ flexDirection: 'column' }} onClick={this.onClick}>
                <Icon iconId={this.props.data.weather[0].id} />
                <h4>{dateTime}</h4>
            </div>
        )
    }
});

module.exports = Day;