var React = require('react');
var Proptypes = React.PropTypes;

function NavPrompt(props) {
    return (
        <form onSubmit={props.onSubmitCity}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <div className="mdl-textfield__expandable-holder">
                    <input
                        className="mdl-textfield__input" type="text"
                        id="cityInput"
                        value={props.cityName}
                        onChange={props.onUpdateCity}
                        />
                </div>
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="cityInput">
                    <i className="material-icons">search</i>
                </label>
            </div>
        </form>
    );
}

function FormPrompt(props) {
    return (
        <form className="forecastForm" onSubmit={props.onSubmitCity}>
            <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <input type="text"
                    className="mdl-textfield__input"
                    id="cityInput"
                    value={props.cityName}
                    onChange={props.onUpdateCity}
                    />
                <label className="mdl-textfield__label">Enter a City</label>
            </div>
            <button className="mdl-button mdl-js-button mdl-button--colored mdl-button--raised mdl-js-ripple-effect roboto"
                type="submit">
                Get Weather
            </button>
        </form>
    );
}

function CityPrompt(props) {
    if (props.promptType === 'navigation') {
        return <NavPrompt {...props} />
    } else {
        return <FormPrompt {...props} />;
    }
}

CityPrompt.propTypes = {
    promptType: Proptypes.string.isRequired,
    cityName: Proptypes.string.isRequired,
    onSubmitCity: Proptypes.func.isRequired,
    onUpdateCity: Proptypes.func.isRequired
};

module.exports = CityPrompt;