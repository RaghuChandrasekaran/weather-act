var React = require('react');
var helper = require('../utils/helper');

var Icon = React.createClass({
    render: function () {
        var iconClass = helper.getIconName(this.props.iconId);
        return (
            <i className={iconClass} style={{ color: '#2196f3', fontSize: '53px' }}></i>
        )
    }
});

module.exports = Icon;