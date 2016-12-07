var React = require('react');
var Day = require('./Day');

var Forecast = React.createClass({
    render: function () {
        let days = this.props.forecast.list.map((eachDay) => <Day key={eachDay.dt} data={eachDay} handleClick={this.props.handleClick} />);
        return (
            <div className="fullView">
                <div className="center" style={{ flexDirection: 'column' }}>
                    <h1>{this.props.forecast.city.name}</h1>
                    <div><h3>Select a day</h3></div>
                </div>
                <div className="mdl-grid center">
                    {days}
                </div>
            </div >
        )
    }
});

module.exports = Forecast;