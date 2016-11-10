var React = require('react');
var ForeCast = require('../components/CityPrompt');
var apiHelper = require('../utils/apiHelper');

var CityPromptContainer = React.createClass({
    getDefaultProps: function () {
        return {
            'promptType': 'form'
        }
    },
    getInitialState: function () {
        return {
            'cityName': ''
        }
    },
    handleUpdateCity: function (e) {
        this.setState({
            'cityName': e.target.value
        });
    },
    handleSubmitCity: function (e) {
        e.preventDefault();
        var cityName = this.state.cityName;
        apiHelper.getForecast(cityName);
        apiHelper.getCurrentWeather(cityName);
        this.setState({
            'cityName': ''
        });
    },
    render: function () {
        return (
            <ForeCast
                promptType={this.props.promptType}
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                cityName={this.state.cityName}
                />
        )
    }
});

module.exports = CityPromptContainer;