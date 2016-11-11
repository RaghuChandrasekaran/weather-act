var React = require('react');
var Proptypes = React.PropTypes;
var ForeCast = require('../components/CityPrompt');
var apiHelper = require('../utils/apiHelper');

var CityPromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
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
        this.context.router.transitionTo('/forecast/' + cityName);
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