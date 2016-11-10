var React = require('react');
var CityPromptContainer = require('../containers/CityPromptContainer');

var Header = React.createClass({
    render: function() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title roboto">Weather-Act</span>
                    <div className="mdl-layout-spacer"></div>
                    <CityPromptContainer promptType="navigation" />
                </div>
            </header>
        )
    }
});

module.exports = Header;