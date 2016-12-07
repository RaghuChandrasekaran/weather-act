var React = require('react');
var Proptypes = React.PropTypes;
var CityPrompt = require('../components/CityPrompt');
var apiHelper = require('../utils/apiHelper');

var CityPromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired,
        history: React.PropTypes.object.isRequired
    },
    propTypes: {
        'promptType': Proptypes.string
    },
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
        this.setState({
            'cityName': ''
        });
        var newRoute = '/forecast/' + cityName;
        if (this.context.history.location.pathname !== newRoute) {
            this.context.router.transitionTo(newRoute);
        }
    },
    render: function () {
        return (
            <CityPrompt
                promptType={this.props.promptType}
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                cityName={this.state.cityName}
                />
        )
    }
});

module.exports = CityPromptContainer;