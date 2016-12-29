var React = require('react');
var helper = require('../utils/helper');

function CelsiusTemp(props) {
    return <span>{helper.convertTemp(props.temp, 'celsius')}&deg;C</span>
}

function FahrenheitTemp(props) {
    return <span>{helper.convertTemp(props.temp, 'fahrenheit')}&deg;F</span>
}

var Temperature = React.createClass({
    getInitialState: function () {
        return {
            metric: 'celsius'
        };
    },
    onUpdateTemperature: function (e) {
        if (e.target.checked) {
            this.setState({
                metric: 'celsius'
            });
        } else {
            this.setState({
                metric: 'fahrenheit'
            });
        }
    },
    componentDidMount: function () {
        componentHandler.upgradeDom();
    },
    render: function () {
        var id = "temperature" + this.props.temp;
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {this.state.metric === 'celsius' ? <CelsiusTemp temp={this.props.temp} /> : <FahrenheitTemp temp={this.props.temp} />}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <span className="mdl-list__item-secondary-action">
                        <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor={id}>
                            <input checked={this.state.metric === 'celsius'} onChange={this.onUpdateTemperature} type="checkbox" id={id} className="mdl-switch__input" />
                        </label>
                    </span>
                </div>
            </div>
        )
    }
});

module.exports = Temperature;