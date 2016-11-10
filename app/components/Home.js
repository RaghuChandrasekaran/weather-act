var React = require('react');
var CityPromptContainer = require('../containers/CityPromptContainer');

var Home = React.createClass({
    render: function () {
        return (
            <div className="fullView center">
                <CityPromptContainer />
            </div>
        )
    }
});

module.exports = Home;