var React = require('react');
var Loading = require('../components/Loading');
var Forecast = require('../components/Forecast');
var apiHelper = require('../utils/apiHelper');

var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true
        }
    },
    getWeather: function (cityName) {
        apiHelper.getForecast(cityName)
            .then(function (forecast) {
                this.setState({
                    isLoading: false,
                    forecast: forecast
                });
            }.bind(this))
            .catch(function (err) {
                console.error(err);
                this.context.router.history.push('/');
            }.bind(this));
    },
    componentDidMount: function () {
        this.getWeather(this.props.match.params.cityName);
    },
    componentDidUpdate: function (prevProps) {
        if (prevProps.match.params.cityName !== this.props.match.params.cityName) {
            this.setState({
                isLoading: true
            });
            this.getWeather(this.props.match.params.cityName);
        }
    },
    onClick: function (weather) {
        this.context.router.history.push({
            pathname: '/detail/' + this.props.match.params.cityName,
            state: {
                weather: weather
            }
        });
    },
    render: function () {
        return (
            this.state.isLoading ? <Loading /> : <Forecast cityName={this.props.match.params.cityName} forecast={this.state.forecast}
                handleClick={this.onClick} />
        )
    }
});

module.exports = ForecastContainer;