var React = require('react');
var CityPromptContainer = require('../containers/CityPromptContainer');

var Header = React.createClass({
    contextTypes: {
        history: React.PropTypes.object.isRequired
    },
    handleGoBack: function () {
        this.context.history.goBack();
    },
    handleGoForward: function () {
        this.context.history.goForward();
    },
    render: function () {
        var buttonClassNames = "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon ";
        var goBackClass = this.context.history.canGo(-1) ? buttonClassNames + "show" : buttonClassNames + "hidden";
        var goForwardClass = this.context.history.canGo(1) ? buttonClassNames + "show" : buttonClassNames + "hidden";
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <div className="brand">
                        <button onClick={this.handleGoBack} className={goBackClass}>
                            <i className="material-icons" role="presentation">arrow_back</i>
                            <span className="mdl-button__ripple-container">
                                <span className="mdl-ripple"></span>
                            </span>
                        </button>
                        <span className="mdl-layout-title roboto">Weather-Act</span>
                        <button onClick={this.handleGoForward} className={goForwardClass}>
                            <i className="material-icons" role="presentation">arrow_forward</i>
                            <span className="mdl-button__ripple-container">
                                <span className="mdl-ripple"></span>
                            </span>
                        </button>
                    </div>
                    <div className="mdl-layout-spacer"></div>
                    <CityPromptContainer promptType="navigation" />
                </div>
            </header >
        )
    }
});

module.exports = Header;