var React = require('react');
var Proptypes = React.PropTypes;
var styles = {
    content: {
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: '30px',
        fontSize: '20px'
    }
};

var Loading = React.createClass({
    propTypes: {
        'text': Proptypes.string,
        'speed': Proptypes.number
    },
    getDefaultProps: function () {
        return {
            'text': "Loading",
            'speed': 300
        }
    },
    getInitialState: function () {
        this.originalText = this.props.text;
        return {
            'text': this.props.text
        }
    },
    componentDidMount: function () {
        var stopperText = this.originalText + '...';
        this.loaderAni = setInterval(function () {
            if (this.state.text === stopperText) {
                this.setState({
                    'text': this.originalText
                });
            } else {
                this.setState({
                    'text': this.state.text + '.'
                });
            }
        }.bind(this), this.props.speed);
    },
    componentWillUnmount: function () {
        clearInterval(this.loaderAni);
    },
    render: function () {
        return (
            <div>
                <p style={styles.content}>{this.state.text}</p>
            </div>
        );
    }
});

module.exports = Loading;