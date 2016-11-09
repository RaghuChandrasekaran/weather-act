var React = require('react');
var ForeCastContainer = require('../containers/ForeCastContainer');

var Home = React.createClass({
    render: function () {
        return (
            <div className="fullView center">
                <ForeCastContainer />
            </div>
        )
    }
});

module.exports = Home;