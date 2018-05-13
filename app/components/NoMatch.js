var React = require('react');

const NoMatch = React.createClass({
    render: function () {
        return (
            <div>
                <h3>
                    No match for <code>{this.props.location.pathname}</code>
                </h3>
            </div>
        )
    }
});

module.exports = NoMatch;