var React = require('react');
var ForeCastContainer = require('../containers/ForeCastContainer');

var Header = React.createClass({
    render: function () {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title roboto">Weather-Act</span>
                    <div className="mdl-layout-spacer"></div>
                    <ForeCastContainer prompt="navigation"/>
                </div>
            </header>
        )
    }
});

module.exports = Header;