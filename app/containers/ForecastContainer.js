var React = require('react');
var Loading = require('../components/Loading');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true
        }
    },
    componentDidMount: function () {
        console.log("mounted");
        this.asyncDemo = setInterval(function () {
            this.setState({
                isLoading: false
            });
        }.bind(this), 3000);
    },
    componentWillUnmount: function () {
        clearInterval(this.asyncDemo);
    },
    render: function () {
        return (
            this.state.isLoading ? <Loading /> : <Forecast cityName={this.props.params.cityName} />
        )
    }
});

module.exports = ForecastContainer;