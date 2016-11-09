var React = require('react');
var ForeCast = require('../components/ForeCast');

var ForeCastContainer = React.createClass({
    getDefaultProps:function(){
        return {
            'prompt':'form'
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
    },
    render: function () {
        return (
            <ForeCast 
                prompt={this.props.prompt}
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                cityName={this.state.cityName}
                />
        )
    }
});

module.exports = ForeCastContainer;